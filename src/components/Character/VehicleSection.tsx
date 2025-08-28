import { Vehicle } from '@/types/graphql';
import { InfoCard } from './InfoCard';
import { ItemCard } from './ItemCard';

interface VehiclesSectionProps {
  vehicles: Vehicle[];
  totalCount: number;
}

export function VehiclesSection({
  vehicles,
  totalCount,
}: VehiclesSectionProps) {
  return (
    <InfoCard title={`Vehicles (${totalCount})`} icon="🚗">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <ItemCard key={vehicle.id}>
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 leading-tight">
                {vehicle.name || 'Unknown'}
              </h3>
              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Model:</span>
                  <span>{vehicle.model || 'Unknown'}</span>
                </div>
              </div>
            </div>
          </ItemCard>
        ))}
      </div>
    </InfoCard>
  );
}
