import { CharacterList } from '@/components/CharacterList';
import { getClient } from '@/lib/apollo/client';
import { GET_CHARACTERS } from '@/lib/apollo/queries';
import { Character } from '@/types/graphql';

interface CharactersData {
  allPeople: {
    people: Character[];
  };
}

export default async function Home() {
  const { data } = await getClient().query<CharactersData>({
    query: GET_CHARACTERS,
  });

  const characters = data?.allPeople?.people || [];

  return <CharacterList characters={characters} />;
}
