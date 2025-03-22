import { DownloadButton } from '@/components/DownloadButton';
import React from 'react';

interface File {
  url: string;
  size: string;
}

interface Props {
  files?: File[];
}

const FileListing = ({ files = [] }: Props) => {
  const getFileType = (url: string) => {
    const parts = url.split('.');
    return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'UNKNOWN';
  };

  const generateFileName = (url: string, size: string, index: number) => {
    const type = getFileType(url);
    return `Sample_${type}_${index + 1}_${size}.${type.toLowerCase()}`;
  };

  if (!files || files.length === 0) {
    return (
      <div className="card">
        <div className="grid grid-cols-[2fr_1fr_1fr_80px] items-center gap-4 p-4 bg-gray-100 border-b border-gray-200">
          <div className="text-sm font-semibold text-gray-700">File Name</div>
          <div className="text-sm font-semibold text-gray-700">Type</div>
          <div className="text-sm font-semibold text-gray-700">Size</div>
          <div className="text-sm font-semibold text-gray-700 text-center">Action</div>
        </div>
        <div className="p-4 text-center text-muted">No files available</div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="grid grid-cols-[2fr_1fr_1fr_80px] items-center gap-4 p-4 bg-gray-100 border-b border-gray-200">
        <div className="text-sm font-semibold text-gray-700">File Name</div>
        <div className="text-sm font-semibold text-gray-700">Type</div>
        <div className="text-sm font-semibold text-gray-700">Size</div>
        <div className="text-sm font-semibold text-gray-700 text-center">Action</div>
      </div>
      {files.map((file, index) => (
        <div
          key={index}
          className="grid grid-cols-[2fr_1fr_1fr_80px] items-center gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-all duration-200"
        >
          <div className="text-sm text-gray-900 truncate">
            {generateFileName(file.url, file.size, index)}
          </div>
          <div className="text-xs text-gray-600">{getFileType(file.url)}</div>
          <div className="text-xs text-gray-600">{file.size}</div>
          <div className="flex justify-center">
            <DownloadButton urls={file.url} className="w-16" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileListing;
