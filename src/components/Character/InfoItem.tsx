interface InfoItemProps {
  label: string;
  value: string | null;
  className?: string;
}

export function InfoItem({ label, value, className = '' }: InfoItemProps) {
  return (
    <div className="space-y-1">
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </div>
      <div className={`text-gray-900 font-semibold ${className}`}>
        {value || 'Unknown'}
      </div>
    </div>
  );
}
