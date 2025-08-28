import { CharacterCard } from '@/components';
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

  const characters = data?.allPeople?.people;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Star Wars Characters
          </h1>
          <p className="text-gray-600 text-lg">
            Discover the legendary characters from a galaxy far, far away
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {characters?.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-500 text-sm">
            Click on any character card to view detailed information
          </p>
        </div>
      </div>
    </div>
  );
}
