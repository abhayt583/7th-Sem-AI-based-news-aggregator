export const CATEGORIES = [
  'general',
  'business',
  'technology',
  'entertainment',
  'health',
  'science',
  'sports',
] as const;

export type Category = typeof CATEGORIES[number];