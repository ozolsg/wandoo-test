import { ArrowRight } from 'lucide-react';

export function ViewDetailsButton() {
  return (
    <div className="flex justify-end pt-2">
      <div className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-300 group/button">
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover:translate-x-1" />
      </div>
    </div>
  );
}
