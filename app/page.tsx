import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-900">
            ☪️ Ar Royyan
          </div>
          <ul className="hidden md:flex gap-8">
            <li><Link href="#beranda" className="hover:text-amber-700 transition">Beranda</Link></li>
            <li><Link href="#tentang" className="hover:text-amber-700 transition">Tentang</Link></li>
            <li><Link href="#program" className="hover:text-amber-700 transition">Program</Link></li>
            <li><Link href="#kontak" className="hover:text-amber-700 transition">Kontak</Link></li>
          </ul>
        </div>
      </nav>
