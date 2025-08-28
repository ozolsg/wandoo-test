import { useState, useMemo } from 'react';
import { Character } from '@/types/graphql';

export function useCharacterSearch(characters: Character[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharacters = useMemo(() => {
    if (!searchQuery.trim()) {
      return characters;
    }

    return characters.filter((character) =>
      character.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [characters, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return {
    filteredCharacters,
    searchQuery,
    handleSearch,
  };
}
