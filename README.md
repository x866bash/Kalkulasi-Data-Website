# Program Kalkulator Metadata Website

Program ini adalah aplikasi web untuk menganalisis metadata dan teknologi yang digunakan pada website. Dibuat menggunakan React, TypeScript, Tailwind CSS, dan Shadcn-UI.

## Fitur Utama

- 🔍 **Analisis Metadata**: Menganalisis meta tags dan SEO dari website
- 🛠️ **Deteksi Teknologi**: Mendeteksi bahasa pemrograman dan framework yang digunakan
- 📊 **Visualisasi Data**: Menampilkan hasil analisis dalam format yang menarik
- 🎨 **Logo Teknologi**: Menampilkan ikon dari setiap teknologi yang terdeteksi
- ✨ **Animasi Smooth**: Efek animasi yang halus dan responsif
- 📱 **Responsive Design**: Optimasi untuk perangkat mobile dan Android
- 🌐 **Halaman Kontak**: Informasi kontak yang diambil dari API profile

## Teknologi yang Digunakan

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn-UI
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Containerization**: Docker
- **Routing**: React Router DOM

## Struktur Proyek

```
src/
├── components/
│   ├── ui/                 # Komponen Shadcn-UI
│   ├── Navigation.tsx      # Navigasi utama
│   ├── MetadataCalculator.tsx  # Komponen kalkulator utama
│   └── TechLogos.tsx       # Komponen logo teknologi
├── pages/
│   ├── Home.tsx           # Halaman beranda
│   └── Contact.tsx        # Halaman kontak
├── services/
│   └── websiteAnalyzer.ts # Service analisis website
├── App.tsx                # Komponen root
└── main.tsx              # Entry point
```

## Instalasi dan Menjalankan

### Metode 1: Menjalankan Langsung

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Jalankan Development Server**
   ```bash
   pnpm run dev
   ```

3. **Buka Browser**
   ```
   http://localhost:5173
   ```

### Metode 2: Menggunakan Docker (Recommended)

1. **Build Docker Image**
   ```bash
   docker build -t metadata-calculator .
   ```

2. **Jalankan Container**
   ```bash
   docker run -p 3000:5173 metadata-calculator
   ```

3. **Buka Browser**
   ```
   http://localhost:3000
   ```

### Metode 3: Menggunakan Docker Compose

1. **Jalankan dengan Docker Compose**
   ```bash
   docker-compose up
   ```

2. **Buka Browser**
   ```
   http://localhost:3000
   ```

## Cara Menggunakan

### Halaman Beranda (Home)
1. Klik tombol "Mulai Analisis" untuk memulai analisis metadata
2. Tunggu proses analisis selesai (sekitar 2 detik)
3. Lihat hasil analisis yang mencakup:
   - Statistik ringkasan (total teknologi, meta tags, skor performa, SEO rating)
   - Logo dan detail teknologi yang terdeteksi
   - Daftar meta tags yang ditemukan
   - Metrik performa website

### Halaman Kontak
1. Navigasi ke halaman "Kontak" melalui menu navigasi
2. Lihat informasi profil dan kontak
3. Klik tombol media sosial untuk mengunjungi profil

## Optimasi untuk Android

Aplikasi ini telah dioptimasi untuk perangkat Android dengan:

- **Responsive Design**: Layout yang menyesuaikan ukuran layar
- **Touch-Friendly**: Tombol dan elemen interaktif yang mudah disentuh
- **Fast Loading**: Optimasi performa untuk koneksi mobile
- **Mobile Viewport**: Konfigurasi viewport yang tepat untuk mobile

### Ukuran Layar yang Didukung
- **Desktop**: ≥ 1024px
- **Tablet**: 768px - 1023px
- **Mobile**: ≤ 767px
- **Small Mobile**: ≤ 480px

## Build untuk Production

1. **Build Project**
   ```bash
   pnpm run build
   ```

2. **Preview Build**
   ```bash
   pnpm run preview
   ```

## Lint dan Type Check

```bash
# Jalankan linter
pnpm run lint

# Fix lint issues
pnpm run lint:fix

# Type check
pnpm run type-check
```

## Troubleshooting

### Port sudah digunakan
Jika port 3000 atau 5173 sudah digunakan, ubah port di:
- `docker-compose.yml` (bagian ports)
- Atau jalankan dengan port berbeda: `docker run -p 8080:5173 metadata-calculator`

### Error saat build
1. Pastikan Node.js versi 18 atau lebih tinggi
2. Hapus `node_modules` dan install ulang:
   ```bash
   rm -rf node_modules
   pnpm install
   ```

### Docker issues
1. Pastikan Docker sudah terinstall dan berjalan
2. Untuk Windows, pastikan Docker Desktop sudah running
3. Untuk Linux, pastikan user sudah dalam grup docker

## Kontribusi

1. Fork repository ini
2. Buat branch feature baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lengkap.

## Kontak

- **Website**: https://x866bash-github-io.vercel.app
- **Email**: x866bash.github@zohomail.com
- **GitHub**: https://github.com/x866bash

---
[![LOOK](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1UHO0GNcAvfUyhRUEg8sZQfP1TabGtq7MQ&s)](https://kalkulasi-data-website.vercel.app/)
---
<b>Dibuat dengan ❤️ menggunakan React dan TypeScript
