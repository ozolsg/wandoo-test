import { useState, useMemo } from 'react';
import { Character } from '@/types/graphql';
import { SortOption } from '@/components/ui/SortSelect';

export function useCharacterSort(characters: Character[]) {
  const [sortOption, setSortOption] = useState<SortOption>('none');

  const sortedCharacters = useMemo(() => {
    if (sortOption === 'asc') {
      return [...characters].sort((a, b) =>
        (a.name || '').localeCompare(b.name || '')
      );
    } else if (sortOption === 'desc') {
      return [...characters].sort((a, b) =>
        (b.name || '').localeCompare(a.name || '')
      );
    }

    return characters;
  }, [characters, sortOption]);

  const handleSort = (option: SortOption) => {
    setSortOption(option);
  };

  return {
    sortedCharacters,
    sortOption,
    handleSort,
  };
}
