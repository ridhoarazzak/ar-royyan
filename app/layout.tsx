import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pesantren Salaf Ar Royyan',
  description: 'Mencetak Generasi Qur\'ani dengan Manhaj Salafus Shalih',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
