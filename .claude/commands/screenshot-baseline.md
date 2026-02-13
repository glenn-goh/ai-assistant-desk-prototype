# Screenshot Baseline

Capture visual regression screenshots for all major views. The screenshots are saved to `screenshots/` under a subfolder.

## Usage

Run this command with an optional argument to specify the subfolder:

- No argument → saves to `screenshots/before/`
- `after` → saves to `screenshots/after/`
- Any other value → saves to `screenshots/{value}/`

## Steps

1. Determine the subfolder from the argument: `$ARGUMENTS` (default: `before`)
2. Run the Playwright screenshot test:

```bash
SCREENSHOT_SUBDIR={subfolder} npx playwright test e2e/screenshots.spec.ts --reporter=line
```

3. List the captured screenshots:

```bash
ls -la screenshots/{subfolder}/
```

4. Report which screenshots were captured and their file sizes.

## What gets captured

The test navigates through: login page → home page → explore page → sidebar collapsed → search modal → personalization dialog → chat simulator → chat with artifact.

The walkthrough tour is automatically dismissed after login.

## Prerequisites

- `@playwright/test` installed (`npm install -D @playwright/test`)
- Chromium installed (`npx playwright install chromium`)
- Dev server running or will be auto-started by Playwright config
