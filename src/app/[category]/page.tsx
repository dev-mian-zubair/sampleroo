import React from 'react';
import CategoryData from './_components/CategoryData';
import { SubCategories } from '@/constants/categories';
import { getData } from '@/helpers/files.helper';

async function Page({ params }: { params: { category: string } }) {
  const { category } = await params;
  const categories = SubCategories[category] || [];
  const files = getData(category);

  return (
    <main className="min-h-screen">
      <div className="container py-6 sm:py-8">
        <CategoryData
          type={category}
          categories={categories}
          files={files}
        />
      </div>
    </main>
  );
}

export default Page;
