# SION Media Website

Official website for the SION Media desktop application. This repository hosts the landing page, download portal, changelog, and public release metadata for the desktop app built in `D:\my_dev\SION-Media`.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project (for full functionality)

### Local Development
```bash
# Clone repository
git clone https://github.com/AiWerek-Tech/sion-media-web.git
cd sion-media-web

# Install dependencies
npm install

# Copy environment template
cp .env.template .env

# Fill in Firebase configuration in .env
# See FIREBASE_SETUP.md for detailed instructions

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Deployment

### GitHub Pages Deployment
```bash
# Deploy to GitHub Pages
npm run deploy
```

This command:
1. Builds the project (`npm run build`)
2. Deploys `dist/` folder to `gh-pages` branch using `gh-pages` package

### GitHub Pages Setup
1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `gh-pages` branch and `/ (root)` folder
4. Save settings

### Production URL
```
https://aiwerek-tech.github.io/sion-media-web
```

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and fill in your Firebase configuration:

```bash
cp .env.example .env
```

Required variables:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

### Vite Configuration
The project uses `base: '/sion-media-web/'` in `vite.config.ts` for GitHub Pages compatibility.

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── common/      # Shared components
│   ├── layout/      # Layout components (Navbar, Footer)
│   ├── sections/    # Page sections (Hero, Features, Screenshots)
│   ├── statistics/  # Stats-related components
│   └── ui/          # UI primitives (DownloadCard, AdminPanel)
├── data/            # Static data and mock data
│   ├── features.ts  # Desktop app feature descriptions
│   └── docsSections.ts # Documentation content
├── firebase/        # Firebase configuration and services
├── hooks/           # Custom React hooks
├── layouts/         # Page layout templates
├── pages/           # Page components (Home, Download, Docs, etc.)
├── router/          # Routing configuration
├── services/        # API services and utilities
│   └── updateService.ts # latest-version.json handling
├── styles/          # Global styles and CSS
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

### Related Projects
- **Desktop App**: `D:\my_dev\SION-Media` - Electron app with React/TypeScript
- **Documentation**: `D:\my_dev\SION-Media\.docs` - Comprehensive app documentation

## 🎯 Features

### Website Features
- **Landing Page**: Professional software landing page with branding
- **Authentication**: Google sign-in integration with Firebase Auth
- **Admin Panel**: Statistics management for authenticated users
- **Download Portal**: Direct installer downloads from GitHub Releases
- **Changelog**: Version history and release notes
- **Statistics**: Public analytics from Firestore with real-time updates
- **Documentation**: Quick start guides and troubleshooting
- **Update System**: `latest-version.json` metadata for desktop app updates
- **Firebase Integration**: Complete backend setup with Auth and Firestore
- **API Ready**: JSON endpoints for desktop app consumption

### Desktop App Features (SION Media)
- **Broadcast-style Workflow**: Cue → Take → Program for safe live production
- **Multi-Hymnal Library**: Support for multiple hymnals with FTS5 search (default: 525 Lagu Sion)
- **Projection Mode**: Full-screen lyric and Bible verse projection with background media
- **Stage Display**: Dedicated screen for musicians with lyrics, chords, and timer
- **Bible Module**: Integrated Bible verse lookup and slide generation
- **Playlist Management**: Drag-drop playlist builder with mixed-hymnal support
- **Import/Export**: JSON/Excel import with conflict resolution, backup/restore
- **Multi-Monitor Support**: Preview/Program monitors and stage display
- **Theme System**: Dark mode with design tokens
- **Crash Recovery**: Auto-save session state
- **Virtualized Lists**: High-performance UI for large song libraries

## 🔗 Integration Points

### Desktop App (SION Media - Electron)
- **Update Metadata**: Fetches version info from `public/latest-version.json`
- **Installer Downloads**: Links to GitHub Releases for Windows/macOS/Linux installers
- **Public Statistics**: Updates usage metrics in Firestore
- **Independent Operation**: Separate project from website, operates standalone
- **Multi-Hymnal Support**: Built on SQLite database with 525 Lagu Sion default
- **Broadcast Workflow**: Cue/Program decks for safe live worship production
- **Stage Display**: Dedicated musician screen with lyrics/chords/timer
- **Bible Integration**: Verse lookup and projection capabilities

### Release Workflow
- Keep `public/latest-version.json` synchronized with GitHub Releases
- Desktop clients compare versions and prompt for updates
- Supports mandatory updates and release notes
- Installer assets hosted on GitHub Releases

### Firebase Integration
- **Auth**: Google sign-in for admin panel access
- **Firestore**: Public statistics, user data, and analytics
- **Admin Panel**: Authenticated users can update statistics
- **Security**: Configurable read/write permissions
- **Status Monitoring**: Connection status indicator in footer

### GitHub Ecosystem
- **Pages**: Website hosting at `https://aiwerek-tech.github.io/sion-media-web`
- **Releases**: Desktop app distribution (Windows/macOS/Linux installers)
- **Repository**: Separate repos for website (`sion-media-web`) and desktop app (`SION-Media`)

