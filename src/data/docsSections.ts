export const docsSections = [
  {
    title: 'Quick Start',
    description: 'Begin with the website foundation and learn how the static deployment model works.',
    items: [
      { title: 'Clone repository', detail: 'git clone https://github.com/AiWerek-Tech/sion-media-web.git' },
      { title: 'Install dependencies', detail: 'npm install' },
      { title: 'Run locally', detail: 'npm run dev' },
    ],
  },
  {
    title: 'Installation Guide',
    description: 'Understand how the latest desktop release is delivered to users.',
    items: [
      { title: 'Download metadata', detail: 'public/latest-version.json is the source of truth.' },
      { title: 'GitHub Releases', detail: 'Use GitHub Releases to distribute the Electron installer.' },
      { title: 'Download page', detail: 'The website uses the latest version JSON and direct links.' },
    ],
  },
  {
    title: 'Update Guide',
    description: 'Use release metadata with the desktop app update flow.',
    items: [
      { title: 'Version check', detail: 'Desktop app reads latest-version.json for update status.' },
      { title: 'Mandatory updates', detail: 'The file supports mandatory flag and release notes.' },
      { title: 'Release sync', detail: 'Keep JSON and GitHub Releases aligned.' },
    ],
  },
  {
    title: 'Troubleshooting',
    description: 'Resolve common deployment and hosting issues quickly.',
    items: [
      { title: 'Routing support', detail: 'Use HashRouter for GitHub Pages compatibility.' },
      { title: 'Firebase config', detail: 'Fill src/firebase/config.ts with valid public config.' },
      { title: 'Build output', detail: 'Ensure dist/ is generated before using gh-pages deploy.' },
    ],
  },
]
