import { Character } from '@/types/graphql';
import Link from 'next/link';
import { CharacterHeader } from './CharacterHeader';
import { CharacterStats } from './CharacterStats';
import { CharacterTags } from './CharacterTags';
import { ViewDetailsButton } from './ViewDetailsButton';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/character/${character.id}`} className="block group">
      <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 ease-out overflow-hidden h-full flex flex-col">
        <CharacterHeader name={character.name} />

        <div className="p-4 flex-1 flex flex-col space-y-4 md:p-6">
          <CharacterStats height={character.height} mass={character.mass} />

          <CharacterTags
            hairColor={character.hairColor}
            eyeColor={character.eyeColor}
            skinColor={character.skinColor}
          />

          <div className="flex-1" />

          <ViewDetailsButton />
        </div>
      </article>
    </Link>
  );
}
