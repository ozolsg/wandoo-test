import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Star Wars Character Encyclopedia',
  description: 'Explore characters from the Star Wars universe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">{children}</div>
      </body>
    </html>
  );
}
