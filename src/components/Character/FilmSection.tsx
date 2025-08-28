import { Film } from '@/types/graphql';
import { InfoCard } from './InfoCard';
import { ItemCard } from './ItemCard';

interface FilmsSectionProps {
  films: Film[];
  totalCount: number;
}

export function FilmsSection({ films, totalCount }: FilmsSectionProps) {
  return (
    <InfoCard title={`Featured Films (${totalCount})`} icon="🎬">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {films.map((film) => (
          <ItemCard key={film.id}>
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 leading-tight">
                {film.title || 'Unknown'}
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Episode:</span>
                  <span>{film.episodeID || 'Unknown'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Released:</span>
                  <span>
                    {film.releaseDate
                      ? new Date(film.releaseDate).getFullYear()
                      : 'Unknown'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Director:</span>
                  <span>{film.director || 'Unknown'}</span>
                </div>
              </div>
            </div>
          </ItemCard>
        ))}
      </div>
    </InfoCard>
  );
}
