'use client';

import { forwardRef, useState, useEffect, useCallback } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { debounce } from 'lodash';
import { Input } from './ui/Input';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
  className?: string;
  loading?: boolean;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      onSearch,
      placeholder = 'Search characters...',
      debounceMs = 350,
      className = '',
      loading = false,
    },
    ref
  ) => {
    const [query, setQuery] = useState('');

    const debouncedSearch = useCallback(
      debounce((searchQuery: string) => {
        onSearch(searchQuery);
      }, debounceMs),
      [onSearch, debounceMs]
    );

    useEffect(() => {
      debouncedSearch(query);
      return () => {
        debouncedSearch.cancel();
      };
    }, [query, debouncedSearch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };

    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {loading ? (
            <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <Input
          ref={ref}
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="pl-10 pr-4"
        />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
