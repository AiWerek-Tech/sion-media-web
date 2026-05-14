import type { ChangelogEntry } from '../types'

/**
 * SION Media Changelog Data
 * Ordered: Newest to Oldest (Descending)
 */
export const changelogEntries: ChangelogEntry[] = [
  {
    version: '3.0.0',
    date: '2026-05-14',
    type: 'Major Release "Aurora"',
    notes: [
      'Implementasi ekosistem terhubung (Connected Software Ecosystem).',
      'Sistem pembaruan otomatis terintegrasi dengan portal web.',
      'Dukungan Multi-Platform penuh (Windows, macOS, Linux).',
      'Peningkatan visual Management Mode dengan Glassmorphism 2.0.',
      'Optimasi engine proyeksi untuk transisi yang lebih halus.',
    ],
  },
  {
    version: '2.5.0',
    date: '2026-05-10',
    type: 'Infrastructure Update',
    notes: [
      'Migrasi database ke sistem Multi-Hymnal.',
      'Implementasi pencarian cepat FTS5.',
      'Hardening IPC (Inter-Process Communication) untuk stabilitas live production.',
      'Penambahan Runtime Inspector untuk observabilitas sistem.',
    ],
  },
  {
    version: '2.0.0',
    date: '2026-05-08',
    type: 'Architecture Refactor',
    notes: [
      'Penerapan workflow broadcast (Cue → Take → Program).',
      'Redesain layout menjadi console style (40/60 ratio).',
      'Integrasi Stage Display dengan sinkronisasi state lirik.',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-05-01',
    type: 'Initial Release',
    notes: [
      'Peluncuran perdana SION Media Desktop.',
      'Sistem manajemen lagu dasar.',
      'Proyeksi lirik sederhana.',
    ],
  },
]
