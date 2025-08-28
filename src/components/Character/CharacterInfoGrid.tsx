import { Character as CharacterType } from '@/types/graphql';
import { InfoCard } from './InfoCard';
import { InfoItem } from './InfoItem';

interface CharacterInfoGridProps {
  character: CharacterType;
}

export function CharacterInfoGrid({ character }: CharacterInfoGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <InfoCard title="Basic Information" icon="ℹ️">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <InfoItem label="Birth Year" value={character.birthYear} />
            <InfoItem
              label="Gender"
              value={character.gender}
              className="capitalize"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InfoItem label="Height" value={`${character.height} cm`} />
            <InfoItem label="Mass" value={`${character.mass} kg`} />
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Appearance" icon="🎨">
        <div className="space-y-4">
          <InfoItem
            label="Hair Color"
            value={character.hairColor}
            className="capitalize"
          />
          <InfoItem
            label="Eye Color"
            value={character.eyeColor}
            className="capitalize"
          />
          <InfoItem
            label="Skin Color"
            value={character.skinColor}
            className="capitalize"
          />
        </div>
      </InfoCard>
    </div>
  );
}
