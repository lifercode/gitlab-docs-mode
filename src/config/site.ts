/** URLs públicas — substituir o ID da Chrome Web Store após publicação. */
export const CHROME_WEB_STORE_LISTING_URL =
  "https://chrome.google.com/webstore/detail/gitlab-docs-mode/REPLACE_WITH_EXTENSION_ID"

export const githubRepoUrl = import.meta.env.VITE_GITHUB_REPO_URL ?? ""

export const SITE = {
  name: "GitLab Docs Mode",
  version: "0.1.0",
} as const
