import axios from 'axios';
import { mockArticles } from './mockData';
import type { Article } from '../types/news';

const isDevelopment = import.meta.env.DEV;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNews(category: string): Promise<Article[]> {
  // Use mock data in development
  if (isDevelopment) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockArticles;
  }

  // Use real API in production
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        category,
        apiKey: API_KEY,
      },
    });

    if (response.data?.articles) {
      return response.data.articles;
    }
    throw new Error('Invalid response format');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch news');
    }
    throw error;
  }
}