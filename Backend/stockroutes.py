from fastapi import APIRouter, HTTPException
import databutton as db
import requests
from pydantic import BaseModel
from typing import Dict, Any, Optional
from openai import OpenAI

router = APIRouter()

class StockRequest(BaseModel):
    symbol: str

class AIAnalysisRequest(BaseModel):
    symbol: str
    question: Optional[str] = None

class StockResponse(BaseModel):
    data: Dict[str, Any]

class AIAnalysisResponse(BaseModel):
    analysis: str

def get_alpha_vantage_data(symbol: str) -> Dict[str, Any]:
    api_key = db.secrets.get("ALPHA_VANTAGE_API_KEY")
    url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={api_key}"
    
    response = requests.get(url)
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch stock data")
    
    return response.json()

@router.post("/stock-data")
def get_stock_data(request: StockRequest) -> StockResponse:
    try:
        data = get_alpha_vantage_data(request.symbol)
        return StockResponse(data=data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/analyze")
def analyze_stock(request: AIAnalysisRequest) -> AIAnalysisResponse:
    try:
        # Get stock data
        data = get_alpha_vantage_data(request.symbol)
        
        # Initialize OpenAI client
        client = OpenAI(api_key=db.secrets.get("OPENAI_API_KEY"))
        
        # Prepare prompt
        prompt = f"Analyze the following stock data for {request.symbol}:\n"
        if request.question:
            prompt += f"\nSpecific question: {request.question}\n"
        prompt += f"\nStock data: {str(data)}"
        
        # Get AI analysis
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a professional stock market analyst. Provide clear, concise analysis of stock data."},
                {"role": "user", "content": prompt}
            ]
        )
        
        analysis = completion.choices[0].message.content
        return AIAnalysisResponse(analysis=analysis)
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
