import { ReactNode } from 'react';

interface ItemCardProps {
  children: ReactNode;
  className?: string;
}

export function ItemCard({ children, className = '' }: ItemCardProps) {
  return (
    <div
      className={`bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-white hover:shadow-sm hover:border-gray-300 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
