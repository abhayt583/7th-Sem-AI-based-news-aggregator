import type { Article } from '../types/news';

export const mockArticles: Article[] = [
  {
    title: "SpaceX Successfully Launches New Satellite Constellation",
    description: "SpaceX has successfully launched another batch of satellites, expanding their global internet coverage network.",
    url: "https://example.com/spacex-launch",
    urlToImage: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=800",
    publishedAt: new Date().toISOString(),
    source: { name: "Tech News" },
    content: "SpaceX continues to expand its satellite network..."
  },
  {
    title: "Breakthrough in Quantum Computing Research",
    description: "Scientists announce major advancement in quantum computing stability.",
    url: "https://example.com/quantum-computing",
    urlToImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    source: { name: "Science Daily" },
    content: "Researchers have achieved a new milestone..."
  },
  {
    title: "Global Climate Summit Announces New Initiatives",
    description: "World leaders agree on ambitious new climate action plans.",
    url: "https://example.com/climate-summit",
    urlToImage: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?q=80&w=800",
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    source: { name: "Environmental News" },
    content: "The latest climate summit has concluded..."
  }
];