# Firebase Setup Guide

This guide will help you set up Firebase for SION Media website functionality.

## Prerequisites

- Google account
- Node.js installed
- Firebase CLI (optional, for advanced setup)

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `sion-media-web`
4. Enable Google Analytics (optional but recommended)
5. Choose your Google Analytics account
6. Click "Create project"

## Step 2: Enable Required Services

### Authentication
1. In Firebase Console, go to "Authentication" → "Get started"
2. Go to "Sign-in method" tab
3. Enable "Google" sign-in provider
4. Add your domain to authorized domains:
   - `localhost` (for development)
   - `aiwerek-tech.github.io` (for production)

### Firestore Database
1. Go to "Firestore Database" → "Create database"
2. Choose "Start in test mode" (you can configure security rules later)
3. Select a location (choose the one closest to your users)

## Step 3: Get Firebase Configuration

1. Go to "Project settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" → "Web app" (</> icon)
4. Enter app nickname: "SION Media Web"
5. **Important**: Check "Also set up Firebase Hosting" (we'll use it later)
6. Copy the configuration object - you'll need these values

## Step 4: Configure Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`)
2. Fill in the values from Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=sion-media-web.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sion-media-web
VITE_FIREBASE_STORAGE_BUCKET=sion-media-web.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> Optional: `VITE_FIREBASE_MEASUREMENT_ID` is only needed if you plan to use Firebase Analytics.

## Step 5: Set Up Firestore Security Rules

Go to "Firestore Database" → "Rules" and update with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public stats - read-only for everyone
    match /public_stats/{document} {
      allow read: if true;
      allow write: if false; // Only allow writes from server/admin
    }

    // User data - authenticated users only
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Church/organization data
    match /organizations/{orgId} {
      allow read: if true; // Public read access
      allow write: if request.auth != null && (
        request.auth.uid in get(/databases/$(database)/documents/organizations/$(orgId)).admins
      );
    }
  }
}
```

## Step 6: Initialize Public Stats

### Option A: Automatic Initialization (Recommended)

Run the initialization script:

```bash
npm run init-firestore
```

This will create the `public_stats/summary` document with default values.

> **Note**: The script reads from your `.env` file, so make sure you've completed Step 4 first.

### Option B: Manual Creation

If the script fails due to Firestore rules, create manually in the console:

1. Go to "Firestore Database" → "Data"
2. Click "Start collection"
3. Collection ID: `public_stats`
4. Document ID: `summary`
5. Add fields:
   - `totalChurches`: `number` = 0
   - `totalUsers`: `number` = 0
   - `activeOrganizations`: `number` = 0
   - `latestVersion`: `string` = "0.1.0"

## Step 7: Test the Setup

1. Run the development server: `npm run dev`
2. Navigate to `/statistics` page
3. You should see the stats loaded from Firestore
4. Try the authentication flow (if implemented)

## Firebase Hosting (Optional)

For production deployment:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize hosting: `firebase init hosting`
4. Deploy: `firebase deploy --only hosting`

## Troubleshooting

### Common Issues

1. **"Firebase auth is not configured"**
   - Check that all environment variables are set
   - Verify Firebase config values are correct

2. **"Missing or insufficient permissions"**
   - Check Firestore security rules
   - Ensure you're using the correct collection/document paths

3. **CORS errors**
   - Add your domain to authorized domains in Authentication settings

### Development vs Production

- Development: Use `localhost` and test mode
- Production: Use your actual domain and configure proper security rules

## Next Steps

Once Firebase is set up, you can:

1. Implement user authentication UI
2. Add admin panel for updating stats
3. Set up real-time data synchronization
4. Add user feedback forms
5. Implement analytics tracking