import React, { useState } from 'react';
import { ExternalLink, Clock, Newspaper, ChevronDown, ChevronUp, Brain } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';
import { analyzeSentiment, extractKeywords, summarizeText } from '../../utils/aiUtils';
import type { Article } from '../../types/news';

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  const [showAiInsights, setShowAiInsights] = useState(false);
  const timeAgo = formatTimeAgo(article.publishedAt);
  
  const sentiment = analyzeSentiment(article.description);
  const keywords = extractKeywords(article.description);
  const summary = summarizeText(article.content);

  const sentimentColor = {
    positive: 'text-green-600',
    neutral: 'text-gray-600',
    negative: 'text-red-600'
  }[sentiment];

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800'}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-4 text-white">
          <div className="flex items-center gap-2 text-sm mb-2">
            <Newspaper className="w-4 h-4" />
            <span>{article.source.name}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        
        <div className="flex items-center justify-between">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More <ExternalLink className="w-4 h-4" />
          </a>
          
          <button
            onClick={() => setShowAiInsights(!showAiInsights)}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
          >
            <Brain className="w-4 h-4" />
            AI Insights
            {showAiInsights ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {showAiInsights && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Sentiment</h3>
                <p className={`text-sm ${sentimentColor} capitalize`}>{sentiment}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Key Topics</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-purple-50 text-purple-700 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-700">AI Summary</h3>
                <p className="text-sm text-gray-600">{summary}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}