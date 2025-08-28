interface CharacterTagsProps {
  hairColor?: string | null;
  eyeColor?: string | null;
  skinColor?: string | null;
}

export function CharacterTags({
  hairColor,
  eyeColor,
  skinColor,
}: CharacterTagsProps) {
  const tags = [
    { value: hairColor, icon: '💇', type: 'hair' },
    { value: eyeColor, icon: '👁️', type: 'eye' },
    { value: skinColor, icon: '🎨', type: 'skin' },
  ].filter((tag) => tag.value);

  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Tag key={index} icon={tag.icon} value={tag.value!} />
      ))}
    </div>
  );
}

interface TagProps {
  icon: string;
  value: string;
}

function Tag({ icon, value }: TagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full group-hover:border-gray-300 group-hover:shadow-sm transition-all duration-300">
      <span className="text-xs opacity-70">{icon}</span>
      <span className="capitalize">{value || 'Unknown'}</span>
    </span>
  );
}
