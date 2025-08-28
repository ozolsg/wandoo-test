interface CharacterHeaderProps {
  name: string | null;
}

export function CharacterHeader({ name }: CharacterHeaderProps) {
  return (
    <header className="bg-gray-950 p-4 md:p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 opacity-50" />

      <div className="relative z-10">
        <h3 className="text-white font-semibold text-lg md:text-xl mb-1 group-hover:text-gray-100 transition-colors duration-300">
          {name || 'Unknown'}
        </h3>
      </div>
    </header>
  );
}
