interface CharacterHeroProps {
  name: string | null;
  gender: string | null;
}

export function CharacterHero({ name, gender }: CharacterHeroProps) {
  const getGenderIcon = (gender: string | null) => {
    if (!gender) return '🤖';

    switch (gender) {
      case 'male':
        return '👨';
      case 'female':
        return '👩';
      case 'hermaphrodite':
        return '⚧';
      default:
        return '🤖';
    }
  };

  return (
    <header className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-950 p-8 sm:p-12 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 opacity-50" />

        <div className="relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {name || 'Unknown'}
          </h1>

          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20">
            <span className="text-xl" role="img" aria-label={gender ?? ''}>
              {getGenderIcon(gender)}
            </span>
            {gender && (
              <span className="font-medium capitalize text-lg">{gender}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
