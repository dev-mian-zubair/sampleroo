import { FC, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'outline' | 'solid';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ variant = 'solid', className, onClick, children }) => {
  const baseStyles = 'btn'; // Use the `btn` class from globals.css
  const variantStyles =
    variant === 'outline'
      ? 'bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
      : 'bg-indigo-600 text-white hover:bg-indigo-700';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
