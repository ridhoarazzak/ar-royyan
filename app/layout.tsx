import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pesantren Salaf Ar Royyan',
  description: 'Lembaga pendidikan Islam tradisional yang berkomitmen mengajarkan ilmu agama berdasarkan Quran dan Sunnah',
  keywords: 'pesantren, islam, pendidikan, salaf, ar royyan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
