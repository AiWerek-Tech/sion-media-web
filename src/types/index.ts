export type LatestVersionData = {
  version: string
  releaseDate: string
  mandatory: boolean
  downloadUrl: string
  notes: string[]
}

export type ChangelogEntry = {
  version: string
  date: string
  type: string
  notes: string[]
}

export type PublicStats = {
  totalChurches?: number
  totalUsers?: number
  activeOrganizations?: number
  latestVersion?: string
}
