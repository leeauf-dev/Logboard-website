# Logboard static site

Static site for `logboard.app`.

## Routes

- `/`: presentation and SEO landing page.
- `/download`: redirects Android to Play Store and iOS to App Store.
- `/playlist/<shareSlug>`: opens `logboard://playlist/<shareSlug>` and falls back to download.

## Universal links

Before production, replace the placeholders:

- `site/.well-known/apple-app-site-association`: `TEAM_ID.com.marcosloim.logboard`
- `site/.well-known/assetlinks.json`: `TODO_ANDROID_RELEASE_SHA256`

The app is configured for `applinks:logboard.app` and Android App Links on `/playlist`.
