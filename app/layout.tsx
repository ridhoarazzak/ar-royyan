import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Pesantren Ar Royyan Al Islamy Rimbo Bujang",
  description: "Mencetak Generasi Qur'ani yang Berakhlak Mulia dan Cerdas Berdasarkan Al-Qur'an dan Sunnah dengan Pemahaman Salafush Shalih",
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
