export const docsSections = [
  {
    title: 'Mulai Cepat',
    description: 'Mulai dari fondasi website dan pelajari bagaimana model hosting statis bekerja.',
    items: [
      { title: 'Clone repositori', detail: 'git clone https://github.com/AiWerek-Tech/sion-media-web.git' },
      { title: 'Pasang dependensi', detail: 'npm install' },
      { title: 'Jalankan secara lokal', detail: 'npm run dev' },
    ],
  },
  {
    title: 'Panduan Instalasi',
    description: 'Pahami bagaimana rilis desktop terbaru didistribusikan kepada pengguna.',
    items: [
      { title: 'Metadata unduhan', detail: 'public/latest-version.json adalah sumber kebenaran.' },
      { title: 'GitHub Releases', detail: 'Gunakan GitHub Releases untuk mendistribusikan installer.' },
      { title: 'Halaman unduhan', detail: 'Website menggunakan JSON versi terbaru dan tautan langsung.' },
    ],
  },
  {
    title: 'Panduan Pembaruan',
    description: 'Gunakan metadata rilis dalam alur pembaruan aplikasi desktop.',
    items: [
      { title: 'Pengecekan versi', detail: 'Aplikasi desktop membaca latest-version.json untuk status versi terbaru.' },
      { title: 'Pembaruan wajib', detail: 'File mendukung flag wajib dan catatan rilis.' },
      { title: 'Sinkronisasi rilis', detail: 'Jaga JSON dan GitHub Releases tetap selaras.' },
      { title: 'Halaman GitHub Release', detail: 'Tautkan installer dan aset dari URL rilis yang sama yang digunakan website.' },
    ],
  },
  {
    title: 'Roadmap Produk',
    description: 'Bagikan visi proyek untuk penyempurnaan aplikasi, fitur alur kerja, dan transparansi open-source.',
    items: [
      { title: 'Fase 1', detail: 'Perkuat website peluncuran dan alur metadata pembaruan.' },
      { title: 'Fase 2', detail: 'Tambahkan penyempurnaan aplikasi desktop, keandalan offline, dan dukungan presentasi.' },
      { title: 'Fase 3', detail: 'Perluas visibilitas analitik dan kepercayaan komunitas dengan statistik publik.' },
    ],
  },
  {
    title: 'FAQ',
    description: 'Jawaban tentang bagaimana metadata rilis dan GitHub Releases bekerja bersama untuk pembaruan desktop.',
    items: [
      { title: 'Metadata pembaruan', detail: 'Website menggunakan latest-version.json sebagai sumber kebenaran untuk pengecekan versi desktop.' },
      { title: 'GitHub Releases', detail: 'Aset installer ditempatkan di GitHub Releases sementara situs menyediakan metadata rilis.' },
      { title: 'Alur kerja statis', detail: 'Pendekatan ini menghindari kompleksitas backend dan menjaga website tetap mudah dihosting.' },
    ],
  },
  {
    title: 'Integrasi Firebase',
    description: 'Pengaturan lengkap Firebase dengan autentikasi, Firestore, dan fungsionalitas admin.',
    items: [
      { title: 'Setup proyek Firebase', detail: 'Panduan setup lengkap dengan instruksi langkah demi langkah.' },
      { title: 'Sistem autentikasi', detail: 'Masuk Google diimplementasikan dengan konteks auth dan komponen UI.' },
      { title: 'Integrasi Firestore', detail: 'Atur koleksi statistik publik dengan izin baca/tulis.' },
      { title: 'Panel admin', detail: 'Buat antarmuka pengelolaan statistik untuk pengguna terautentikasi.' },
      { title: 'Pemantauan status', detail: 'Tambahkan indikator status koneksi Firebase di footer.' },
    ],
  },
  {
    title: 'Integrasi Aplikasi Desktop',
    description: 'Bagaimana aplikasi desktop terpisah menggunakan website ini.',
    items: [
      { title: 'Sistem pembaruan', detail: 'Aplikasi desktop memeriksa public/latest-version.json untuk rilis baru.' },
      { title: 'Statistik publik', detail: 'Aplikasi desktop mengirim data penggunaan ke Firebase (dikelola oleh website ini).' },
      { title: 'Distribusi rilis', detail: 'Installer dihosting di GitHub Releases dan ditautkan dari latest-version.json.' },
      { title: 'Endpoint API', detail: 'Website menyediakan API JSON untuk poin integrasi aplikasi desktop.' },
      { title: 'Proyek terpisah', detail: 'Website (GitHub Pages) dan aplikasi desktop (Electron) bersifat independen.' },
    ],
  },
  {
    title: 'Pemecahan Masalah',
    description: 'Atasi masalah deployment dan hosting umum dengan cepat.',
    items: [
      { title: 'Dukungan routing', detail: 'Gunakan HashRouter untuk kompatibilitas GitHub Pages.' },
      { title: 'Konfigurasi Firebase', detail: 'Isi src/firebase/config.ts dengan konfigurasi publik yang valid.' },
      { title: 'Output build', detail: 'Pastikan dist/ dihasilkan sebelum menggunakan deploy gh-pages.' },
    ],
  },
]
