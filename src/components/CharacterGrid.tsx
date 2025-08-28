'use client';

import CharacterCard from './CharacterCard/CharacterCard';
import { SearchInput } from './SearchInput';
import { SortSelect } from './ui/SortSelect';
import { useCharacterSearch, useCharacterSort } from '@/hooks';
import { Character } from '@/types/graphql';

interface CharacterGridProps {
  characters: Character[];
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  const { filteredCharacters, searchQuery, handleSearch } =
    useCharacterSearch(characters);
  const { sortedCharacters, sortOption, handleSort } =
    useCharacterSort(filteredCharacters);

  return (
    <>
      <div className="max-w-2xl mx-auto space-y-4 mb-8">
        <SearchInput
          onSearch={handleSearch}
          placeholder="Search by character name..."
          debounceMs={300}
        />

        {filteredCharacters.length > 0 && (
          <div className="flex justify-center">
            <SortSelect
              value={sortOption}
              onChange={handleSort}
              className="w-48"
            />
          </div>
        )}
      </div>

      {sortedCharacters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {sortedCharacters.map((character) => (
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

      {sortedCharacters.length > 0 && (
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-500 text-sm">
            Click on any character card to view detailed information
          </p>
        </div>
      )}
    </>
  );
}
