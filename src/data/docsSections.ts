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
  {
    id: 'pengenalan',
    title: 'A. Pengenalan Ekosistem',
    description: 'Pahami gambaran besar arsitektur ekosistem SION Media dan bagaimana setiap komponen berinteraksi.',
    items: [
      {
        id: 'gambaran-ekosistem',
        title: 'Gambaran Ekosistem SION Media',
        badge: 'Arsitektur',
        detail: 'SION Media adalah ekosistem media ibadah profesional yang terdiri dari tiga pilar utama:\n1. **SION Media Desktop (Electron/React)**: Aplikasi pengendali utama di PC operator untuk memproses lagu, Alkitab, media, dan melakukan proyeksi visual.\n2. **SION Link Desktop (Windows Native C#)**: Aplikasi pendukung untuk PC pemateri atau layar panggung, membundel SION PowerPoint Agent untuk menjembatani Slide Show secara persisten.\n3. **SION Link Mobile (Android Native)**: Aplikasi mobile sebagai remote control pemateri, layar monitor panggung (Stage Display) nirkabel, dan viewer siaran langsung.',
        screenshot: '/screenshots/analytics-dashboard.png',
        tips: 'SION Media dirancang dengan prinsip desentralisasi; setiap komponen berkomunikasi secara aman melalui jaringan LAN tanpa ketergantungan pada koneksi internet luar.'
      },
      {
        id: 'syarat-sistem',
        title: 'Persyaratan Sistem & Jaringan',
        badge: 'Jaringan',
        detail: 'Untuk performa optimal dan konektivitas mulus:\n- **SION Media Desktop**: Windows 10/11 x64, RAM minimal 8GB, SSD, kartu grafis dengan output ganda (HDMI/DisplayPort).\n- **SION Link Mobile**: Android 7.0 (Nougat) atau lebih baru.\n- **Koneksi LAN/Wi-Fi**: Semua perangkat (PC Operator, PC Pemateri, HP Android) wajib berada di segmen jaringan lokal yang sama. Protokol *mDNS / Auto-Discovery* digunakan agar perangkat saling mendeteksi secara otomatis.',
        warnings: 'Pastikan Windows Firewall tidak memblokir port internal SION. Pilih "Allow Access" pada jaringan Private saat pertama kali meluncurkan aplikasi.'
      }
    ]
  },
  {
    id: 'desktop-library',
    title: 'B. SION Media: Library & Playlist',
    description: 'Kelola basis data lagu ibadah Anda, impor file eksternal, dan susun rundown ibadah secara rapi.',
    items: [
      {
        id: 'library-mode',
        title: 'Library Mode: Manajemen Lagu',
        badge: 'Layar Utama',
        detail: 'Library Mode adalah menu utama untuk mengelola database nyanyian gereja. Di sini Anda dapat melakukan pencarian cepat menggunakan mesin indeks FTS5 SQLite, membuat kategori buku lagu baru (misal: Kidung Jemaat, NKB, Lagu Kontemporer), serta mengimpor data lagu secara massal dari format Excel atau JSON.',
        screenshot: '/screenshots/library.png',
        tips: 'Gunakan filter kategori di bilah samping kiri untuk membatasi pencarian pada buku nyanyian tertentu saat ibadah sedang berjalan cepat.'
      },
      {
        id: 'song-editor',
        title: 'Song Editor & Aturan Penulisan Lirik',
        badge: 'Menu Editor',
        detail: 'Song Editor memungkinkan pengubahan detail lagu, pengaturan struktur lagu (Verse, Chorus, Bridge, Tag), dan penulisan lirik. Mesin proyeksi slide SION menggunakan aturan khusus untuk baris lirik:\n- **Batas Baris Nyanyian**: Gunakan tanda titik koma (;) pada akhir kalimat untuk menandakan satu baris utuh slide.\n- **Slide Generator**: Kalimat panjang sebelum tanda titik koma (;) tidak akan dipotong paksa ke slide berikutnya melainkan dibungkus (wrap) secara visual pada slide yang sama untuk menjaga keutuhan arti kalimat nyanyian.',
        screenshot: '/screenshots/editor.png',
        tips: 'Contoh format lirik yang baik:\n`Kasih Tuhan tidak berkesudahan;` (baris 1)\n`Rahmat-Nya selalu baru setiap pagi;` (baris 2)'
      },
      {
        id: 'playlist-management',
        title: 'Playlist & Rundown Acara',
        badge: 'Rundown',
        detail: 'Playlist Panel di sebelah kanan layar digunakan untuk menyusun urutan ibadah (Lagu Pembuka, Firman Tuhan, Persembahan, dll):\n- **Drag and Drop**: Geser slot item untuk mengubah urutan liturgi secara instan.\n- **Ganti Item Tanpa Hapus**: Jika ada perubahan mendadak, klik kanan slot playlist dan pilih "Ganti Item". Ini akan mengganti konten visual slot tersebut tanpa merusak urutan rundown yang sudah dibuat.\n- **Persistensi State**: Rundown otomatis tersimpan ke SQLite local WAL journal, menjaga data tetap aman jika PC operator mati mendadak.',
        screenshot: '/screenshots/song-management.png',
        warnings: 'Jangan memindahkan file gambar atau video sumber setelah dimasukkan ke panel Media agar URL lokal di database tetap dapat membacanya.'
      }
    ]
  },
  {
    id: 'desktop-projection',
    title: 'C. SION Media: Proyeksi & Layar',
    description: 'Kuasai alur penayangan live ke jemaat, panggung pemusik, dan monitor panggung.',
    items: [
      {
        id: 'projection-mode',
        title: 'Alur Kerja Preview → Take',
        badge: 'Layar Proyeksi',
        detail: 'Mengadopsi workflow standar broadcast console:\n1. **Preview**: Klik slide lirik/media di panel tengah untuk menampilkannya di layar monitor operator (belum tayang ke jemaat).\n2. **Take (Tombol SPACE)**: Tekan tombol Spacebar untuk mengirim preview ke Program Output (Layar Proyeksi Jemaat).\n3. **Isolasi Penuh**: Layar jemaat dijamin bersih dan bebas dari kursor mouse, notifikasi sistem, atau panel kerja operator.',
        screenshot: '/screenshots/projection-mode.png',
        tips: 'Gunakan pintasan keyboard untuk mempercepat transisi:\n- `Space`: Jalankan Take (Preview → Program)\n- `Panah Kanan / Kiri`: Slide berikutnya / sebelumnya secara live'
      },
      {
        id: 'fsm-projection-engine',
        title: 'Kontrol Keamanan Proyeksi (FSM)',
        badge: 'Hotkeys',
        detail: 'Mesin proyeksi SION berbasis Finite State Machine (FSM) untuk memastikan transisi layar yang bersih dan aman:\n- **B (Black)**: Mematikan proyeksi and menampilkan layar hitam solid ke jemaat.\n- **F (Freeze)**: Membekukan slide visual yang sedang tampil di layar jemaat (operator bebas memuat item lain di operator monitor).\n- **Escape / C (Clear)**: Menghapus teks lirik yang sedang tayang secara perlahan (fade-out) tetapi mempertahankan latar belakang media.\n- **L (Logo)**: Menampilkan slide logo standby gereja di layar proyeksi.\n- **Ctrl+Alt+R (Panic Recovery)**: Memuat ulang paksa (hard reload) render proyeksi jika terjadi desinkronisasi grafis.',
        screenshot: '/screenshots/projection.png',
        warnings: 'Mode Freeze membekukan output hardware HDMI/DisplayPort. Gunakan ini jika Anda harus melakukan penyuntingan data lagu darurat saat ibadah berlangsung.'
      },
      {
        id: 'stage-display',
        title: 'Stage Display (Monitor Panggung)',
        badge: 'Panggung',
        detail: 'Stage Display menyajikan informasi khusus bagi pemusik dan pengkhotbah di atas panggung:\n- Rujukan baris lirik yang sedang live (Current Cue) dan baris lirik berikutnya (Next Cue).\n- Penghitung waktu mundur (Timer) dan jam pelayanan saat ini.\n- Catatan khotbah (Speaker Notes) dan chord kunci nada musik.\n- Dilengkapi heartbeat diagnostics untuk memastikan konektivitas layar panggung aktif.',
        screenshot: '/screenshots/bible.png',
        tips: 'Monitor panggung dapat disalurkan secara fisik menggunakan kabel HDMI sekunder, atau secara nirkabel melalui SION Link Mobile/Desktop WHEP viewer.'
      }
    ]
  },
  {
    id: 'powerpoint-bridge',
    title: 'D. PowerPoint Presentation Bridge',
    description: 'Integrasikan slide presentasi PowerPoint asli dengan kontrol real-time.',
    items: [
      {
        id: 'bridge-overview',
        title: 'Konsep Presentation Bridge',
        badge: 'Bridge',
        detail: 'Bila pemateri ingin mengoperasikan animasi slide dan notes presentasinya langsung dari PC mimbar, gunakan **SION Link Desktop** di PC pemateri. PowerPoint Bridge bekerja menggunakan:\n- **SION PowerPoint Agent (C#/.NET)**: Berjalan di latar belakang Windows pemateri untuk mengikat COM object PowerPoint secara persisten.\n- **Koneksi IPC**: Mengirimkan data transisi slide, Speaker Notes, dan frame visual presentasi melalui named pipe Windows ke SION Link, yang kemudian menyalurkannya ke SION Media Desktop melalui jaringan Wi-Fi/LAN.',
        tips: 'Metode Bridge sangat direkomendasikan jika presentasi memiliki banyak efek transisi animasi kompleks yang tidak didukung oleh format konverter PDF statis.'
      },
      {
        id: 'operator-modes',
        title: 'Mode Sinkronisasi Operator',
        badge: 'Konfigurasi',
        detail: 'Di panel SION Media Desktop, operator dapat memilih tiga mode sinkronisasi:\n1. **Manual**: Transisi slide di komputer pemateri tidak mengubah layar utama jemaat secara otomatis; operator harus menekan `Space` (Take) terlebih dahulu.\n2. **Follow Preview**: Slide baru dari pemateri secara otomatis masuk ke monitor Preview operator.\n3. **Follow Live (Rekomendasi)**: Slide baru dari pemateri langsung tayang ke Program Output proyeksi jemaat secara real-time tanpa perlu intervensi manual operator.',
        warnings: 'Pastikan status Microsoft Office PowerPoint di PC pemateri telah menjalankan Slide Show (F5) agar Agent dapat membaca event slide secara aktif.'
      },
      {
        id: 'bridge-phase2-features',
        title: 'Fitur PowerPoint Bridge Tahap 2',
        badge: 'Pembaruan v1.1',
        detail: 'Pembaruan PowerPoint Bridge Tahap 2 menghadirkan peningkatan performa dan kontrol yang jauh lebih andal:\n- **Kontrol Navigasi Dua Arah**: Operator SION Media kini dapat memindahkan slide PowerPoint di PC pemateri secara remote langsung dari panel operator.\n- **Kompresi JPEG Cerdas**: Slide PowerPoint dikompresi menggunakan format JPEG cerdas di Agent, menurunkan ukuran file gambar hingga 85% untuk transfer instan tanpa latensi melalui Wi-Fi.\n- **Auto-Start PowerPoint Bridge**: PowerPoint Bridge otomatis berjalan di latar belakang saat client terhubung menggunakan kode akses Pemateri.\n- **Auto-Clean Direktori Slide**: Aplikasi otomatis menghapus file sisa gambar slide PowerPoint lama saat server dimulai (startup) untuk menghemat ruang penyimpanan.',
        tips: 'Gunakan tombol navigasi remote di panel PowerPoint SION Media Desktop untuk memindahkan slide maju/mundur ketika pemateri meminta bantuan transisi.'
      }
    ]
  },
  {
    id: 'mobile-app',
    title: 'E. SION Link Mobile (Android)',
    description: 'Manfaatkan perangkat Android sebagai remote kontrol portabel dan layar monitor.',
    items: [
      {
        id: 'connection',
        title: 'Pemasangan & Pemindaian QR Code',
        badge: 'Konektivitas',
        detail: 'Untuk menghubungkan aplikasi Android SION Link Mobile ke server utama:\n1. Buka halaman **Pengaturan Sistem → SION Link** di SION Media Desktop.\n2. Klik aktifkan server SION Link (indikator menyala hijau).\n3. Buka SION Link Mobile di HP Android, arahkan kamera ke QR Code di layar PC untuk memindai akses secara instan.\n- *Koneksi Manual*: Jika kamera bermasalah, Anda dapat memasukkan alamat IP, Port, dan kode otorisasi role secara manual.',
        tips: 'Aktivasi server SION Link juga dapat dilakukan secara cepat langsung melalui tombol pintas "ON SION Link" pada bilah judul (title bar) utama.'
      },
      {
        id: 'roles',
        title: 'Peran & Mode Operasional Mobile',
        badge: 'Role',
        detail: 'Android Client mendukung empat mode peran (role) yang dapat dipilih setelah pemindaian:\n- **Presenter Remote**: Remote slide presentasi (Next/Prev slide) dan penampil Speaker Notes bagi pengkhotbah di podium.\n- **Operator Remote**: Mengendalikan playlist lagu, lirik, dan tombol FSM (Black/Clear) dari kejauhan.\n- **Stage Display**: Menjadikan tablet Android sebagai monitor panggung nirkabel bagi pemusik.\n- **Live Viewer**: Menonton tayangan program langsung (video + audio) secara real-time.',
        warnings: 'Aplikasi SION Link Mobile memerlukan izin kamera untuk fitur pemindaian QR Code pertama kali.'
      }
    ]
  },
  {
    id: 'obs-integration',
    title: 'F. Integrasi Video & OBS Studio',
    description: 'Hubungkan program siaran visual SION Media dengan OBS Studio melalui protokol SRT.',
    items: [
      {
        id: 'obs-network-output',
        title: 'OBS Network Output (SRT Stream)',
        badge: 'Siaran Keluar',
        detail: 'Mengirimkan hasil proyeksi SION Media (lyrics overlay + background) sebagai input sumber video di OBS Studio PC lain:\n1. Di SION Media Desktop, aktifkan **OBS / SRT Network Output** di menu Pengaturan.\n2. Salin alamat SRT (misalnya: `srt://192.168.1.100:8890?mode=listener`).\n3. Di OBS Studio penerima, tambahkan source **Media Source**, matikan pilihan "Local File", dan tempel alamat SRT tersebut ke kolom Input.',
        screenshot: '/screenshots/broadcast.png',
        tips: 'Gunakan encoding H.264 dengan bitrate 4500kbps untuk transmisi video program 1080p60fps local LAN yang sangat lancar tanpa latensi.'
      },
      {
        id: 'obs-live-input',
        title: 'OBS Live Input ke SION Link',
        badge: 'Siaran Masuk',
        detail: 'Menampilkan feed kamera live dari OBS Studio langsung ke layar penonton di SION Link Desktop & Mobile:\n1. Aktifkan **OBS Live Input Gateway** di pengaturan SION Media.\n2. Salin alamat Publisher yang disediakan (misal: `srt://192.168.1.100:8891?mode=caller`).\n3. Buka OBS Studio pengirim, masuk ke **Settings → Stream**, pilih **Custom**, tempel alamat tersebut di kolom Server, lalu klik Start Streaming di OBS.\n- Alur ini menggunakan protokol LL-HLS untuk distribusi rendah latensi ke seluruh perangkat SION Link.',
        warnings: 'Jika siaran OBS dihentikan, perangkat penonton SION Link akan otomatis dialihkan kembali menampilkan visual Program Output SION Media secara aman.'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'G. Troubleshooting & FAQ',
    description: 'Pecahkan masalah umum yang sering dihadapi operator di lapangan dengan cepat.',
    items: [
      {
        id: 'network-trouble',
        title: 'Jaringan Terputus / Perangkat Tidak Terdeteksi',
        badge: 'Troubleshoot',
        detail: 'Jika perangkat SION Link tidak dapat terhubung ke SION Media Desktop:\n1. **Periksa Jaringan**: Pastikan semua perangkat berada pada jaringan Wi-Fi/LAN yang sama (bukan Wi-Fi tamu/guest network yang membatasi komunikasi antar client).\n2. **Uji Ping**: Uji koneksi IP server dari perangkat client.\n3. **Windows Firewall**: Periksa Windows Defender Firewall, pastikan port masuk (Inbound Rules) untuk SION Media tidak terblokir.\n- *Default Port*: SRT 8890, HLS 8888, WebRTC 8889, API 9997.',
        tips: 'Hindari penggunaan Wi-Fi publik gereja yang mengaktifkan fitur "Access Point Isolation" (AP Isolation), karena fitur tersebut memblokir komunikasi lokal antar perangkat.'
      },
      {
        id: 'powerpoint-trouble',
        title: 'SION PowerPoint Agent Gagal Terhubung',
        badge: 'Troubleshoot',
        detail: 'Jika kontrol PowerPoint dari mimbar tidak terdeteksi:\n- Pastikan Microsoft PowerPoint telah diluncurkan dan slide presentasi dalam keadaan aktif (Slide Show berjalan).\n- Jika Agent tidak terdeteksi oleh SION Link, buka folder `sion-link-desktop` di PowerShell dan jalankan perintah `npm run agent:publish` untuk merakit ulang biner agent.\n- **Office 32-bit**: Agent mendukung Late Binding COM untuk x86, namun performa terbaik dicapai pada arsitektur Office x64.',
        warnings: 'Jika terjadi kegagalan Agent kritis di mimbar, Anda dapat mengaktifkan "Legacy PowerShell Compatibility Mode" di SION Link sebagai cadangan darurat.'
      }
    ]
  }
];
