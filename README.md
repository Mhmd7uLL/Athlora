# Athlora

Athlora (Athletic Lifestyle and Original Apparel) adalah toko pakaian olahraga modern yang menjual jersey tim sepak bola

## Fitur utama
- Pengenalan produk: Jersey tim sepak bola (saat ini)
- Halaman beranda dengan banner promosi dan pengelompokan produk.
- Komponen UI terpisah (navbar, kategori, halaman) untuk pengembangan lebih lanjut.
- Pengaturan build dan dev standar dengan Vite + TypeScript + Tailwind CSS.

## Teknologi
- Bahasa: TypeScript
- Build / Dev: Vite
- Routing: react-router-dom
- Front-End: React.Js, Tailwind CSS
- Back-End : Node, Express

## Struktur proyek (ringkasan)
```
├─ Backend/
├─ Frontend/
│  ├─ public/                    # aset publik (favicon, static images)
|  ├─ src/
|  │  ├─ assets                  # gambar dan aset front-end
│  |  ├─ components/             # berbagai komponen untuk navigasi tiap halaman
│  |  ├─ hooks/                  # fungsi state & effect React
│  |  ├─ pages/                  # halaman untuk web (Home, Cart, Products, dsb)
│  |  ├─ types/                  # definisi tipe data
│  |  ├─ utils/                  # fungsi bantuan (total, dsb)
│  |  ├─ App.css                 # style utama (termasuk import Tailwind CSS)
│  |  ├─ App.tsx                 # root app (routing, layout)
│  |  └─ main.tsx                # entry point
|  |
|  ├─ package.json               # skrip dan dependensi
|  ├─ vite.config.ts
|  ├─ vite.config.ts
|  └─ tsconfig*.json
├─ .gitignore
└─ README.md
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

## Kontribusi
1. Fork repo ini.
2. Buat branch fitur: `git checkout -b feat/nama-fitur`
3. Commit perubahan dan push.
4. Buka Pull Request dengan deskripsi perubahan.

Gunakan pola komponen terpisah dan TypeScript typings untuk menjaga konsistensi.
