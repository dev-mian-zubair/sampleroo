'use client';
import { Download } from "lucide-react";
import { Button } from "./Button";
import { FC } from "react";

interface DownloadButtonProps {
  urls: string | string[];
  name?: string;
  className?: string;
}

export const DownloadButton: FC<DownloadButtonProps> = ({ name, urls, className }) => {
  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();

    const downloadFile = (url: string) => {
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', url.split('/').pop() || 'file');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    if (typeof urls === 'string') {
      downloadFile(urls);
    } else {
      urls.forEach((url, index) => {
        setTimeout(() => downloadFile(url), index * 500);
      });
    }
  };

  return (
    <Button
      variant="outline"
      className={`btn w-full mt-4 gap-2 bg-transparent text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500 ${className}`}
      onClick={handleDownload}
    >
      <Download className="w-4 h-4" />
      {name || ''}
    </Button>
  );
};
