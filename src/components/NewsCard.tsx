import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ExternalLink, Clock, Newspaper } from 'lucide-react';
import type { Article } from '../types/news';

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });

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
        
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}