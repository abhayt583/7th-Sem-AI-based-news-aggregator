import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { NewsGrid } from './components/NewsGrid/NewsGrid';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { useNews } from './hooks/useNews';
import type { Category } from './constants/categories';

function App() {
  const [category, setCategory] = useState<Category>('general');
  const { articles, loading, error, refetch } = useNews(category);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        selectedCategory={category}
        onCategoryChange={setCategory}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} onRetry={refetch} />
        ) : (
          <NewsGrid articles={articles} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;