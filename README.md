# Athlora

Athlora (Athletic Lifestyle and Original Apparel) yaitu sistem penjualan suatu brand Apparel yang berfokus pada jersey tim bola (Edisi Klub maupun Tim negara)

## Fitur utama
1. Home Features
   - Aktivitas add-to-cart jersey 3 brand (Adidas Spain, Nike Brazil, Puma Portugal) secara langsung di Home Page bawah
   - Tombol interaktif pemilihan produk populer (FC & WC), 3 Brand (Adidas, Nike, Puma), Ukuran tiap jersey (XS - XL), Style untuk jersey (Polos, Original Replica Players Name & Custom Name Number)
   - Notifikasi interaktif setelah sistem add-to-cart (Success & Failed)
2. Cart Features
   - Tombol kuantitas (plus minus) di cart untuk menambah dan mengurangi kuantitas (jika mengurangi < 0, maka produk terhapus)
   - Total harga yang berubah sehubungan style jersey (point 2) maupun dengan jumlah kuantitas

## Teknologi
- Bahasa: TypeScript
- Build / Dev: Vite
- Routing: react-router-dom
- Front-End: React, Tailwind CSS
- Back-End : Node, Express (To Be Processed)

## Struktur proyek 
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
│  |  ├─ App.css                 # style utama mengcover semua file tsx (termasuk import Tailwind CSS)
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
