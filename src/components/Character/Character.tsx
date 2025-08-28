import { Character as CharacterType } from '@/types/graphql';
import { PageNavigation } from './PageNavigation';
import { CharacterHero } from './CharacterHero';
import { CharacterInfoGrid } from './CharacterInfoGrid';
import { FilmsSection } from './FilmSection';
import { HomeworldSection } from './HomeworldSection';
import { VehiclesSection } from './VehicleSection';

interface CharacterProps {
  character: CharacterType;
}

export default function Character({ character }: CharacterProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-6xl">
        <PageNavigation />

        <div className="space-y-6">
          <CharacterHero name={character.name} gender={character.gender} />

          <CharacterInfoGrid character={character} />

          {character.homeworld && (
            <HomeworldSection homeworld={character.homeworld} />
          )}

          {character.filmConnection?.films &&
            character.filmConnection.films.length > 0 && (
              <FilmsSection
                films={character.filmConnection.films}
                totalCount={character.filmConnection.totalCount}
              />
            )}

          {character.vehicleConnection?.vehicles &&
            character.vehicleConnection.vehicles.length > 0 && (
              <VehiclesSection
                vehicles={character.vehicleConnection.vehicles}
                totalCount={character.vehicleConnection.totalCount}
              />
            )}
        </div>
      </div>
    </div>
  );
}
