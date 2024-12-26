import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';
import brain from 'brain';

interface StockChartProps {
  symbol: string;
}

export function StockChart({ symbol }: StockChartProps) {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!symbol) return;
      
      setLoading(true);
      try {
        const response = await brain.get_stock_data({ symbol });
        const stockData = await response.json();
        
        // Transform the data for the chart
        const timeSeriesData = stockData.data['Time Series (Daily)'];
        const chartData = Object.entries(timeSeriesData)
          .slice(0, 30) // Last 30 days
          .map(([date, values]: [string, any]) => ({
            date,
            price: parseFloat(values['4. close']),
          }))
          .reverse();
        
        setData(chartData);
      } catch (error) {
        toast.error('Failed to fetch stock data');
        console.error('Error fetching stock data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-4">
        <p className="text-gray-500 dark:text-gray-400">No data available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] bg-white dark:bg-gray-800 rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="date"
            stroke="#6B7280"
            tick={{ fill: '#6B7280' }}
            tickFormatter={(value) => new Date(value).toLocaleDateString()}
          />
          <YAxis stroke="#6B7280" tick={{ fill: '#6B7280' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '0.5rem',
              color: '#F3F4F6',
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
