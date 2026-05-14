import type { ChangelogEntry } from '../types'

export const changelogEntries: ChangelogEntry[] = [
  {
    version: '1.0.0',
    date: '2026-05-14',
    type: 'Rilis Awal',
    notes: [
      'Website dasar diluncurkan di GitHub Pages.',
      'Halaman statistik publik untuk metrik Firestore teragregasi.',
      'Portal unduhan didukung oleh latest-version.json.',
      'Timeline catatan rilis dan dokumentasi onboarding tersedia.',
    ],
  },
  {
    version: '1.0.1',
    date: '2026-05-21',
    type: 'Pembaruan Kinerja',
    notes: [
      'Meningkatkan pengiriman aset statis dan performa pemuatan halaman.',
      'Menambahkan dukungan layout yang lebih responsif untuk tablet dan layar lebar.',
    ],
  },
]
