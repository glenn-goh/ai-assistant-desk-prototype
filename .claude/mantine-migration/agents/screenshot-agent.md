# Screenshot Agent

## Purpose

Automatically crawl the application, interact with all discoverable UI states, and capture deduplicated screenshots for visual regression comparison.

## When to run

- **Before migration**: Capture baseline screenshots into `screenshots/before/`
- **After migration**: Capture comparison screenshots into `screenshots/after/`

## Setup

Install Playwright if not already present:

```bash
npm install -D @playwright/test
npx playwright install chromium
```

## Step 1 — Discover all routes

1. Read the router configuration (e.g., `src/App.tsx`, `src/router.tsx`, or wherever routes are defined)
2. Extract all route paths, including nested routes
3. Identify any routes that require specific URL params and note them
4. Create a list of all visitable URLs

## Step 2 — Discover interactive elements

For each route/page component, scan the source code for:

- **Modals/Dialogs**: Look for state variables like `isOpen`, `opened`, `showModal` and their trigger buttons
- **Drawers/Sidebars**: Same pattern — boolean state controlling visibility
- **Dropdowns/Menus**: Click targets that reveal menus
- **Tabs**: Tab components with multiple panels
- **Accordions/Collapsibles**: Expandable sections
- **Hover states**: Cards or elements with significant hover effects
- **Form states**: Error states, validation messages
- **Empty states**: Components that show differently when data is empty
- **Loading states**: Skeleton screens or spinners

## Step 3 — Generate Playwright script

Create `e2e/screenshots.spec.ts` with the following structure:

```typescript
import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173'; // Vite default
const SCREENSHOT_DIR = process.env.SCREENSHOT_DIR || 'screenshots/before';

// Helper: screenshot a full page
async function screenshotPage(page, name: string) {
  await page.waitForLoadState('networkidle');
  // Wait for animations to settle
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `${SCREENSHOT_DIR}/${name}.png`,
    fullPage: true,
  });
}

// Helper: screenshot a specific element (for deduplication)
async function screenshotElement(page, selector: string, name: string) {
  const element = page.locator(selector).first(); // .first() for dedup
  await element.waitFor({ state: 'visible' });
  await element.screenshot({
    path: `${SCREENSHOT_DIR}/components/${name}.png`,
  });
}

// Helper: screenshot at multiple viewports
async function screenshotResponsive(page, name: string) {
  const viewports = [
    { width: 375, height: 812, label: 'mobile' },
    { width: 768, height: 1024, label: 'tablet' },
    { width: 1440, height: 900, label: 'desktop' },
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(300); // Let responsive layout settle
    await screenshotPage(page, `${name}-${vp.label}`);
  }
}

// --- ROUTE SCREENSHOTS ---
// [GENERATE ONE TEST PER ROUTE DISCOVERED IN STEP 1]

test('homepage', async ({ page }) => {
  await page.goto(BASE_URL);
  await screenshotResponsive(page, 'homepage');
});

// --- INTERACTION SCREENSHOTS ---
// [GENERATE TESTS FOR MODALS, DRAWERS, ETC. DISCOVERED IN STEP 2]

test('example-modal', async ({ page }) => {
  await page.goto(`${BASE_URL}/some-page`);
  await page.click('[data-testid="open-modal"]'); // or text selector
  await page.waitForTimeout(500); // Wait for animation
  await screenshotPage(page, 'some-page-modal-open');
});

// --- COMPONENT SCREENSHOTS (DEDUPED) ---
// [SCREENSHOT FIRST INSTANCE OF EACH REPEATED COMPONENT]

test('card-component', async ({ page }) => {
  await page.goto(BASE_URL);
  await screenshotElement(page, '[class*="card"]', 'card-component');
});
```

## Step 4 — Run

```bash
# Ensure dev server is running first
npm run dev &

# Capture baseline
SCREENSHOT_DIR=screenshots/before npx playwright test e2e/screenshots.spec.ts

# After migration, capture comparison
SCREENSHOT_DIR=screenshots/after npx playwright test e2e/screenshots.spec.ts
```

## Deduplication rules

- For repeated components (cards, list items, table rows): screenshot only the FIRST instance
- For pages with paginated content: screenshot only the first page
- Name screenshots descriptively: `{page}-{state}-{viewport}.png`
  - Example: `dashboard-modal-open-mobile.png`
  - Example: `settings-form-error-desktop.png`

## Output

```
screenshots/
├── before/
│   ├── homepage-mobile.png
│   ├── homepage-tablet.png
│   ├── homepage-desktop.png
│   ├── dashboard-desktop.png
│   ├── dashboard-modal-open-desktop.png
│   └── components/
│       ├── card-component.png
│       ├── nav-item.png
│       └── modal-dialog.png
└── after/
    └── ... (same structure)
```

## Important notes

- Always wait for `networkidle` and add a small timeout after navigation for animations
- If the app needs auth, add a setup step that logs in and saves the auth state
- If certain states require specific data, note them as "manual screenshots needed" rather than trying to mock data
- Take screenshots at 1x device scale factor for consistent comparisons
