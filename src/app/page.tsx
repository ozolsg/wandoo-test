import { CharacterGrid } from '@/components';
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
        </div>

        <CharacterGrid characters={characters} />
      </div>
    </div>
  );
}
