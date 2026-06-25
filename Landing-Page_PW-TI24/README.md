# Getting Started

## Prerequisites

Pastikan sudah menginstall:

* Node.js (disarankan versi LTS terbaru)
* npm (terinstall otomatis bersama Node.js)

Cek versi yang terpasang:

```bash
node -v
npm -v
```

## Clone Repository
buka cmd di folder 

```bash
git init
git add .
git clone <repository-url-ini>
```

## Install Dependencies

Setelah clone repository, install seluruh dependency terlebih dahulu:

```bash
npm install
```

Perintah ini akan membuat folder `node_modules` yang dibutuhkan agar project dapat dijalankan.

## Run Development Server

Setelah proses instalasi selesai, jalankan:

```bash
npm run dev
```

Atau menggunakan package manager lain:

```bash
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka browser dan akses:

```text
http://localhost:3000
```

## Common Issues

### Error: `'next' is not recognized as an internal or external command`

Penyebab:

* Dependency belum diinstall.

Solusi:

```bash
npm install
npm run dev
```

Jika masih mengalami masalah:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

(Windows)

```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
npm run dev
```

## Project Structure

* `app/` : Halaman dan routing aplikasi
* `public/` : Asset statis (gambar, icon, dll)
* `components/` : Komponen React yang dapat digunakan ulang
* `styles/` : Styling tambahan (jika ada)

## Development

Perubahan pada file seperti:

```text
app/page.tsx
```

akan otomatis direload oleh Next.js saat development server berjalan.
