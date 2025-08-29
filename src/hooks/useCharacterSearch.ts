import { useState, useMemo } from 'react';
import { Character } from '@/types/graphql';
import { sanitizeSearchQuery } from '@/lib/utils/sanitize';

export function useCharacterSearch(characters: Character[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharacters = useMemo(() => {
    if (!searchQuery.trim()) {
      return characters;
    }

    const sanitizedQuery = sanitizeSearchQuery(searchQuery);

    return characters.filter((character) =>
      character.name?.toLowerCase().includes(sanitizedQuery.toLowerCase())
    );
  }, [characters, searchQuery]);

  const handleSearch = (query: string) => {
    const sanitized = sanitizeSearchQuery(query);
    setSearchQuery(sanitized);
  };

  return {
    filteredCharacters,
    searchQuery,
    handleSearch,
  };
}
