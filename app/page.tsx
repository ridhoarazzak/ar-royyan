'use client';

import React, { useState } from 'react';
import { BookOpen, Users, Home, Heart, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function PesantrenArRoyyan() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDonasi, setShowDonasi] = useState(false);

  const programs = [
    { icon: <BookOpen className="w-8 h-8" />, title: "Tahfidz Al-Qur'an", desc: "Program menghafal Al-Qur'an dengan metode talaqqi" },
    { icon: <BookOpen className="w-8 h-8" />, title: "Kitab Kuning", desc: "Kajian kitab-kitab klasik salaf" },
    { icon: <Users className="w-8 h-8" />, title: "Kajian Rutin", desc: "Pengajian rutin untuk masyarakat umum" },
    { icon: <Home className="w-8 h-8" />, title: "Madrasah Diniyah", desc: "Pendidikan agama untuk anak-anak" }
  ];

  const rekeningList = [
    { bank: "Bank Syariah Indonesia (BSI)", norek: "1234567890", atas: "Yayasan Pesantren Ar Royyan" },
    { bank: "Bank BNI", norek: "0987654321", atas: "Yayasan Pesantren Ar Royyan" },
    { bank: "Bank BRI", norek: "5555666677778888", atas: "Yayasan Pesantren Ar Royyan" }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Nomor rekening berhasil disalin!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-green-900 font-bold text-xl">
                AR
              </div>
              <div>
                <h1 className="text-2xl font-bold">Pesantren Ar Royyan Al Islamy Rimbo Bujang</h1>
                <p className="text-sm text-green-200">Mencetak Generasi Qur'ani</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6">
              <a href="#beranda" className="hover:text-green-200 transition">Beranda</a>
              <a href="#tentang" className="hover:text-green-200 transition">Tentang</a>
              <a href="#program" className="hover:text-green-200 transition">Program</a>
              <a href="#kontak" className="hover:text-green-200 transition">Kontak</a>
              <button 
                onClick={() => setShowDonasi(true)}
                className="bg-yellow-500 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition flex items-center gap-2"
              >
                <Heart className="w-4 h-4" /> Donasi
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <a href="#beranda" className="hover:text-green-200 transition">Beranda</a>
              <a href="#tentang" className="hover:text-green-200 transition">Tentang</a>
              <a href="#program" className="hover:text-green-200 transition">Program</a>
              <a href="#kontak" className="hover:text-green-200 transition">Kontak</a>
              <button 
                onClick={() => setShowDonasi(true)}
                className="bg-yellow-500 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition flex items-center gap-2 justify-center"
              >
                <Heart className="w-4 h-4" /> Donasi
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di Pesantren Ar Royyan Al Islamy Rimbo Bujang</h2>
          <p className="text-xl mb-8 text-green-100">Menuntut Ilmu dengan Manhaj Salafus Shalih</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setShowDonasi(true)}
              className="bg-yellow-500 text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition text-lg"
            >
              Donasi Sekarang
            </button>
            <a href="#program" className="bg-white text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Lihat Program
            </a>
          </div>
        </div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Tentang Kami</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Pesantren Ar Royyan Al Islamy Rimbo Bujang adalah lembaga pendidikan Islam yang berkomitmen untuk mendidik generasi Qur'ani dengan pemahaman yang lurus sesuai dengan manhaj salafus shalih. Kami mengajarkan Al-Qur'an, Hadits, dan kitab-kitab klasik dengan metode yang telah terbukti efektif sejak zaman para ulama terdahulu.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dengan lingkungan yang kondusif dan pengajar yang berkompeten, santri kami dibimbing untuk menjadi pribadi yang berakhlak mulia, berilmu, dan bermanfaat bagi umat.
            </p>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Program Pesantren</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="text-green-700 mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-green-800">{program.title}</h3>
                <p className="text-gray-600">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Hubungi Kami</h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-green-700" />
              <h3 className="font-bold mb-2">Telepon</h3>
              <p className="text-gray-600">+62 812-3456-7890</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-green-700" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@arroyyan.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-green-700" />
              <h3 className="font-bold mb-2">Alamat</h3>
              <p className="text-gray-600">Jl.Hos Cokrominoto,
Mandiri Agung,Kec.Rimbo Bujang, Kab.Tebo, Jambi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2025 Pesantren Ar Royyan Al Islamy. All rights reserved.</p>
          <p className="text-green-200 text-sm">Jazakumullahu khairan atas dukungan Anda</p>
        </div>
      </footer>

      {/* Modal Donasi */}
      {showDonasi && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-green-800">Donasi untuk Pesantren</h3>
                <button onClick={() => setShowDonasi(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-gray-700 mb-6">
                Barakallahu fiikum atas niat baik Anda untuk bersedekah. Donasi Anda akan digunakan untuk operasional pesantren, beasiswa santri, dan pengembangan fasilitas.
              </p>

              <div className="space-y-4">
                {rekeningList.map((rek, idx) => (
                  <div key={idx} className="border border-green-200 rounded-lg p-4 bg-green-50">
                    <h4 className="font-bold text-green-800 mb-2">{rek.bank}</h4>
                    <p className="text-sm text-gray-600 mb-1">Nomor Rekening:</p>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xl font-mono font-bold text-green-900">{rek.norek}</p>
                      <button 
                        onClick={() => copyToClipboard(rek.norek)}
                        className="bg-green-700 text-white px-3 py-1 rounded text-sm hover:bg-green-800 transition"
                      >
                        Salin
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">a.n. <span className="font-semibold">{rek.atas}</span></p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Konfirmasi Donasi:</strong> Setelah melakukan transfer, silakan kirim bukti transfer via WhatsApp ke <strong>+62 812-3456-7890</strong>
                </p>
              </div>

              <button 
                onClick={() => setShowDonasi(false)}
                className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
