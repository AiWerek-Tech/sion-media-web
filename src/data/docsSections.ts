export interface DocItem {
  id: string;
  title: string;
  detail: string;
  screenshot?: string;
  badge?: string;
  tips?: string;
  warnings?: string;
}

export interface DocSection {
  id: string;
  title: string;
  description: string;
  items: DocItem[];
}

export const docsSections: DocSection[] = [
  // ═══════════════════════════════════════════════════════════════
  // A. PENGENALAN & PANDUAN INSTALASI
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'pengenalan',
    title: 'A. Pengenalan & Panduan Instalasi',
    description: 'Pahami gambaran besar ekosistem SION Media serta langkah-demi-langkah instalasi aplikasi untuk pemula.',
    items: [
      {
        id: 'gambaran-ekosistem-sion',
        title: 'Gambaran Ekosistem SION Media',
        badge: 'Arsitektur',
        detail: 'SION Media adalah ekosistem multimedia ibadah profesional terdesentralisasi yang dirancang khusus untuk melayani kebutuhan visual ibadah jemaat (khususnya GMAHK di Indonesia). Ekosistem ini terdiri dari tiga aplikasi utama yang saling terintegrasi:\n1. **SION Media Desktop (Electron/React)**: Berjalan di PC operator utama. Berfungsi sebagai pengendali utama untuk mengelola database nyanyian, ayat Alkitab, latar belakang media, dan melakukan proyeksi visual utama ke layar jemaat. Menggunakan SQLite dengan mode WAL (Write-Ahead Logging) untuk menjamin kecepatan akses database lokal.\n2. **SION Link Desktop (Windows Native C#)**: Diinstal pada laptop pembicara/pemateri di podium. Aplikasi ini membundel `SION PowerPoint Agent` untuk mengikat COM Object PowerPoint secara persisten, memungkinkan transisi slide and Speaker Notes dikirim langsung ke PC operator secara real-time melalui jaringan LAN.\n3. **SION Link Mobile (Android Native)**: Aplikasi Android sebagai pendukung mobilitas pelayanan. Dapat dikonfigurasi dalam 4 peran: Presenter Remote, Operator Remote, Layar Panggung (Stage Display) nirkabel, atau Live Viewer siaran ibadah.',
        screenshot: '/screenshots/dashboard.png',
        tips: 'Karena sistem ini terdesentralisasi, semua komunikasi antar-aplikasi terjadi secara lokal di dalam jaringan LAN gereja tanpa membutuhkan koneksi internet luar.'
      },
      {
        id: 'persyaratan-sistem-lan',
        title: 'Persyaratan Sistem & Jaringan Lokal',
        badge: 'Konektivitas',
        detail: 'Untuk memastikan ekosistem berjalan lancar tanpa hambatan latensi:\n- **PC Operator (SION Media Desktop)**: Minimal Windows 10/11 x64, RAM 8GB (direkomendasikan 16GB), SSD untuk load video cepat, dan kartu grafis dengan output ganda (HDMI/DisplayPort) untuk proyeksi jemaat.\n- **Laptop Pemateri (SION Link Desktop)**: Windows 10/11, terinstal Microsoft PowerPoint (versi 2013 atau terbaru) serta `.NET Desktop Runtime`.\n- **Perangkat Android (SION Link Mobile)**: Android versi 7.0 (Nougat) atau lebih baru dengan izin akses Kamera aktif.\n- **Jaringan Wi-Fi/LAN**: Semua perangkat wajib terhubung pada segmen jaringan IP lokal yang sama. Protokol `mDNS / Auto-Discovery` digunakan agar perangkat saling mendeteksi secara otomatis.',
        warnings: 'Hindari penggunaan jaringan Wi-Fi publik gereja yang mengaktifkan fitur `AP Isolation` (Access Point Isolation). Fitur ini memblokir komunikasi lokal sehingga perangkat tidak akan saling mendeteksi.'
      },
      {
        id: 'instalasi-desktop-app',
        title: 'Instalasi SION Media Desktop (PC Operator)',
        badge: 'Instalasi',
        detail: 'Ikuti langkah pemasangan aplikasi utama operator:\n1. Unduh berkas installer terbaru `SION-Media-Setup.exe` dari website resmi SION Media atau halaman rilis GitHub.\n2. Jalankan berkas `.exe` tersebut pada PC operator utama Anda.\n3. Ikuti petunjuk di layar komputer hingga selesai. Aplikasi secara otomatis terinstal pada direktori program Windows Anda.\n4. Jalankan aplikasi melalui pintasan desktop yang telah dibuat.',
        warnings: 'Saat pertama kali meluncurkan aplikasi, Windows Defender Firewall akan menampilkan dialog izin akses jaringan. Anda wajib mencentang opsi "Private Networks" dan klik "Allow Access" agar port internal server SION Media tidak diblokir.'
      },
      {
        id: 'instalasi-link-desktop',
        title: 'Instalasi SION Link Desktop & PowerPoint Agent',
        badge: 'Podium Setup',
        detail: 'Langkah pemasangan di laptop pemateri / komputer mimbar:\n1. Unduh installer `SION-Link-Desktop-Setup.exe` dari portal unduhan.\n2. Jalankan installer di laptop pemateri. Jika komputer belum memiliki `.NET Runtime`, aplikasi akan memandu Anda mengunduhnya secara otomatis.\n3. Setelah instalasi selesai, luncurkan SION Link Desktop. Aplikasi akan mendeteksi Microsoft PowerPoint dan menjalankan `SION PowerPoint Agent` di latar belakang Windows sebagai perantara pengikat presentasi.',
        tips: 'SION PowerPoint Agent menggunakan late-binding COM, sehingga mendukung Microsoft PowerPoint edisi 32-bit maupun 64-bit secara otomatis.'
      },
      {
        id: 'instalasi-link-mobile',
        title: 'Instalasi SION Link Mobile di Android',
        badge: 'Mobile Setup',
        detail: 'Langkah pemasangan remote control Android:\n1. Unduh berkas `SION-Link-Mobile.apk` ke perangkat Android Anda.\n2. Buka pengaturan Android Anda, aktifkan opsi "Instal aplikasi dari sumber tidak dikenal" (Unknown Sources) pada menu privasi/keamanan.\n3. Buka file manager, temukan file `.apk` yang diunduh, lalu ketuk untuk memulai instalasi.\n4. Jalankan aplikasi setelah instalasi selesai, dan setujui permintaan izin Kamera saat pertama kali diminta.',
        warnings: 'Izin kamera mutlak diperlukan agar aplikasi dapat memindai kode QR dari layar operator untuk proses pairing/penyambungan secara instan.'
      },
      {
        id: 'panduan-pertama-kali',
        title: 'Panduan Pertama Kali Membuka SION Media',
        badge: 'Pemula',
        detail: 'Setelah instalasi berhasil, ikuti langkah-langkah berikut saat pertama kali membuka SION Media Desktop:\n1. **Layar Utama (Library Mode)**: Aplikasi akan langsung terbuka di menu Library Mode. Di sini Anda dapat melihat daftar 525 Lagu Sion Edisi Lengkap yang sudah terinstal bawaan.\n2. **Coba Cari Lagu**: Ketik nomor atau judul lagu di kolom pencarian kiri atas untuk memastikan database berfungsi. Contoh: ketik `340` untuk mencari lagu "Sabat Hari Perhentian".\n3. **Hubungkan Layar Proyeksi**: Colokkan kabel HDMI ke proyektor, tekan `Win + P` → pilih **Extend**, lalu masuk ke menu **Pengaturan Monitor** di SION Media untuk memilih monitor proyeksi.\n4. **Buat Playlist Pertama**: Klik panel **Playlist** di sisi kanan, buat playlist baru dengan nama ibadah Anda (misal: "Sabat 19 Juli"), lalu geser lagu-lagu ke dalam daftar.\n5. **Coba Proyeksikan**: Klik lagu di playlist untuk membuka bait liriknya, klik bait pertama (masuk Preview), lalu tekan `Space` (Take) untuk memproyeksikannya ke layar jemaat.',
        tips: 'Tidak perlu khawatir jika salah menekan tombol — layar jemaat tidak akan berubah kecuali Anda menekan tombol `Space` (Take) secara eksplisit.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // B. LIBRARY & MANAJEMEN LAGU
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'desktop-library',
    title: 'B. SION Media: Library & Manajemen Lagu',
    description: 'Pelajari cara mengelola database nyanyian ibadah, mengedit lirik dengan standar slide SION, dan impor lagu massal.',
    items: [
      {
        id: 'library-mode-fts',
        title: 'Pencarian Cepat dengan SQLite FTS5',
        badge: 'Song Library',
        detail: 'Library Mode adalah menu utama untuk menjelajahi seluruh lagu yang tersimpan. Menu ini dilengkapi mesin pencari teks lengkap berbasis `SQLite FTS5` (Full-Text Search):\n- **Kecepatan Pencarian**: Menemukan lagu di antara ribuan daftar dalam waktu kurang dari 5 milidetik.\n- **Pencarian Fleksibel**: Anda dapat mencari lagu cukup dengan mengetikkan nomor lagu, kata dalam judul, atau potongan lirik lagu.\n- **Filter Sidebar**: Gunakan bilah sisi kiri untuk memfilter daftar lagu berdasarkan buku nyanyian tertentu secara cepat saat ibadah berlangsung.\n- **Tampilan Grid Nomor**: Klik tab "Nomor" di panel browser untuk melihat daftar lagu dalam format kotak nomor visual, memudahkan navigasi saat chorister menyebutkan nomor lagu secara lisan.',
        screenshot: '/screenshots/library.png',
        tips: 'Tekan pintasan `Ctrl + K` untuk membuka palette pencarian global yang lebih cepat dan mendukung fuzzy matching.'
      },
      {
        id: 'manajemen-hymnals',
        title: 'Manajemen Buku Nyanyian (Hymnals)',
        badge: 'Buku Lagu',
        detail: 'SION Media mendukung pengelolaan beberapa buku nyanyian gereja secara paralel:\n- **Lagu Sion Edisi Lengkap (525 lagu)**: Buku lagu bawaan default berisi nyanyian lengkap dari himnal resmi GMAHK Indonesia edisi terbaru.\n- **Lagu Sion Edisi Lama (342 lagu)**: Versi lama himnal dengan nomor dan lirik yang berbeda, berguna untuk jemaat yang masih terbiasa dengan edisi lama.\n- **Lagu Anak-Anak Pelangi Kasih (305 lagu)**: Koleksi khusus untuk kebaktian anak-anak dan Pathfinder.\n- **Lagu Sion Toba (Baru & Lama)**: Himnal berbahasa Batak Toba untuk pelayanan lintas-kultural.\n- **Pin Buku Lagu**: Tandai buku lagu yang paling sering digunakan pada sidebar kiri agar selalu tampil di bilah akses cepat tanpa perlu membuka dropdown selector.',
        tips: 'Buku nyanyian dapat diaktifkan atau disembunyikan melalui menu **Pengaturan → Database** di panel navigasi kiri.'
      },
      {
        id: 'song-editor-semicolon',
        title: 'Song Editor & Aturan Tanda Titik Koma (;)',
        badge: 'Lirik Editor',
        detail: 'SION Media menggunakan aturan penulisan lirik khusus untuk menghasilkan tata letak slide proyeksi yang konsisten:\n- **Struktur Lagu**: Anda dapat menyusun bait lagu berdasarkan kategori (Verse, Chorus, Bridge, Tag) untuk kemudahan navigasi operator.\n- **Aturan Titik Koma (;)**: Di akhir setiap baris kalimat nyanyian, Anda wajib menambahkan tanda titik koma (`;`). Tanda ini memberi tahu mesin proyeksi untuk memisahkan baris teks secara visual di layar jemaat.\n- **Slide Generator**: Mesin slide otomatis memformat teks panjang sebelum tanda titik koma agar tidak terpotong kasar, melainkan dibungkus (wrap) dengan indah pada slide yang sama.\n- **Chord Notation**: Anda juga dapat menambahkan notasi kunci nada dalam tanda kurung siku `[C]`, `[Am]`, `[G7]` di atas baris lirik untuk keperluan Stage Display pemusik.',
        screenshot: '/screenshots/editor.png',
        tips: 'Contoh lirik terformat dengan benar:\n`Kasih Tuhan tidak berkesudahan;` → slide baris 1\n`Rahmat-Nya selalu baru setiap pagi;` → slide baris 2\n`Besar kesetiaan-Mu ya Tuhan Bapaku;` → slide baris 3'
      },
      {
        id: 'impor-dan-ekspor-lagu',
        title: 'Impor Massal Excel/JSON & Backup Database',
        badge: 'Data Transfer',
        detail: 'Anda tidak perlu memasukkan lagu satu per satu secara manual. SION Media menyediakan fitur impor data massal:\n1. **Template Excel**: Buka menu **Pengaturan → Database → Impor**, unduh template berkas `.xlsx`, isi lirik sesuai struktur kolom yang tersedia, lalu unggah kembali.\n2. **Impor JSON**: Mendukung transfer database lagu antar-PC operator menggunakan format berkas `.json`.\n3. **Conflict Resolution**: Jika lagu yang diimpor memiliki nomor yang sama dengan lagu di database lokal, sistem akan menanyakan apakah Anda ingin menimpa (overwrite), melewatkan (skip), atau menyimpannya sebagai duplikat baru.\n4. **Ekspor Backup**: Buka menu **Pengaturan → Database → Ekspor** untuk menyimpan seluruh database ke berkas cadangan.',
        warnings: 'Lakukan ekspor backup database secara berkala ke penyimpanan eksternal (Flashdisk/Cloud) untuk mengamankan data lirik jemaat Anda dari kerusakan sistem OS.\nJangan memindahkan atau menghapus file gambar/video yang telah dirujuk di dalam database lagu.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // C. PLAYLIST & RUNDOWN IBADAH
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'desktop-playlist',
    title: 'C. Playlist & Rundown Ibadah',
    description: 'Susun urutan liturgi ibadah secara rapi menggunakan Playlist Panel dengan fitur drag-and-drop.',
    items: [
      {
        id: 'playlist-overview',
        title: 'Membuat & Mengelola Playlist',
        badge: 'Rundown',
        detail: 'Playlist Panel terletak di sisi kanan layar utama dan berfungsi sebagai "rundown acara" ibadah Anda:\n1. Klik tombol **+ Buat Playlist Baru** di bagian atas panel.\n2. Beri nama sesuai identitas ibadah (contoh: "Sabat 19 Juli 2026" atau "Ibadah Natal").\n3. Cari lagu dari Library Mode di sisi kiri, lalu klik tombol **+** atau seret (drag) lagu ke panel playlist.\n4. Anda dapat menambahkan lagu dari buku nyanyian yang berbeda dalam satu playlist (mixed-hymnal support).',
        screenshot: '/screenshots/playlist-rundown.png',
        tips: 'Playlist otomatis tersimpan ke database lokal SQLite WAL journal. Data tidak hilang meskipun PC operator mati mendadak (crash recovery).'
      },
      {
        id: 'playlist-reorder',
        title: 'Mengatur Urutan & Mengganti Item',
        badge: 'Drag & Drop',
        detail: 'Mengubah urutan liturgi sangat mudah:\n- **Drag and Drop**: Tahan klik pada slot item di playlist, lalu seret ke posisi baru untuk mengubah urutan secara visual.\n- **Ganti Item Tanpa Hapus**: Klik kanan (right-click) slot playlist tertentu, lalu pilih opsi **Ganti Item**. Fitur ini akan mengganti konten visual slot tersebut tanpa mengacaukan posisi urutan rundown yang sudah disusun.\n- **Hapus Item**: Klik ikon silang pada slot item untuk menghapusnya dari daftar.',
        tips: 'Fitur "Ganti Item" sangat berguna saat ada perubahan lagu mendadak dari chorister beberapa menit sebelum ibadah dimulai — Anda tidak perlu menyusun ulang seluruh rundown.'
      },
      {
        id: 'playlist-bible-integration',
        title: 'Menambahkan Ayat Alkitab ke Playlist',
        badge: 'Alkitab',
        detail: 'Selain lagu, Anda dapat menambahkan slide ayat Alkitab langsung ke dalam playlist ibadah:\n1. Buka modul **Alkitab** melalui ikon buku di bilah navigasi atas.\n2. Pilih kitab, pasal, dan ayat yang diinginkan (contoh: Mazmur 23:1-6).\n3. Klik tombol **Tambah ke Playlist** untuk memasukkan ayat sebagai slide terpisah di dalam rundown ibadah.\n- Mesin proyeksi akan memformat teks ayat secara otomatis agar mudah dibaca di layar jemaat dengan referensi kitab dan nomor ayat yang jelas.',
        screenshot: '/screenshots/bible-module.png',
        tips: 'Anda dapat memilih rentang ayat (misal: Yohanes 3:16-17) dan sistem akan memecahnya menjadi beberapa slide sesuai panjang teks per ayat.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // D. PROYEKSI & KONFIGURASI LAYAR
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'desktop-projection',
    title: 'D. SION Media: Proyeksi & Konfigurasi Layar',
    description: 'Pelajari setup monitor ganda, alur kerja Preview-Take siaran, tombol pengaman visual, dan monitor panggung.',
    items: [
      {
        id: 'multi-monitor-setup',
        title: 'Konfigurasi Monitor Ganda (Extended Display)',
        badge: 'Display Setup',
        detail: 'Untuk memproyeksikan visual lirik jemaat secara bersih bebas dari tampilan aplikasi operator:\n1. Hubungkan PC operator ke proyektor atau TV jemaat menggunakan kabel HDMI / DisplayPort.\n2. Tekan tombol keyboard `Win + P` di Windows, lalu pilih opsi **Extend** (Perluas Layar).\n3. Jalankan SION Media, masuk ke menu **Pengaturan Monitor** di kanan atas.\n4. Pilih layar eksternal yang terdeteksi (misal: `Monitor 2: Projector`) sebagai target tayangan, lalu klik simpan.\n- Output visual akan diproyeksikan secara fullscreen tanpa kursor mouse atau bilah taskbar Windows.',
        warnings: 'Pastikan Windows Display Scaling untuk monitor sekunder diatur pada tingkat **100%** untuk menghindari lirik visual yang terpotong di tepi layar proyeksi.\nJangan menggunakan mode **Duplicate** (mirror); mode **Extend** wajib aktif agar layar operator dan proyeksi terpisah.'
      },
      {
        id: 'preview-take-workflow',
        title: 'Alur Kerja Preview → Take (Tombol SPACE)',
        badge: 'Visual Control',
        detail: 'SION Media mengadopsi standar alur kerja stasiun siaran televisi profesional untuk menghindari kesalahan proyeksi lirik:\n1. **Preview Deck**: Klik bait lirik lagu atau ayat Alkitab di panel tengah. Lirik tersebut akan tampil di layar Preview operator terlebih dahulu — jemaat belum melihat apa-apa di layar proyektor.\n2. **Take (Spacebar)**: Tekan tombol `Space` untuk mengirim lirik dari layar Preview ke Program Deck (Layar Jemaat). Hanya setelah tombol ini ditekan, visual akan muncul di layar proyeksi.\n3. **Verifikasi Visual**: Operator wajib memeriksa teks di monitor operator terlebih dahulu sebelum menekan Take — ini menjamin tidak ada salah lirik atau salah ayat di depan jemaat.\n- Prinsip utama: **Apa yang ada di Preview belum tayang. Hanya setelah Take, visual tampil di layar jemaat.**',
        screenshot: '/screenshots/projection-mode.png',
        tips: 'Gunakan tombol `Panah Kanan` atau `Panah Kiri` pada keyboard untuk memindahkan bait lirik yang sedang live di Program Deck ke bait berikutnya secara instan tanpa harus kembali ke Preview.'
      },
      {
        id: 'fsm-safety-controls',
        title: 'Kontrol Keamanan Layar (Black, Clear, Freeze, Logo)',
        badge: 'FSM Engine',
        detail: 'Mesin proyeksi SION berbasis Finite State Machine (FSM) menyediakan tombol pintas cepat untuk mengamankan layar jemaat dalam hitungan detik:\n- **B (Black)**: Mematikan visual proyektor dan menggantinya dengan layar hitam pekat secara instan. Gunakan saat jeda ibadah atau transisi acara.\n- **C atau Escape (Clear)**: Menghapus teks lirik yang sedang tampil secara perlahan (fade-out), tetapi tetap mempertahankan gambar/video latar belakang media. Cocok untuk perpindahan antar-bait lagu.\n- **F (Freeze)**: Membekukan visual aktif di layar jemaat. Operator bebas mengutak-atik lagu lain di PC operator tanpa diketahui jemaat. Sangat berguna saat khotbah berlangsung.\n- **L (Logo)**: Menampilkan slide logo standby resmi gereja di layar jemaat. Digunakan sebelum ibadah dimulai atau saat istirahat.\n- **Ctrl+Alt+R (Panic Recovery)**: Melakukan hard reload mesin rendering grafis jika visual mengalami hang akibat memori GPU penuh.',
        screenshot: '/screenshots/projection.png',
        warnings: 'Mode **Freeze** membekukan output hardware HDMI. Gunakan ini jika Anda perlu melakukan pengeditan darurat pada lirik lagu Sabat berikutnya tanpa ketahuan jemaat.'
      },
      {
        id: 'stage-display-setup',
        title: 'Stage Display (Monitor Khusus Panggung)',
        badge: 'Stage Monitor',
        detail: 'Stage Display menyajikan rujukan navigasi khusus bagi musisi, penyanyi, dan pengkhotbah di atas panggung:\n- **Current Cue & Next Cue**: Menampilkan kalimat lirik yang sedang menyala secara live dan baris lirik berikutnya untuk persiapan menyanyi.\n- **Timer & Clock**: Dilengkapi penghitung waktu mundur durasi khotbah serta penunjuk jam saat ini agar pelayanan tepat waktu.\n- **Chord Charts & Notes**: Menampilkan kunci nada musik dan catatan tambahan dari pembicara.\n- **Heartbeat Diagnostic**: Mengirimkan sinyal kesehatan koneksi dari server secara real-time untuk memastikan monitor panggung tidak mengalami freeze.',
        screenshot: '/screenshots/stage-display.png',
        tips: 'Stage display dapat dialirkan secara fisik menggunakan kabel HDMI sekunder panjang, atau secara nirkabel melalui tablet Android yang menjalankan SION Link Mobile dalam mode Stage Display.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // E. SISTEM BACKGROUND & ATMOSFER VISUAL
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'desktop-atmosphere',
    title: 'E. Sistem Background & Atmosfer Visual',
    description: 'Kelola visual latar belakang proyeksi — gambar, video, gradien, dan efek aurora — agar tampilan ibadah memukau.',
    items: [
      {
        id: 'atmosphere-hierarchy',
        title: 'Hierarki Prioritas Visual Layar',
        badge: 'Prioritas',
        detail: 'SION Media menggunakan sistem hierarki cerdas untuk menentukan visual latar belakang yang tampil di layar proyeksi. Sistem selalu memilih prioritas tertinggi yang tersedia:\n1. **Live Override (Prioritas Tertinggi)**: Pilihan manual operator melalui panel atmosfer di Control Bar saat ibadah berlangsung. Digunakan untuk merespon perubahan suasana ibadah secara mendadak.\n2. **Song Background (Binding)**: Visual yang telah diikat (bind) secara permanen ke sebuah lagu melalui Song Editor. Memungkinkan setiap lagu memiliki "karakter visual" yang unik.\n3. **Global Atmosphere (Fallback)**: Background default aplikasi yang diatur di menu Pengaturan. Digunakan secara otomatis jika lagu tidak memiliki binding background khusus.',
        tips: 'Jika file media asli terhapus atau harddisk eksternal dicabut, sistem akan otomatis melakukan fallback ke Global Atmosphere (Warna Solid) sehingga proyeksi tidak pernah mati atau error di depan jemaat.'
      },
      {
        id: 'atmosphere-media-library',
        title: 'Mengelola Media Library & Koleksi',
        badge: 'Aset Visual',
        detail: 'Kelola koleksi aset visual gereja Anda di menu **Pengaturan → Background**:\n- **Import Media**: Mendukung gambar (JPG, PNG, WEBP) dan video (MP4, WEBM). Cukup seret (drag) file ke dalam panel untuk menambahkan.\n- **Koleksi (Packs)**: Kelompokkan aset visual berdasarkan tema, contoh: "Worship Ambient", "Seasonal Christmas", "Fast Beat Praise".\n- **Metadata & Tag**: Berikan kategori dan tag pada setiap aset agar mudah ditemukan saat ribuan aset visual sudah terkumpul.\n- **Drag & Drop Ordering**: Atur urutan tampilan aset di dalam koleksi menggunakan fitur seret-jatuhkan pada kartu thumbnail.',
        screenshot: '/screenshots/media-library.png',
        tips: 'Gunakan format `.webm` untuk beban CPU paling ringan, atau `.mp4` (H.264) untuk kompatibilitas luas.\nResolusi yang direkomendasikan: **1920x1080** (Full HD). Engine akan otomatis melakukan scaling jika aspek rasio berbeda.'
      },
      {
        id: 'atmosphere-song-binding',
        title: 'Mengikat Background ke Lagu (Song Binding)',
        badge: 'Per-Lagu',
        detail: 'Anda dapat menentukan visual background spesifik untuk setiap lagu agar suasana ibadah makin hidup:\n1. Buka **Song Editor** untuk lagu yang diinginkan.\n2. Cari bagian **Atmosfer Lagu** di panel kanan.\n3. Pilih salah satu dari tiga mode:\n- **Inherit Global**: Mengikuti pengaturan global default.\n- **Preset Engine**: Menggunakan efek built-in (Solid Color, Gradient, Aurora, Particles).\n- **Asset Library**: Memilih file gambar/video spesifik dari koleksi Anda.\n4. Simpan perubahan. Saat lagu tersebut dipilih dari playlist, background akan berubah secara otomatis dengan transisi cross-fade yang halus.',
        tips: 'Gunakan fitur **Bulk Assignment** di Management Mode untuk menetapkan background yang sama ke puluhan atau ratusan lagu sekaligus tanpa perlu membuka setiap Song Editor satu per satu.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // F. POWERPOINT PRESENTATION BRIDGE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'powerpoint-bridge',
    title: 'F. PowerPoint Presentation Bridge',
    description: 'Integrasikan slide presentasi PowerPoint asli dengan kontrol dua arah dan transfer cerdas rendah latensi.',
    items: [
      {
        id: 'bridge-architecture',
        title: 'Arsitektur Presentation Bridge',
        badge: 'IPC Named Pipe',
        detail: 'Bila pengkhotbah membawa laptop sendiri ke mimbar dan ingin mengontrol animasi slidenya secara mandiri, gunakan **SION Link Desktop** di laptop tersebut. PowerPoint Bridge bekerja dengan arsitektur berikut:\n- **SION PowerPoint Agent (C#/.NET)**: Berjalan di latar belakang Windows pemateri untuk mengikat COM object PowerPoint secara persisten.\n- **Koneksi IPC Named Pipe**: Mengirimkan data perpindahan slide, Speaker Notes, dan frame visual presentasi melalui pipa bernama (named pipe) Windows ke SION Link.\n- **Wi-Fi LAN Transmission**: SION Link mengirimkan data tersebut ke PC operator server SION Media melalui Wi-Fi lokal dengan kompresi JPEG cerdas.',
        tips: 'Presentation Bridge sangat direkomendasikan jika presentasi memiliki efek animasi transisi 3D kompleks yang tidak bisa dikonversi ke format PDF/gambar statis.'
      },
      {
        id: 'powerpoint-activation',
        title: 'Langkah Mengaktifkan PowerPoint Bridge',
        badge: 'Slide Show',
        detail: 'Langkah mudah mengaktifkan sinkronisasi PowerPoint:\n1. Buka berkas `.pptx` presentasi di laptop pemateri.\n2. Tekan tombol `F5` di PowerPoint untuk memulai mode Slide Show (tampilan layar penuh).\n3. SION PowerPoint Agent secara otomatis mendeteksi status slide aktif dan meluncurkan server PowerPoint Bridge di latar belakang.\n4. Sambungkan SION Link Desktop ke SION Media PC Operator menggunakan kode pairing mimbar yang tampil di layar.\n5. Slide presentasi akan langsung muncul di panel PowerPoint pada layar operator SION Media.',
        screenshot: '/screenshots/powerpoint-bridge.png',
        warnings: 'Microsoft PowerPoint wajib berada dalam kondisi menjalankan **Slide Show** (fullscreen, tombol `F5`) agar event transisi slide dapat dibaca oleh Agent.\nJangan menutup jendela Slide Show selama ibadah berlangsung.'
      },
      {
        id: 'bridge-sync-modes',
        title: 'Mode Sinkronisasi Operator SION Media',
        badge: 'Sync Options',
        detail: 'Di panel operator SION Media Desktop, Anda dapat memilih 3 respons sinkronisasi PowerPoint:\n1. **Manual Mode**: Transisi slide dari pemateri hanya masuk ke Preview Deck operator. Operator harus menekan `Space` (Take) untuk memproyeksikannya ke layar jemaat.\n2. **Follow Preview**: Slide baru pemateri otomatis menggantikan isi Preview Deck operator secara real-time, tetapi layar jemaat belum berubah sampai operator Take.\n3. **Follow Live (Rekomendasi)**: Setiap pemateri memindahkan slide di mimbar, layar proyeksi jemaat langsung memperbarui tampilannya secara instan tanpa intervensi operator.',
        tips: 'Gunakan mode **Follow Live** jika Anda mempercayai pemateri untuk melakukan transisi slide khotbahnya sendiri secara mandiri.\nGunakan mode **Manual** jika operator ingin memiliki kontrol penuh atas waktu proyeksi.'
      },
      {
        id: 'bridge-phase2-upgrades',
        title: 'Fitur Baru PowerPoint Bridge Tahap 2',
        badge: 'Bridge Update',
        detail: 'Pembaruan PowerPoint Bridge menghadirkan peningkatan performa dan kontrol yang jauh lebih andal:\n- **Navigasi Dua Arah**: Operator SION Media dapat memindahkan slide PowerPoint di laptop pemateri secara remote langsung dari panel operator SION Media.\n- **Kompresi JPEG Cerdas**: Slide PowerPoint dikompresi di Agent menggunakan encoding JPEG cerdas, mengurangi ukuran file gambar hingga 85% untuk transfer instan tanpa latensi melalui Wi-Fi.\n- **Auto-Start & Auto-Clean**: PowerPoint Bridge otomatis berjalan saat koneksi terjalin, dan direktori sisa slide PowerPoint lama akan dibersihkan saat startup untuk menghemat ruang disk PC operator.',
        tips: 'Gunakan tombol kontrol arah di modul PowerPoint SION Media Desktop untuk membantu memindahkan slide pemateri jika mereka meminta bantuan transisi dari jauh.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // G. SION LINK MOBILE (ANDROID)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'mobile-app',
    title: 'G. SION Link Mobile (Android)',
    description: 'Manfaatkan tablet atau handphone Android sebagai remote kontrol nirkabel dan monitor panggung portabel.',
    items: [
      {
        id: 'mobile-pairing-qr',
        title: 'Penyambungan Kode QR & Manual IP',
        badge: 'QR Pairing',
        detail: 'Langkah menyambungkan aplikasi Android SION Link Mobile ke server utama SION Media:\n1. Pada SION Media Desktop PC Operator, aktifkan server dengan mengetuk tombol cepat **ON SION Link** pada bilah judul utama (title bar).\n2. Kode QR penyambungan akan muncul di layar monitor operator.\n3. Buka SION Link Mobile di HP Android, ketuk tombol **Pindai Kode QR** dan arahkan kamera HP ke layar monitor PC.\n4. **Koneksi Manual**: Jika kamera bermasalah, masukkan alamat IP lokal server (misal: `192.168.1.100`), Port (`9997`), dan kode otorisasi role secara manual.',
        screenshot: '/screenshots/mobile-pairing.png',
        tips: 'Alamat IP lokal PC operator dapat dilihat langsung di bawah tampilan Kode QR pada halaman pengaturan sistem SION Link.\nAnda juga dapat menyalin alamat tersebut ke clipboard untuk dikirim via chat.'
      },
      {
        id: 'mobile-four-roles',
        title: 'Penjelasan 4 Peran Operasional Mobile',
        badge: 'Device Roles',
        detail: 'Setelah tersambung, Anda dapat memilih salah satu dari 4 peran operasional berikut:\n1. **Presenter Remote**: Berfungsi untuk pengkhotbah di mimbar. Menampilkan catatan khotbah (`Speaker Notes`) dan menyediakan tombol navigasi maju/mundur slide presentasi PowerPoint.\n2. **Operator Remote**: Memungkinkan operator cadangan mengontrol daftar lagu, memilih lirik lagu, dan menekan tombol visual Black/Clear dari kursi jemaat atau ruang kontrol terpisah.\n3. **Stage Display**: Mengubah tablet Android menjadi monitor panggung nirkabel bagi pemain musik untuk menampilkan lirik aktif, lirik berikutnya, chord, dan timer.\n4. **Live Viewer**: Mengalirkan siaran video program utama ibadah secara real-time ke HP pengguna dengan latensi rendah melalui protokol WHEP/LL-HLS.',
        screenshot: '/screenshots/mobile-roles.png',
        warnings: 'Pastikan baterai perangkat Android terisi penuh atau terhubung ke pengisi daya saat digunakan sebagai layar Stage Display sepanjang ibadah berlangsung.\nSetiap perangkat hanya boleh menggunakan satu peran dalam satu waktu.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // H. INTEGRASI VIDEO & OBS STUDIO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'obs-integration',
    title: 'H. Integrasi Video & OBS Studio',
    description: 'Hubungkan visual SION Media dengan OBS Studio menggunakan transmisi SRT berlatensi rendah untuk kebutuhan live streaming.',
    items: [
      {
        id: 'obs-srt-output',
        title: 'OBS Network Output (SRT Stream Listener)',
        badge: 'Video Out',
        detail: 'Mengirimkan visual proyeksi lirik SION Media sebagai sumber video ke OBS Studio di PC lain:\n1. Di SION Media Desktop, masuk ke **Pengaturan → Broadcast**, aktifkan **OBS / SRT Network Output**.\n2. Salin alamat SRT Listener yang tertera (contoh: `srt://192.168.1.100:8890?mode=listener`).\n3. Buka OBS Studio pada PC streaming, tambahkan Source baru jenis **Media Source**.\n4. Hapus centang pada opsi "Local File".\n5. Tempel alamat SRT tersebut ke kolom **Input**, lalu klik OK.\n- Visual lirik beserta background dari SION Media akan mengalir ke OBS Studio secara real-time sebagai sumber video.',
        screenshot: '/screenshots/obs-integration.png',
        tips: 'Untuk mendapatkan teks lirik overlay transparan, gunakan filter **Chroma Key** di OBS Studio untuk menghilangkan warna latar belakang slide proyeksi.'
      },
      {
        id: 'obs-live-input-gateway',
        title: 'OBS Live Input ke SION Link',
        badge: 'Video In',
        detail: 'Menampilkan feed kamera live dari OBS Studio langsung ke layar perangkat penonton di SION Link Desktop & Mobile:\n1. Aktifkan **OBS Live Input Gateway** di pengaturan SION Media.\n2. Salin alamat Publisher yang disediakan (misal: `srt://192.168.1.100:8891?mode=caller`).\n3. Buka OBS Studio pengirim, masuk ke **Settings → Stream**, pilih **Custom**, tempel alamat tersebut di kolom Server, lalu klik Start Streaming.\n- Alur ini menggunakan protokol **LL-HLS** untuk distribusi rendah latensi ke seluruh perangkat SION Link.',
        warnings: 'Jika siaran OBS dihentikan, perangkat penonton SION Link akan otomatis dialihkan kembali menampilkan visual Program Output SION Media secara aman (smart fallback).'
      },
      {
        id: 'obs-latency-tuning',
        title: 'Optimasi Latensi Rendah (LAN Tuning)',
        badge: 'Streaming Tuning',
        detail: 'Untuk mendapatkan kualitas gambar siaran lokal terbaik tanpa jeda suara/visual:\n- **Video Encoding**: Gunakan encoder hardware H.264 (seperti NVENC pada kartu grafis Nvidia) dengan bitrate konstan (CBR) sebesar `4500kbps`.\n- **Keyframe Interval**: Setel interval keyframe ke angka `1` atau `2` detik pada pengaturan encoder OBS Studio.\n- **Audio Bitrate**: Setel bitrate audio pada angka `128kbps` atau `160kbps` untuk transmisi suara instrumen musik yang jernih.\n- **Resolusi Optimal**: Gunakan resolusi `1920x1080` pada 60fps untuk hasil visual terbaik di jaringan LAN.',
        tips: 'Gunakan kabel ethernet LAN (bukan Wi-Fi) pada PC streaming OBS dan PC operator SION Media untuk menjamin bandwidth transmisi data SRT yang stabil tanpa drop frame.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // I. REFERENSI TOMBOL PINTAS KEYBOARD
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'keyboard-shortcuts',
    title: 'I. Referensi Tombol Pintas Keyboard',
    description: 'Daftar lengkap keyboard shortcut yang wajib dihafalkan oleh setiap operator SION Media.',
    items: [
      {
        id: 'shortcut-projection',
        title: 'Tombol Pintas Kontrol Proyeksi',
        badge: 'Proyeksi',
        detail: 'Tombol-tombol paling penting yang harus dihafalkan operator saat ibadah berlangsung:\n- `Space` → **Take**: Mengirim slide dari Preview ke Program (Layar Jemaat). Ini adalah tombol utama operator.\n- `Panah Kanan` → Pindah ke slide/bait lirik berikutnya secara live langsung di layar jemaat.\n- `Panah Kiri` → Kembali ke slide/bait lirik sebelumnya secara live langsung di layar jemaat.\n- `B` → **Black Screen**: Mengubah layar jemaat menjadi hitam pekat secara instan.\n- `C` atau `Escape` → **Clear Text**: Menghilangkan teks lirik (fade-out) dari layar jemaat, background tetap tampil.\n- `F` → **Freeze**: Membekukan visual aktif di layar jemaat agar operator bebas bekerja.\n- `L` → **Logo**: Menampilkan logo standby gereja di layar proyeksi.',
        tips: 'Hafalkan minimal 4 tombol ini: `Space` (Take), `B` (Black), `C` (Clear), dan `Panah Kanan` (Next Slide). Dengan 4 tombol ini, Anda sudah bisa mengoperasikan ibadah dari awal hingga akhir.'
      },
      {
        id: 'shortcut-navigation',
        title: 'Tombol Pintas Navigasi & Darurat',
        badge: 'Navigasi',
        detail: 'Tombol-tombol pendukung untuk navigasi cepat dan penanganan darurat:\n- `Ctrl + K` → Membuka palette pencarian global lagu (fuzzy search).\n- `Ctrl + F` → Fokus langsung ke kolom pencarian di sidebar.\n- `Ctrl + Alt + R` → **Panic Recovery**: Memuat ulang mesin rendering proyeksi secara paksa jika visual hang atau desinkronisasi.\n- `Ctrl + S` → Menyimpan perubahan editor lagu aktif.\n- `Ctrl + Z` → Undo perubahan terakhir di editor.',
        warnings: 'Tombol `Ctrl+Alt+R` hanya digunakan dalam situasi darurat (visual macet). Penggunaan tombol ini akan menampilkan layar hitam singkat selama 1-2 detik saat mesin rendering dimuat ulang.'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // J. TROUBLESHOOTING & FAQ
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'troubleshooting',
    title: 'J. Troubleshooting & FAQ',
    description: 'Panduan cepat mendiagnosis dan menyelesaikan masalah teknis yang sering ditemui operator di lapangan.',
    items: [
      {
        id: 'ts-network-disconnect',
        title: 'SION Link Gagal Terhubung / Jaringan Putus',
        badge: 'Troubleshoot',
        detail: 'Jika perangkat SION Link (PC/Android) tidak mendeteksi SION Media Desktop, lakukan langkah pemeriksaan berikut:\n1. **Verifikasi Wi-Fi**: Pastikan semua perangkat terhubung ke router yang sama. Periksa apakah alamat IP berada di subnet yang sama (contoh: `192.168.1.XX`).\n2. **Nonaktifkan AP Isolation**: Masuk ke pengaturan admin router gereja Anda, cari pengaturan nirkabel, dan pastikan fitur `AP Isolation` atau `Client Isolation` dalam kondisi nonaktif (Disabled).\n3. **Windows Firewall**: Periksa Windows Defender Firewall pada PC operator. Pastikan port masuk berikut tidak terblokir:\n- SRT: port `8890`\n- HLS: port `8888`\n- WebRTC: port `8889`\n- API: port `9997`',
        tips: 'Gunakan perintah `ping 192.168.1.XXX` di command prompt untuk menguji apakah laptop pemateri dan handphone Android dapat mengirim paket data ke IP PC operator.'
      },
      {
        id: 'ts-agent-failed',
        title: 'SION PowerPoint Agent Gagal Mengendalikan Slide',
        badge: 'Troubleshoot',
        detail: 'Jika navigasi slide PowerPoint dari mimbar tidak terkirim ke PC operator:\n1. Pastikan Microsoft PowerPoint telah terbuka di laptop pemateri dan telah masuk ke mode **Slide Show** (`F5`).\n2. Pastikan SION PowerPoint Agent tidak diblokir oleh antivirus lokal di laptop pemateri. Tambahkan pengecualian (exception) jika perlu.\n3. Periksa apakah arsitektur Office sesuai — Agent mendukung Office **32-bit** maupun **64-bit** melalui late-binding COM.\n4. Jika terjadi kendala COM Object kritis, aktifkan opsi **Legacy PowerShell Compatibility Mode** pada SION Link Desktop sebagai sistem navigasi cadangan darurat.',
        warnings: 'Jangan menutup jendela slide show PowerPoint selama ibadah khotbah berlangsung agar data binding COM tidak terputus secara mendadak.'
      },
      {
        id: 'ts-graphics-lag',
        title: 'Tampilan Proyeksi Jemaat Mengalami Lag atau Macet',
        badge: 'Troubleshoot',
        detail: 'Jika rendering visual di layar jemaat melambat atau mengalami patah-patah:\n1. **Panic Recovery**: Tekan kombinasi tombol cepat `Ctrl + Alt + R` pada keyboard PC operator. Perintah ini akan memuat ulang mesin proyeksi visual secara paksa dalam 1-2 detik.\n2. **Pembersihan Memori**: Tutup aplikasi browser Chrome, game, atau software editing video berat lainnya yang berjalan di latar belakang PC operator agar kapasitas RAM dan GPU terfokus penuh untuk SION Media.\n3. **Auto-Clean Slides**: Aktifkan fitur pembersihan otomatis direktori slide usang pada pengaturan aplikasi untuk mencegah penumpukan berkas gambar sampah di SSD.\n4. **Periksa Resolusi Video Background**: Pastikan video latar belakang tidak melebihi resolusi 1080p. Video 4K dapat menyebabkan beban GPU berlebihan.',
        tips: 'Gunakan SSD sebagai media penyimpanan sistem operasi dan database SION Media agar proses memuat video latar belakang (background motion) berlangsung instan.\nHindari menggunakan video background berdurasi lebih dari 2 menit untuk menghemat memori GPU.'
      },
      {
        id: 'ts-no-projection-output',
        title: 'Layar Proyektor Tidak Menampilkan Apa-apa',
        badge: 'Troubleshoot',
        detail: 'Jika layar proyektor tetap kosong atau menampilkan desktop Windows:\n1. Pastikan mode **Extend** aktif di pengaturan display Windows (`Win + P` → Extend).\n2. Buka menu **Pengaturan Monitor** di SION Media dan pastikan monitor proyektor telah dipilih sebagai target output.\n3. Periksa apakah kabel HDMI/DisplayPort terhubung dengan baik di kedua ujung (PC dan proyektor).\n4. Coba ganti port HDMI di kartu grafis — beberapa kartu grafis memiliki output yang berbeda untuk monitor primer dan sekunder.\n5. Jika masih bermasalah, restart SION Media dan pilih ulang monitor target di pengaturan.',
        tips: 'Beberapa proyektor memerlukan beberapa detik untuk mendeteksi sinyal video baru. Tunggu 5-10 detik setelah mencolokkan kabel sebelum menyimpulkan ada masalah.'
      }
    ]
  }
];
