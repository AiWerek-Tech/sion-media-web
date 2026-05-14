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
    description: 'Pahami bagaimana aplikasi desktop SION Media didistribusikan dan diunduh oleh pengguna.',
    items: [
      { title: 'Metadata unduhan', detail: 'public/latest-version.json adalah sumber kebenaran untuk klien desktop.' },
      { title: 'GitHub Releases', detail: 'Aset installer Windows, macOS, dan Linux ditempatkan di GitHub Releases.' },
      { title: 'Halaman unduhan', detail: 'Website menampilkan informasi rilis dan tautan langsung untuk installer terbaru.' },
    ],
  },
  {
    title: 'Panduan Pembaruan',
    description: 'Gunakan metadata rilis untuk alur pembaruan otomatis di aplikasi desktop.',
    items: [
      { title: 'Pengecekan versi', detail: 'Aplikasi desktop membaca latest-version.json untuk memutuskan apakah ada versi baru.' },
      { title: 'Pembaruan wajib', detail: 'Flag pembaruan dan catatan rilis membantu mengomunikasikan isi rilis penting.' },
      { title: 'Sinkronisasi rilis', detail: 'Pastikan JSON metadata dan GitHub Releases selalu konsisten.' },
      { title: 'Rilis desktop', detail: 'Rilis app desktop terpisah tetapi terhubung dengan portal website ini.' },
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
    description: 'Bagaimana aplikasi desktop SION Media memanfaatkan website ini untuk rilisan, metadata, dan dukungan operator.',
    items: [
      { title: 'Sistem pembaruan', detail: 'Aplikasi desktop memeriksa public/latest-version.json untuk rilis baru.' },
      { title: 'Statistik publik', detail: 'Aplikasi desktop terhubung ke Firebase untuk metrik publik dan status penggunaan.' },
      { title: 'Distribusi rilis', detail: 'Installer desktop dihosting di GitHub Releases dan ditautkan dari metadata rilis.' },
      { title: 'Stage display & projection', detail: 'Website mendukung dokumentasi alur proyeksi, monitoring, dan stage display untuk live worship.' },
      { title: 'Multi-hymnal support', detail: 'Sistem desktop dibangun di atas database multi-hymnal dengan 525 lagu Lagu Sion default.' },
    ],
  },
  {
    title: 'Kapabilitas Desktop SION Media',
    description: 'Pelajari fitur-fitur utama aplikasi desktop SION Media untuk presentasi ibadah profesional.',
    items: [
      { title: 'Broadcast-Style Workflow', detail: 'Sistem Cue → Take → Program untuk produksi live yang aman dengan preview dan program decks.' },
      { title: 'Multi-Hymnal Library', detail: 'Database SQLite dengan FTS5 search mendukung multiple hymnal (default: 525 Lagu Sion).' },
      { title: 'Projection Mode', detail: 'Mode proyeksi layar penuh untuk lirik lagu dan ayat Alkitab dengan background media.' },
      { title: 'Stage Display', detail: 'Layar khusus untuk musisi dengan lirik, chord, dan timer untuk koordinasi live.' },
      { title: 'Bible Module', detail: 'Pencarian ayat Alkitab terintegrasi dan pembuatan slide secara otomatis.' },
      { title: 'Playlist Management', detail: 'Interface drag-drop untuk membangun playlist dengan dukungan mixed-hymnal.' },
      { title: 'Multi-Monitor Support', detail: 'Konfigurasi monitor terpisah untuk preview, program, dan stage display.' },
      { title: 'Import/Export System', detail: 'Import JSON/Excel dengan resolusi konflik dan fitur backup/restore.' },
      { title: 'Theme System', detail: 'Dark mode dengan design tokens konsisten untuk pengalaman visual yang baik.' },
      { title: 'Performance & Reliability', detail: 'Virtualized lists untuk library besar, auto-save, dan crash recovery.' },
    ],
  },
]
