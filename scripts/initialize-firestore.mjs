/**
 * Initialize Firestore database with default public_stats document
 * Run this once during initial setup: node scripts/initialize-firestore.mjs
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Validate environment variables
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
];

const missingVars = requiredEnvVars.filter((v) => !process.env[v]);
if (missingVars.length > 0) {
  console.error('❌ Missing environment variables:', missingVars.join(', '));
  console.error('Please ensure your .env file is properly configured.');
  process.exit(1);
}

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

try {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Default public stats document
  const defaultStats = {
    totalChurches: 0,
    totalUsers: 0,
    activeOrganizations: 0,
    latestVersion: '0.1.0',
  };

  // Create the document
  const statsRef = doc(db, 'public_stats', 'summary');
  await setDoc(statsRef, defaultStats);

  console.log('✅ Successfully initialized public_stats/summary document');
  console.log('📊 Initial data:', defaultStats);
  process.exit(0);
} catch (error) {
  console.error('❌ Error initializing Firestore:', error.message);
  if (error.code === 'permission-denied') {
    console.error('\n⚠️  Permission denied. This typically means:');
    console.error('1. Your Firestore security rules block client writes');
    console.error('2. You need to temporarily allow writes to public_stats collection');
    console.error('\n💡 Temporary fix: Update your Firestore rules to allow this write:');
    console.error(`
    match /public_stats/{document} {
      allow read: if true;
      allow write: if request.auth != null || request.time < timestamp.date(2024, 1, 1); // Allow initial setup
    }
    `);
    console.error('\nAfter initial setup, revert to: allow write: if false;');
  }
  process.exit(1);
}
