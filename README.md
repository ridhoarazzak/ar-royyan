# Website Pesantren Salaf Ar Royyan

Website resmi Pesantren Salaf Ar Royyan yang dibangun dengan Next.js, React, dan Tailwind CSS.

## Fitur

- 🏠 Homepage dengan Hero Section
- 📖 Informasi Tentang Pesantren
- 📚 Program-program Pesantren
- 💰 Sistem Donasi dengan Info Rekening
- 📱 Responsive Design (Mobile & Desktop)
- 📞 Informasi Kontak

## Cara Deploy ke Vercel

### Metode 1: Deploy dari GitHub (Recommended)

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/pesantren-ar-royyan.git
   git push -u origin main
   ```

2. **Deploy di Vercel:**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan akun GitHub
   - Klik "Add New" → "Project"
   - Import repository GitHub Anda
   - Vercel akan otomatis mendeteksi Next.js
   - Klik "Deploy"

### Metode 2: Deploy Langsung dengan Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login ke Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

## Cara Menjalankan Lokal

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```

3. **Buka browser:**
   ```
   http://localhost:3000
   ```

## Struktur File

```
pesantren-ar-royyan/
├── app/
│   ├── layout.tsx       # Layout utama
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── public/              # Static files (jika ada)
├── package.json         # Dependencies
├── next.config.js       # Next.js config
├── tailwind.config.ts   # Tailwind config
├── tsconfig.json        # TypeScript config
└── README.md            # Dokumentasi
```

## Kustomisasi

Untuk mengubah informasi pesantren, edit file `app/page.tsx`:

- **Nomor Rekening**: Bagian `rekeningList`
- **Kontak**: Bagian `Kontak Section`
- **Program**: Bagian `programs`
- **Teks**: Sesuaikan di setiap section

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Support

Untuk pertanyaan atau bantuan, hubungi:
- Email: info@arroyyan.com
- WhatsApp: +62 812-3456-7890

## License

© 2025 Pesantren Salaf Ar Royyan. All rights reserved.
