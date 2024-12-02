import React from 'react';
import { Newspaper } from 'lucide-react';
import { CategoryFilter } from '../CategoryFilter/CategoryFilter';

interface HeaderProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Header({ selectedCategory, onCategoryChange }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3">
          <Newspaper className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">AI News Aggregator</h1>
        </div>
        <div className="mt-6">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </div>
    </header>
  );
}