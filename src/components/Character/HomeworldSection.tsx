import { Homeworld as HomeworldType } from '@/types/graphql';
import { InfoCard } from './InfoCard';
import { InfoItem } from './InfoItem';

interface HomeworldSectionProps {
  homeworld: HomeworldType;
}

export function HomeworldSection({ homeworld }: HomeworldSectionProps) {
  return (
    <InfoCard title="Homeworld" icon="🌍">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <InfoItem label="Planet" value={homeworld.name} />
        <InfoItem
          label="Terrains"
          value={homeworld.terrains}
          className="capitalize"
        />
        <InfoItem label="Population" value={homeworld.population} />
      </div>
    </InfoCard>
  );
}
