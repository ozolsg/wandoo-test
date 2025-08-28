'use client';

import { ChevronDown } from 'lucide-react';

export type SortOption = 'asc' | 'desc' | 'none';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

export function SortSelect({
  value,
  onChange,
  className = '',
}: SortSelectProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none bg-white border border-gray-300 rounded-3xl px-4 py-2 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 hover:border-gray-400 w-full"
      >
        <option value="none">Default</option>
        <option value="asc">A to Z</option>
        <option value="desc">Z to A</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}
