import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  href?: string;
  className?: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ href, className, children }) => {
  const baseClasses = 'card'; // Default to the `card` class from globals.css

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};
