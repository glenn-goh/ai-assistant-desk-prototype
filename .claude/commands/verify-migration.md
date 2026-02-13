# Verify Migration — Visual Regression Check

After migrating files from Tailwind to Mantine, capture new screenshots and compare with the baseline.

## Steps

### 1. Capture post-migration screenshots

```bash
SCREENSHOT_SUBDIR=after npx playwright test e2e/screenshots.spec.ts --reporter=line
```

### 2. Compare file sizes

```bash
echo "=== Before ===" && ls -la screenshots/before/ && echo "=== After ===" && ls -la screenshots/after/
```

Large differences in file size (>20%) suggest significant visual changes.

### 3. Check for remaining Tailwind classes

Scan all `.tsx` files for residual Tailwind classes:

```bash
grep -rl 'className=' src/components/ | head -20
```

For each file with `className`, verify it only contains CSS Module class references or Mantine prop values — no raw Tailwind utility classes.

### 4. Check for Tailwind dependencies

Verify Tailwind packages have been removed (or are planned for removal):

```bash
grep -E 'tailwind|@tailwindcss' package.json
```

### 5. Build verification

```bash
npm run build
```

Must succeed without errors.

### 6. Generate report

Create `migration-status/visual-regression-report.md` with:

- Date and time of comparison
- Table of screenshots: filename, before size, after size, size delta %
- List of files still containing Tailwind classes (if any)
- Build status (pass/fail)
- Overall assessment: PASS / NEEDS REVIEW / FAIL

## Screenshot reference

Screenshots are captured from: login page, home page, explore page, sidebar collapsed, search modal, personalization dialog, chat simulator, chat with artifact.

Baseline screenshots should exist in `screenshots/before/` (captured before migration started).
