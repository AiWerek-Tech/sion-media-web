export const docsSections = [
  {
    title: 'A. Panduan Unduhan',
    description: 'Cara mendapatkan rilis beta terbaru SION Media.',
    items: [
      { title: 'Versi Terbaru', detail: 'Dapatkan rilis beta terbaru (v1.0.0-beta.1) untuk menguji performa dan stabilitas sistem.' },
      { title: 'Windows (x64)', detail: 'Installer resmi (.exe) versi beta untuk sistem operasi Windows 10 ke atas.' },
      { title: 'macOS (Planned)', detail: 'Dukungan untuk macOS (Intel & Apple Silicon) direncanakan untuk rilis publik mendatang.' },
      { title: 'Linux (Planned)', detail: 'Dukungan untuk distribusi Linux (seperti AppImage) direncanakan untuk rilis publik mendatang.' },
    ],
  },
  {
    title: 'B. Instalasi & Update',
    description: 'Langkah pertama memasang dan menjaga aplikasi tetap mutakhir.',
    items: [
      { title: 'Proses Instalasi', detail: 'Jalankan setup installer (.exe) dan ikuti langkah-langkah wizard untuk memasang di komputer Anda.' },
      { title: 'Setup Wizard', detail: 'Pemasangan otomatis mendaftarkan shortcut desktop dan opsi pencopotan (uninstall) yang aman.' },
      { title: 'Launch Pertama', detail: 'Aplikasi desktop offline-first ini otomatis menginisialisasi database SQLite lokal berisi 525 lagu.' },
      { title: 'Cek Update', detail: 'Klien desktop memeriksa metadata pembaruan terbaru via latest-version.json saat aplikasi dibuka.' },
    ],
  },
  {
    title: 'C. 4 Mode Operasi',
    description: 'Pahami peran dan fungsi setiap mode dalam alur pelayanan multimedia.',
    items: [
      { title: '1. Library Mode', detail: 'Pusat organisasi: Cari lagu, edit lirik, dan siapkan daftar lagu (playlist) ibadah.' },
      { title: '2. Projection Mode', detail: 'Live Production: Kontrol apa yang tayang di proyektor melalui sistem Cue & Take yang aman.' },
      { title: '3. Broadcast Mode Beta', detail: 'Roadmap streaming: Jalur persiapan untuk integrasi OBS/vMix (dinonaktifkan sementara di build beta).' },
      { title: '4. Management Mode', detail: 'Admin & Maintenance: Kelola backup data, impor lagu massal, dan pengaturan sistem.' },
    ],
  },
  {
    title: 'D. Alur Kerja Operator',
    description: 'Panduan langkah demi langkah penggunaan SION Media saat ibadah.',
    items: [
      { title: 'Persiapan Lagu', detail: 'Gunakan Library Mode untuk mencari lagu dan menambahkannya ke Playlist.' },
      { title: 'Persiapan Alkitab', detail: 'Cari ayat yang diperlukan dan siapkan slide Alkitab dalam hitungan detik.' },
      { title: 'Kontrol Tayangan', detail: 'Klik pada lirik untuk Cue, lalu tekan Space untuk Take ke layar Program.' },
      { title: 'Stage Display', detail: 'Aktifkan Stage Display agar tim musik/singers dapat melihat lirik dan info lagu secara sinkron.' },
    ],
  },

  {
    title: 'E. Pertanyaan Umum (FAQ)',
    description: 'Jawaban atas pertanyaan yang sering diajukan oleh operator gereja.',
    items: [
      { title: 'Apakah Gratis?', detail: 'Ya, SION Media adalah software Open Source yang dapat digunakan secara bebas oleh gereja.' },
      { title: 'Bisa Offline?', detail: 'Tentu saja. Seluruh database dan fitur presentasi bekerja 100% secara offline tanpa internet.' },
      { title: 'Data Aman?', detail: 'Sangat aman. Database berbasis SQLite lokal dan Anda bisa melakukan backup kapan saja.' },
      { title: 'Multiple Display?', detail: 'Mendukung banyak monitor sekaligus: Operator, Audience, dan Stage Display.' },
    ],
  },
]
