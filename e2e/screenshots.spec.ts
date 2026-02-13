import { test } from '@playwright/test';
import path from 'path';

const SCREENSHOT_DIR = path.resolve(__dirname, '../screenshots');

/**
 * Capture visual baseline screenshots of key flows.
 *
 * Usage:
 *   npx playwright test e2e/screenshots.spec.ts
 *
 * Pass SCREENSHOT_SUBDIR env to control output folder:
 *   SCREENSHOT_SUBDIR=before npx playwright test e2e/screenshots.spec.ts   (pre-migration)
 *   SCREENSHOT_SUBDIR=after  npx playwright test e2e/screenshots.spec.ts   (post-migration)
 */
const subdir = process.env.SCREENSHOT_SUBDIR || 'before';
const outDir = path.join(SCREENSHOT_DIR, subdir);

async function shot(page: import('@playwright/test').Page, name: string, fullPage = false) {
  await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage });
}

/** Dismiss the walkthrough tour overlay if it appears. */
async function dismissWalkthrough(page: import('@playwright/test').Page) {
  const closeBtn = page.locator('.fixed.inset-0 ~ div button:has(svg.lucide-x), [role="dialog"] button:has(svg.lucide-x)').first();
  await page.waitForTimeout(800);
  try {
    if (await closeBtn.isVisible({ timeout: 2000 })) {
      await closeBtn.click();
      await page.waitForTimeout(300);
    }
  } catch {
    // Walkthrough not present, continue
  }
}

/** Close any open dropdown/popover by pressing Escape and clicking a neutral area. */
async function closeOverlays(page: import('@playwright/test').Page) {
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  // Click a neutral area to dismiss any remaining popovers
  await page.locator('body').click({ position: { x: 700, y: 400 }, force: true });
  await page.waitForTimeout(200);
}

test('capture baseline screenshots', async ({ page }) => {
  // ── 1. Login Page ──────────────────────────────────────────
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await shot(page, '01-login');

  // ── Authenticate & reach home page ─────────────────────────
  await page.getByRole('button', { name: /Log In with TechPass/i }).click();
  await page.waitForTimeout(500);
  await dismissWalkthrough(page);

  // ── 2. Home page — tools popover ───────────────────────────
  // Click the tools icon (SlidersHorizontal) in the message input area
  const toolsBtn = page.locator('button:has(svg.lucide-sliders-horizontal)');
  await toolsBtn.click();
  await page.waitForTimeout(500);
  await shot(page, '02-tools-popover');
  // Close the popover
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);

  // ── 3. Chat — "search for elephant" with thinking ──────────
  // Type in the home page message input and send
  const homeInput = page.locator('textarea[placeholder*="Ask me anything"]').first();
  await homeInput.fill('search for elephant');
  await homeInput.press('Enter');
  // Wait for the decision card to appear, then click "Proceed with search"
  const proceedBtn = page.getByRole('button', { name: /Proceed with search/i });
  await proceedBtn.waitFor({ state: 'visible', timeout: 15_000 });
  await proceedBtn.click();
  // Wait for the thinking response to complete
  await page.waitForTimeout(20_000);
  // Expand the thinking/reasoning accordion
  const thinkingToggle = page.locator('button[aria-expanded="false"]').first();
  if (await thinkingToggle.isVisible({ timeout: 2000 })) {
    await thinkingToggle.click();
    await page.waitForTimeout(500);
  }
  await shot(page, '03-chat-thinking');

  // ── Close any overlays before navigating ───────────────────
  await closeOverlays(page);

  // ── 4. Explore Assistants page ─────────────────────────────
  await page.getByText('Explore Assistants', { exact: true }).click();
  await page.waitForTimeout(500);
  await shot(page, '04-explore');

  // ── 5. HR Recruitment Assistant chat ───────────────────────
  // Scroll to find the HR Recruitment Assistant card and click it
  const hrHeading = page.locator('h3:has-text("HR Recruitment Assistant")');
  await hrHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await hrHeading.click();
  await page.waitForTimeout(1000);
  await shot(page, '05-hr-assistant-chat');

  // ── 6. Assistant card popover ──────────────────────────────
  // Click the subtitle that contains the assistant name (opens Popover with AssistantCard)
  const subtitleBtn = page.locator('button').filter({ hasText: 'HR Recruitment Assistant' }).filter({ has: page.locator('svg.lucide-chevron-down') });
  await subtitleBtn.click();
  await page.waitForTimeout(500);
  await shot(page, '06-hr-assistant-card');
  // Close the popover
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);

  // ── 7. HR chat — type "aa" and wait for response + canvas ──
  const chatInput = page.locator('textarea').first();
  await chatInput.fill('aa');
  await chatInput.press('Enter');
  // Wait for response and canvas panel to appear
  await page.waitForTimeout(20_000);
  await shot(page, '07-hr-chat-response');
});
