'use client';
import React from 'react';
import CategoryBar from './CategoryBar';
import FileListing from './FileListing';
import { FileObjType, getData } from '@/helpers/files.helper';

interface CategoryDataProps {
  type: string;
  categories: string[];
  files: FileObjType[];
}

const CategoryData = ({
  type,
  categories,
  files = [],
}: CategoryDataProps) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [filteredFiles, setFilteredFiles] = React.useState<FileObjType[]>(files);

  React.useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredFiles(files);
    } else {
      const filtered: FileObjType[] = getData(type, selectedCategory);
      setFilteredFiles(filtered);
    }
  }, [type, selectedCategory, files]);

  return (
    <div className="space-y-6">
      <CategoryBar
        categories={['all', ...categories]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FileListing files={filteredFiles} />
    </div>
  );
};

export default CategoryData;
