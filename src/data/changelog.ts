import type { ChangelogEntry } from '../types'

export const changelogEntries: ChangelogEntry[] = [
  {
    version: '1.0.0',
    date: '2026-05-14',
    type: 'Initial Release',
    notes: [
      'Foundation website launched on GitHub Pages.',
      'Public statistics page for aggregated Firestore metrics.',
      'Download portal powered by latest-version.json.',
      'Changelog timeline and onboarding documentation.',
    ],
  },
  {
    version: '1.0.1',
    date: '2026-05-21',
    type: 'Performance Update',
    notes: [
      'Improved static asset delivery and page load performance.',
      'Added more responsive layout support for tablet and ultrawide.',
    ],
  },
]
