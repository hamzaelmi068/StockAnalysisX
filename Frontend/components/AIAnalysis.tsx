import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import brain from 'brain';

interface AIAnalysisProps {
  symbol: string;
}

export function AIAnalysis({ symbol }: AIAnalysisProps) {
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');

  const getAnalysis = async (customQuestion?: string) => {
    setLoading(true);
    try {
      const response = await brain.analyze_stock({
        symbol,
        question: customQuestion || undefined,
      });
      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      toast.error('Failed to get AI analysis');
      console.error('Error getting AI analysis:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast.error('Please enter a question');
      return;
    }
    getAnalysis(question);
  };

  React.useEffect(() => {
    if (symbol) {
      getAnalysis();
    }
  }, [symbol]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        AI Analysis
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about this stock..."
            className="flex-1 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Ask
          </button>
        </div>
      </form>

      <div className="mt-4">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : analysis ? (
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300">{analysis}</p>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No analysis available yet
          </p>
        )}
      </div>
    </div>
  );
}
