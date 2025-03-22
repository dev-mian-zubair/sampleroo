import React from 'react';
import CategoryData from './_components/CategoryData';
import { SubCategories } from '@/constants/categories';
import { getData } from '@/helpers/files.helper';

type Params = Promise<{ category: string }>

export async function generateMetadata(props: {
  params: Params
}) {
  const params = await props.params;
  const category = params.category;
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${capitalizedCategory}`,
    description: `Explore ${capitalizedCategory} content, including subcategories and files. Discover more on Sampleroo.`,
    keywords: `files, sample images, sample videos, sample audio, sample documents, samples, sample files, free samples, free sample files, sample files for ${category}, sample files for ${SubCategories[category]?.join(', ')}`,
    openGraph: {
      title: `${capitalizedCategory} - Sampleroo`,
      description: `Explore ${capitalizedCategory} content on Sampleroo.`,
      url: `${process.env.NEXT_PUBLIC_URL}/${category}`,
      type: 'website',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/${category}`,
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { category } = await params;
  const categories = SubCategories[category] || [];
  const files = getData(category);

  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className="min-h-screen">
      <header>
        <h1 className="sr-only">{capitalizedCategory}</h1>
      </header>
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
