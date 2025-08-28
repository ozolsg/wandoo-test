import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function PageNavigation() {
  return (
    <nav className="mb-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        <span>Back to Characters</span>
      </Link>
    </nav>
  );
}
