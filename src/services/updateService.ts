import type { LatestVersionData } from '../types'

const latestVersionUrl = new URL('latest-version.json', import.meta.env.BASE_URL).toString()

export async function fetchLatestVersion(): Promise<LatestVersionData> {
  const response = await fetch(latestVersionUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch latest version metadata')
  }

  const data = (await response.json()) as LatestVersionData
  return data
}
