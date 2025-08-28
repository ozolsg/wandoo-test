import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  icon: string;
  children: ReactNode;
  className?: string;
}

export function InfoCard({
  title,
  icon,
  children,
  className = '',
}: InfoCardProps) {
  return (
    <section
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <header className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <span className="text-2xl" role="img">
            {icon}
          </span>
          <span>{title}</span>
        </h2>
      </header>

      <div>{children}</div>
    </section>
  );
}
