# SION Media Website

Official website for SION Media desktop application. Built with Vite + React + TypeScript, deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development
```bash
# Clone repository
git clone https://github.com/AiWerek-Tech/sion-media-web.git
cd sion-media-web

# Install dependencies
npm install

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
│   ├── sections/    # Page sections
│   ├── statistics/  # Stats-related components
│   └── ui/          # UI primitives
├── data/            # Static data and mock data
├── firebase/        # Firebase configuration and services
├── hooks/           # Custom React hooks
├── layouts/         # Page layout templates
├── pages/           # Page components
├── router/          # Routing configuration
├── services/        # API services and utilities
├── styles/          # Global styles and CSS
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## 🎯 Features

- **Landing Page**: Professional software landing page
- **Download Portal**: Direct installer downloads from GitHub Releases
- **Changelog**: Version history and release notes
- **Statistics**: Public analytics from Firestore
- **Documentation**: Quick start guides and troubleshooting
- **Update System**: `latest-version.json` for desktop app updates

## 🔗 Integration Points

### Desktop App (Electron)
- Fetches update metadata from `public/latest-version.json`
- Downloads installers from GitHub Releases
- Updates public statistics in Firestore

### Firebase
- **Auth**: User authentication (desktop app)
- **Firestore**: Public statistics and analytics
- **Security**: Read-only access for website

### GitHub
- **Pages**: Website hosting
- **Releases**: Desktop app distribution

## 📋 Development Guidelines

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

## 🤝 Contributing

1. Follow the project structure
2. Use TypeScript strictly
3. Test builds locally before pushing
4. Update documentation in `.dev-docs/` (local only)

## 📄 License

This project is part of the SION Media ecosystem.