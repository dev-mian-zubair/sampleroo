import { FC } from 'react';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface FileTypeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const FileTypeCard: FC<FileTypeCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
}) => {
  return (
    <Card
      href={href}
      className="card flex flex-col items-center text-center group hover:bg-gray-50"
    >
      <div className="mb-4 p-3 rounded-xl bg-indigo-50 text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 ease-in-out">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  );
};
