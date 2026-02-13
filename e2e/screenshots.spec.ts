import { test } from '@playwright/test';
import path from 'path';

const SCREENSHOT_DIR = path.resolve(__dirname, '../screenshots');

/**
 * Capture visual baseline screenshots of every major view.
 *
 * Usage:
 *   npx playwright test e2e/screenshots.spec.ts
 *
 * Pass SCREENSHOT_SUBDIR env to control output folder:
 *   SCREENSHOT_SUBDIR=after npx playwright test e2e/screenshots.spec.ts
 */
const subdir = process.env.SCREENSHOT_SUBDIR || 'before';
const outDir = path.join(SCREENSHOT_DIR, subdir);

async function shot(page: import('@playwright/test').Page, name: string) {
  await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: true });
}

/** Dismiss the walkthrough tour overlay if it appears. */
async function dismissWalkthrough(page: import('@playwright/test').Page) {
  // The walkthrough has a close button (X icon) inside a fixed overlay
  const closeBtn = page.locator('.fixed.inset-0 ~ div button:has(svg.lucide-x), [role="dialog"] button:has(svg.lucide-x)').first();
  // Give it a moment to appear
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

test('capture baseline screenshots', async ({ page }) => {
  // ── Login Page ─────────────────────────────────────────────
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await shot(page, 'login-page');

  // ── Authenticate ───────────────────────────────────────────
  await page.getByRole('button', { name: /Log In with TechPass/i }).click();
  await page.waitForTimeout(500);

  // Dismiss walkthrough tour that auto-starts after login
  await dismissWalkthrough(page);
  await shot(page, 'home-page');

  // ── Explore Page ───────────────────────────────────────────
  await page.getByText('Explore Assistants', { exact: true }).click();
  await page.waitForTimeout(500);
  await shot(page, 'explore-page');

  // ── Sidebar Collapse ───────────────────────────────────────
  const collapseBtn = page.locator('button:has(svg.lucide-panel-left)').first();
  if (await collapseBtn.isVisible()) {
    await collapseBtn.click();
    await page.waitForTimeout(300);
    await shot(page, 'sidebar-collapsed');
    // Re-expand
    await collapseBtn.click();
    await page.waitForTimeout(300);
  }

  // ── Search Modal (Cmd+K) ───────────────────────────────────
  await page.keyboard.press('Meta+k');
  await page.waitForTimeout(300);
  await shot(page, 'search-modal');
  // Close modal
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);

  // ── Settings / Personalization Dialog ──────────────────────
  const settingsBtn = page.locator('[data-tour="settings"]');
  if (await settingsBtn.isVisible()) {
    await settingsBtn.click();
    await page.waitForTimeout(300);
    // Click the first "Settings" menuitem (exact match)
    const settingsMenuItem = page.getByRole('menuitem', { name: 'Settings', exact: true });
    await settingsMenuItem.click({ timeout: 3000 });
    await page.waitForTimeout(500);
    await shot(page, 'personalization-dialog');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
  }

  // ── Navigate to a demo simulation (via Recent Chats in sidebar) ──
  const simEntry = page.getByText('Marketing Software AOR').first();
  if (await simEntry.isVisible()) {
    await simEntry.click();
    await page.waitForTimeout(800);
    await shot(page, 'chat-simulator');

    // Advance simulation a few steps to see thinking + artifact
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1500);
    }
    await shot(page, 'chat-with-artifact');
  }
});
