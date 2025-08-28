interface CharacterStatsProps {
  height: string | null;
  mass: string | null;
}

export function CharacterStats({ height, mass }: CharacterStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <StatItem label="Height" value={`${height || 'Unknown'} cm`} icon="📏" />
      <StatItem label="Mass" value={`${mass || 'Unknown'} kg`} icon="⚖️" />
    </div>
  );
}

interface StatItemProps {
  label: string;
  value: string;
  icon: string;
}

function StatItem({ label, value, icon }: StatItemProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 group-hover:bg-gray-100/50 transition-colors duration-300">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs opacity-60">{icon}</span>
        <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="text-sm font-semibold text-gray-900">{value}</div>
    </div>
  );
}
