# Verification Agent

## Purpose

Compare before and after screenshots to identify visual regressions introduced during the Tailwind-to-Mantine migration. Generate a report of differences with severity ratings.

## Prerequisites

1. ✅ `screenshots/before/` contains baseline screenshots (from screenshot agent)
2. ✅ `screenshots/after/` contains post-migration screenshots (same structure)
3. ✅ Both directories have matching filenames

## Setup

Install comparison dependencies:

```bash
npm install -D pixelmatch pngjs
```

## Step 1 — Create comparison script

Create `e2e/compare-screenshots.ts`:

```typescript
import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const BEFORE_DIR = 'screenshots/before';
const AFTER_DIR = 'screenshots/after';
const DIFF_DIR = 'screenshots/diff';

// Tolerance: percentage of pixels that can differ before flagging
const TOLERANCE_THRESHOLD = 0.5; // 0.5% — accounts for sub-pixel rendering

interface ComparisonResult {
  file: string;
  diffPercentage: number;
  diffPixels: number;
  totalPixels: number;
  severity: 'pass' | 'minor' | 'major' | 'critical';
  status: 'matched' | 'differs' | 'missing_before' | 'missing_after' | 'size_mismatch';
}

function classifySeverity(diffPercentage: number): ComparisonResult['severity'] {
  if (diffPercentage <= TOLERANCE_THRESHOLD) return 'pass';
  if (diffPercentage <= 2) return 'minor';
  if (diffPercentage <= 10) return 'major';
  return 'critical';
}

function compareImages(beforePath: string, afterPath: string, diffPath: string): ComparisonResult {
  const beforeImg = PNG.sync.read(fs.readFileSync(beforePath));
  const afterImg = PNG.sync.read(fs.readFileSync(afterPath));

  const file = path.basename(beforePath);

  if (beforeImg.width !== afterImg.width || beforeImg.height !== afterImg.height) {
    return {
      file,
      diffPercentage: 100,
      diffPixels: 0,
      totalPixels: 0,
      severity: 'critical',
      status: 'size_mismatch',
    };
  }

  const { width, height } = beforeImg;
  const diff = new PNG({ width, height });
  const totalPixels = width * height;

  const diffPixels = pixelmatch(
    beforeImg.data,
    afterImg.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 } // Per-pixel color sensitivity
  );

  const diffPercentage = (diffPixels / totalPixels) * 100;

  // Save diff image (highlights differences in red)
  fs.mkdirSync(path.dirname(diffPath), { recursive: true });
  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  return {
    file,
    diffPercentage: Math.round(diffPercentage * 100) / 100,
    diffPixels,
    totalPixels,
    severity: classifySeverity(diffPercentage),
    status: diffPercentage <= TOLERANCE_THRESHOLD ? 'matched' : 'differs',
  };
}

function run() {
  const results: ComparisonResult[] = [];

  // Get all before screenshots
  const beforeFiles = getAllPngs(BEFORE_DIR);
  const afterFiles = new Set(getAllPngs(AFTER_DIR));

  for (const file of beforeFiles) {
    const relativePath = path.relative(BEFORE_DIR, file);
    const afterPath = path.join(AFTER_DIR, relativePath);
    const diffPath = path.join(DIFF_DIR, relativePath);

    if (!fs.existsSync(afterPath)) {
      results.push({
        file: relativePath,
        diffPercentage: 100,
        diffPixels: 0,
        totalPixels: 0,
        severity: 'critical',
        status: 'missing_after',
      });
      continue;
    }

    results.push(compareImages(file, afterPath, diffPath));
    afterFiles.delete(path.join(AFTER_DIR, relativePath));
  }

  // Report
  generateReport(results);
}

function getAllPngs(dir: string): string[] {
  const files: string[] = [];
  function walk(d: string) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const fullPath = path.join(d, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (entry.name.endsWith('.png')) files.push(fullPath);
    }
  }
  walk(dir);
  return files;
}

function generateReport(results: ComparisonResult[]) {
  const passed = results.filter(r => r.severity === 'pass');
  const minor = results.filter(r => r.severity === 'minor');
  const major = results.filter(r => r.severity === 'major');
  const critical = results.filter(r => r.severity === 'critical');

  let report = `# Visual Regression Report\n\n`;
  report += `**Date:** ${new Date().toISOString()}\n`;
  report += `**Total comparisons:** ${results.length}\n\n`;
  report += `## Summary\n\n`;
  report += `| Status | Count |\n|--------|-------|\n`;
  report += `| ✅ Pass (≤${TOLERANCE_THRESHOLD}% diff) | ${passed.length} |\n`;
  report += `| ⚠️ Minor (≤2% diff) | ${minor.length} |\n`;
  report += `| 🔶 Major (≤10% diff) | ${major.length} |\n`;
  report += `| 🔴 Critical (>10% diff) | ${critical.length} |\n\n`;

  if (critical.length > 0) {
    report += `## 🔴 Critical differences\n\n`;
    for (const r of critical) {
      report += `- **${r.file}**: ${r.status === 'size_mismatch' ? 'Size mismatch' : r.status === 'missing_after' ? 'Missing after migration' : `${r.diffPercentage}% different`}\n`;
    }
    report += '\n';
  }

  if (major.length > 0) {
    report += `## 🔶 Major differences\n\n`;
    for (const r of major) {
      report += `- **${r.file}**: ${r.diffPercentage}% different (${r.diffPixels} pixels)\n`;
    }
    report += '\n';
  }

  if (minor.length > 0) {
    report += `## ⚠️ Minor differences\n\n`;
    for (const r of minor) {
      report += `- **${r.file}**: ${r.diffPercentage}% different (${r.diffPixels} pixels)\n`;
    }
    report += '\n';
  }

  report += `## ✅ Passed\n\n`;
  for (const r of passed) {
    report += `- ${r.file}: ${r.diffPercentage}% diff\n`;
  }

  report += `\n## Next steps\n\n`;
  report += `1. Review diff images in \`screenshots/diff/\` for any flagged files\n`;
  report += `2. Critical and major differences need investigation\n`;
  report += `3. Minor differences may be acceptable (font rendering, anti-aliasing)\n`;
  report += `4. Diff images highlight changed pixels in red\n`;

  fs.writeFileSync('migration-status/visual-regression-report.md', report);
  console.log(report);
}

