import nlp from 'compromise';

// Sentiment analysis word lists
const POSITIVE_WORDS = new Set([
  'good', 'great', 'awesome', 'excellent', 'happy', 'positive', 'success', 'innovative',
  'breakthrough', 'achievement', 'improve', 'benefit', 'advantage', 'progress', 'growth',
  'win', 'best', 'better', 'advance', 'support', 'promising', 'opportunity', 'efficient'
]);

const NEGATIVE_WORDS = new Set([
  'bad', 'poor', 'terrible', 'awful', 'negative', 'fail', 'crisis', 'problem',
  'issue', 'concern', 'risk', 'threat', 'decline', 'loss', 'worst', 'against',
  'danger', 'difficult', 'trouble', 'worry', 'challenge', 'conflict', 'disaster'
]);

export function analyzeSentiment(text: string): 'positive' | 'neutral' | 'negative' {
  if (!text) return 'neutral';
  
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  let score = 0;
  
  words.forEach(word => {
    if (POSITIVE_WORDS.has(word)) score++;
    if (NEGATIVE_WORDS.has(word)) score--;
  });
  
  if (score > 1) return 'positive';
  if (score < -1) return 'negative';
  return 'neutral';
}

export function extractKeywords(text: string): string[] {
  if (!text) return [];
  
  const doc = nlp(text);
  const topics = doc.topics().json();
  const nouns = doc.nouns().json();
  
  // Combine topics and nouns, remove duplicates
  const keywords = new Set([
    ...topics.map((t: any) => t.text.toLowerCase()),
    ...nouns.map((n: any) => n.text.toLowerCase())
  ]);
  
  return Array.from(keywords)
    .filter(word => word.length > 2)
    .slice(0, 5);
}

export function summarizeText(text: string): string {
  if (!text) return '';
  
  const doc = nlp(text);
  const sentences = doc.sentences().json();
  
  // Get first two sentences or return the whole text if it's shorter
  const summary = sentences
    .slice(0, 2)
    .map((s: any) => s.text)
    .join(' ');
    
  return summary || text.slice(0, 150) + '...';
}