## �️ SION Media Desktop App

This website serves as the official portal for **SION Media**, a professional worship presentation system built with Electron. The desktop app provides comprehensive tools for church operators to manage live worship services with broadcast-quality workflows.

### Core Capabilities
- **Broadcast-Style Production**: Cue/Program deck system for safe live switching
- **Multi-Hymnal Database**: SQLite-powered library with FTS5 search supporting multiple hymnals
- **Projection & Display**: Full-screen lyric projection, stage display for musicians, and preview monitors
- **Bible Integration**: Built-in verse lookup and slide generation
- **Playlist Management**: Drag-drop interface with mixed-hymnal support
- **Import/Export**: JSON/Excel import with conflict resolution and backup/restore
- **Multi-Monitor Setup**: Dedicated screens for preview, program, and stage display
- **Theme System**: Dark mode with consistent design tokens
- **Performance**: Virtualized lists for large song libraries, crash recovery

### Technical Stack
- **Framework**: Electron 39.2.6 with React 19.2.1 + TypeScript
- **Database**: SQLite with better-sqlite3 and WAL mode
- **Search**: FTS5 full-text search for hymnals
- **State Management**: Zustand for application state
- **Styling**: TailwindCSS with custom design tokens
- **Build**: Vite for development, Electron Builder for distribution

### Distribution
- **Platforms**: Windows (NSIS installer), macOS (DMG), Linux (AppImage)
- **Updates**: Automatic update system via `latest-version.json`
- **Repository**: `https://github.com/aiwerek-tech/SION-Media`

## �📋 Development Guidelines

### Code Quality
- Strict TypeScript configuration
- ESLint for code linting
- Modular component architecture
- Reusable and maintainable code

### Git Workflow
```bash
# For code changes
git add .
git commit -m "Your commit message"
git push origin master

# For website updates
npm run deploy
```

### Important Notes
- `.dev-docs/` folder is for local documentation only
- Never commit `.dev-docs/` to GitHub
- Environment variables are required for Firebase integration
- Use `HashRouter` for GitHub Pages compatibility
- See `FIREBASE_SETUP.md` for complete Firebase configuration guide

## 🔧 Firebase Setup

For full functionality, set up Firebase following the detailed guide:

```bash
# Read the setup guide
cat FIREBASE_SETUP.md
```

Key components:
- Firebase project creation
- Authentication configuration
- Firestore database setup
- Security rules configuration
- Environment variables setup

## 🖥️ Desktop Application

The separate Electron desktop application (`D:\my_dev\SION-Media`) integrates with this website:

- **Checks for Updates**: Fetches `public/latest-version.json` for latest version info
- **Downloads Installers**: Links to GitHub Releases for Windows, macOS, Linux
- **Reports Statistics**: Sends usage data to Firebase (managed by this website)
- **Reads Documentation**: Can pull guides and changelog from website APIs

See `DESKTOP_APP_INTEGRATION.md` for detailed integration guide.

## 🤝 Contributing

1. Follow the project structure
2. Use TypeScript strictly
3. Test builds locally before pushing
4. Update documentation in `.dev-docs/` (local only)

## 📄 License

This project is part of the SION Media ecosystem.