run();
```

## Step 2 — Run comparison

```bash
npx tsx e2e/compare-screenshots.ts
```

## Step 3 — Interpret results

### Pass (≤0.5% difference)
Sub-pixel rendering differences, font smoothing, anti-aliasing. These are expected and can be ignored.

### Minor (≤2% difference)
Likely small spacing or border differences. Review the diff image — if it's subtle and evenly distributed, it's probably fine. If concentrated in one area, investigate.

### Major (≤10% difference)
Something moved, changed size, or changed color noticeably. Open the before, after, and diff images side by side. Common causes:
- Spacing scale mismatch (Tailwind `p-4` mapped to wrong Mantine size)
- Missing hover/focus state styling
- Different default border-radius
- Font weight difference

### Critical (>10% difference)
Significant visual change. Likely causes:
- Component not properly migrated
- Layout broke (flex direction, grid columns)
- Missing responsive breakpoint
- Component not rendering at all

## Step 4 — Generate action items

For each major/critical difference, create an action item:

```markdown
### [filename.png] — Major (X% diff)

**What changed:** [describe the visible difference from the diff image]
**Likely cause:** [spacing/color/layout/missing element]
**File to fix:** src/components/[...].tsx
**Fix:** [specific Mantine prop or CSS variable adjustment needed]
```

## Running mid-migration

You can run this agent at any point during migration — not just at the end. After migrating a batch of files, take new screenshots and compare. This catches issues early before they compound.

## Important notes

- Diff images are saved in `screenshots/diff/` — red pixels indicate changes
- The 0.5% tolerance is intentionally low; increase to 1-2% if you get too many false positives from font rendering
- Size mismatches (different screenshot dimensions) always flag as critical — usually means a responsive breakpoint is wrong
- If a page looks different because it has different *data* (not styling), that's a false positive — ignore it
