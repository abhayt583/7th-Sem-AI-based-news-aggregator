export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  content: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  keywords?: string[];
  summary?: string;
}