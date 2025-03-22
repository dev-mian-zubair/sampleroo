'use client';
import React from 'react';

interface CategoryBarProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryBar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryBarProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`btn ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
