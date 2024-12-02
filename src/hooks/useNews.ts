import { useState, useEffect } from 'react';
import { fetchNews } from '../services/newsService';
import type { Article } from '../types/news';
import type { Category } from '../constants/categories';

export function useNews(category: Category) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchNews(category);
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [category]);

  return { articles, loading, error, refetch: () => setCategory(category) };
}