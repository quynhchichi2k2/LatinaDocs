# Pengenalan

Tutorial ini ditujukan untuk mendapatkan host SNI/CDN yang bisa digunakan pada TKP kalian masing-masing.
Tool yang digunakan tergolong sederhana, apabila kalian menginginkan hasil yang lebih maksimal, gunakan tool yang lebih <a href="https://github.com/Guild-Net/wsee">advance</a>

::: danger Perhatian

Tutorial ini menganggap kalian sudah menyiapkan hal yang <a href="/guide/mobile/">diperlukan</a>.

:::

## Langkah-langkah

- Install git nodejs openssl
  - `pkg install git nodejs openssl`
- Lakukan cloning tool
  - `git clone https://github.com/dickymuliafiqri/Telescope`
- Buka folder hasil clone
  - `cd Telescope`
- Install dependencies
  - `npm install`
- Compile file ts menjadi js
  - `npx tsc`
- Jalankan tool/program
  - `npm start`

## Troubleshoot

### Error SSL

Jika kalian mengalami error seperti ini
<img src="/assets/error_ssl.jpg" width="50%" />
Jalankan perintah:

- Ganti repo
  - `termux-change-repo`
- Pilih mirror oleh grimler `grimler.se` (Mungkin beda tiap perangkat)
- [Ulangi dari awal](#langkah-langkah)
