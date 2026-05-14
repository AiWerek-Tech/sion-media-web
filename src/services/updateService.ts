import type { LatestVersionData } from '../types'

const latestVersionUrl = `${import.meta.env.BASE_URL}latest-version.json`
const fallbackLatestVersion: LatestVersionData = {
  version: '1.0.0',
  releaseDate: '2026-01-01',
  mandatory: false,
  downloadUrl: 'https://github.com/AiWerek-Tech/SION-Media/releases/latest',
  notes: ['Metadata rilis tidak dapat dimuat. Buka GitHub Releases untuk mengunduh installer terbaru.'],
}

export async function fetchLatestVersion(): Promise<LatestVersionData> {
  try {
    const response = await fetch(latestVersionUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch latest version metadata: ${response.status}`)
    }

    const data = (await response.json()) as LatestVersionData
    return data
  } catch (error) {
    console.warn('Using fallback latest version metadata due to fetch failure.', error)
    return fallbackLatestVersion
  }
}
