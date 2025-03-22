import { FC } from 'react';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';
import { Button } from './Button';

interface FileCardProps {
  name: string;
  size: string;
  type: string;
  icon: LucideIcon;
  downloadUrl: string;
}

export const FileCard: FC<FileCardProps> = ({
  name,
  size,
  type,
  icon: Icon,
  downloadUrl,
}) => {
  return (
    <Card className="card flex flex-col hover:bg-gray-50">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 shadow-sm">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{type} • {size}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Button
          variant="outline"
          className="btn w-full bg-transparent text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"
          onClick={() => window.open(downloadUrl, '_blank')}
        >
          Download
        </Button>
      </div>
    </Card>
  );
};
