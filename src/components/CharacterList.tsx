'use client';

import { useState, useMemo } from 'react';
import { CharacterCard } from '@/components';
import { SearchInput } from '@/components/SearchInput';
import { Character } from '@/types/graphql';

interface CharacterListProps {
  characters: Character[];
}

export function CharacterList({ characters }: CharacterListProps) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Star Wars Characters
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover the legendary characters from a galaxy far, far away
          </p>

          <div className="max-w-md mx-auto">
            <SearchInput
              onSearch={handleSearch}
              placeholder="Search by character name..."
              debounceMs={300}
            />
          </div>
        </div>

        {filteredCharacters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">
              {searchQuery.trim()
                ? 'No characters found. Try a different search term.'
                : 'No characters available.'}
            </p>
          </div>
        )}

        {filteredCharacters.length > 0 && (
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-gray-500 text-sm">
              Click on any character card to view detailed information
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
