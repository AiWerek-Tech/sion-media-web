# Desktop App Integration Guide

This website is designed as a GitHub Pages-hosted companion for the separate SION Media desktop application.
The desktop app is a standalone project and consumes the website through public metadata and Firebase services.

## 1. Update Mechanism

- The website exposes `public/latest-version.json` as the canonical update metadata endpoint.
- The desktop app should fetch this file and compare `version` with its current build version.
- If the desktop app finds a newer version, it can prompt the user to download the latest release.
- `latest-version.json` includes:
  - `version`
  - `releaseDate`
  - `mandatory`
  - `downloadUrl`
  - `notes`

## 2. Release Workflow

- Installer assets are hosted on GitHub Releases.
- The website provides the metadata endpoint for lightweight update checks without a custom backend.
- Keep `public/latest-version.json` synchronized with the GitHub Release that contains the installer packages.

## 3. API Endpoints

- `public/latest-version.json` is the main public endpoint used by the desktop app.
- The website is a static front-end and serves this JSON file directly from the `public/` folder.
- Any additional desktop-facing API endpoints should be built in the same static-first pattern or via Firebase if needed.

## 4. Statistics Integration

- This website includes Firebase Authentication and Firestore support for public statistics.
- The desktop app can send analytics or usage data into Firestore, while the website reads and displays the public stats.
- Authenticated users can manage statistics through the website admin panel.

## 5. Documentation and Guidance

- `README.md` and the website content explain how the desktop app should consume the website.
- Use `latest-version.json` for update checks and GitHub Releases for installer downloads.
- The website itself is not the desktop app; it is a static host + integration layer.

## 6. Key Files

- `public/latest-version.json`
- `src/services/updateService.ts`
- `src/pages/DownloadPage.tsx`
- `src/components/sections/FaqSection.tsx`
- `src/data/docsSections.ts`
- `README.md`
