# Athlora

Athlora (Athletic Lifestyle and Original Apparel) adalah toko pakaian olahraga modern yang menjual jersey tim, training suit (tracktop & jogger), dan item fashion sport lainnya. Proyek ini adalah template front-end berbasis React + TypeScript yang menampilkan katalog produk dan antarmuka belanja sederhana sebagai basis untuk dikembangkan menjadi e‑commerce lengkap.

## Fitur utama
- Pengenalan produk: jersey tim, training suit (tracktop, jogger), dan fashion olahraga lainnya.
- Halaman beranda dengan banner promosi dan pengelompokan produk (contoh: Shop by Player).
- Komponen UI terpisah (navbar, kategori, halaman) untuk pengembangan lebih lanjut.
- Pengaturan build dan dev standar dengan Vite + TypeScript + Tailwind CSS.

## Teknologi
- Bahasa: TypeScript
- Framework: React
- Build / Dev: Vite
- Styling: Tailwind CSS
- Routing: react-router-dom

## Struktur proyek (ringkasan)
```
.
├─ public/                    # aset publik (favicon, static images)
├─ src/
│  ├─ assets                  # gambar dan aset front-end
│  ├─ components/
│  │  ├─ categories/          # komponen kategori / filter produk
│  │  ├─ dropdownPlayer/      # dropdown menu untuk pemilihan nama
│  │  ├─ footer/              # informasi footer untuk seluruh halaman
│  │  └─ navbar/              # komponen navigasi
│  ├─ hooks/                  # fungsi state & effect React
│  ├─ pages/                  # halaman untuk web (Home, Cart, Products, dsb)
│  │  ├─ Cart/
│  │  ├─ Home/
│  │  └─ Products/
│  ├─ utils/                  # fungsi bantuan (total, dsb)
│  ├─ App.css                 # style utama (termasuk import Tailwind CSS)
│  ├─ App.tsx                 # root app (routing, layout)
│  └─ main.tsx                # entry point
│  
├─ package.json               # skrip dan dependensi
├─ vite.config.ts
└─ tsconfig*.json
```

## Cara menjalankan (lokal)
Pastikan Node.js dan npm sudah terpasang. Jalankan perintah berikut dari root project:

```bash
# pasang dependensi
npm install

# jalankan dev server
npm run dev

# build produksi
npm run build

# preview hasil build secara lokal
npm run preview
```

## Tempat utama untuk dikembangkan
- src/pages/Home.tsx — tampilan beranda, contoh layout katalog dan banner.
- src/components/navbar/Navbar.tsx — komponen navigasi; tambahkan link ke kategori/keranjang/login.
- src/components/categories — tempat menambahkan filter kategori (jersey, tracktop, jogger, fashion).
- src/assets & public — taruh foto produk, banner promosi, dan ikon di sini.

## Saran pengembangan fitur berikutnya
- Model data produk + mock API (atau integrasi headless CMS / backend).
- Halaman detail produk (deskripsi, ukuran, pilihan warna).
- Keranjang belanja dan checkout (integrasi pembayaran).
- Manajemen stok & panel admin.
- Pencarian dan filter lanjutan (ukuran, harga, kategori, tim).
- Responsif dan optimasi performa (lazy loading gambar).

## Kontribusi
1. Fork repo ini.
2. Buat branch fitur: `git checkout -b feat/nama-fitur`
3. Commit perubahan dan push.
4. Buka Pull Request dengan deskripsi perubahan.

Gunakan pola komponen terpisah dan TypeScript typings untuk menjaga konsistensi.

## Lisensi
Tambahkan lisensi yang sesuai (contoh: MIT) di file `LICENSE` jika proyek akan dibuka untuk publik.

## Kontak
Proyek oleh: @Mhmd7uLL  
Untuk pertanyaan atau instruksi lebih lanjut, buat issue atau PR di repository.
