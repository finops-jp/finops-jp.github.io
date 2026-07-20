# Visual Regression Testing Rules

## Overview
These rules ensure that code changes do not unintentionally alter the visual appearance of the application. They apply to Code Generation and Build and Test stages.

**Enforcement**: When enabled, visual regression testing is a blocking constraint. Visual differences exceeding the configured threshold are blocking findings.

---

## Rule VISUAL-01: Playwright Configuration Required

**Rule**: The project MUST have Playwright configured for visual regression testing:
- `@playwright/test` MUST be listed in devDependencies
- `playwright.config.ts` MUST exist with `webServer` configuration for local serving
- A test script MUST be defined in package.json (e.g., `"test:visual": "npx playwright test"`)

**Verification**:
- `@playwright/test` exists in package.json devDependencies
- `playwright.config.ts` exists and includes webServer configuration
- package.json contains a script for running visual tests

---

## Rule VISUAL-02: Baseline Capture Before Changes

**Rule**: Before any code modification (Code Generation stage), baseline screenshots MUST be captured from the current working state:
- Build the project in its current state (`npm run build`)
- Run Playwright tests with `--update-snapshots` flag to capture baselines
- Baseline screenshots MUST be stored in a version-controlled directory

**Verification**:
- Baseline screenshots exist in the configured snapshot directory
- Baselines represent the pre-change state of the application
- Baselines are committed to version control (or stored as test artifacts)

---

## Rule VISUAL-03: Comparison After Changes

**Rule**: After code modifications are complete, visual regression tests MUST be executed:
- Run the same Playwright visual tests without `--update-snapshots`
- Playwright compares current screenshots against stored baselines
- Any pixel difference exceeding the configured threshold (default: maxDiffPixels: 100) is a failure

**Verification**:
- Visual regression tests execute successfully after changes
- No unexpected visual differences exceed the threshold
- If differences are intentional, baselines MUST be updated explicitly with justification documented

---

## Rule VISUAL-04: Key Pages Coverage

**Rule**: Visual regression tests MUST cover at minimum:
- The top/landing page
- At least one documentation page
- At least one blog post page (if blog exists)
- Navigation elements (header, sidebar, footer)

**Verification**:
- Test file includes assertions for all required page types
- Each assertion uses `toHaveScreenshot()` or equivalent visual comparison

---

## Blocking Finding Behavior

A **blocking visual regression finding** means:
1. The finding MUST be listed in the stage completion message under a "Visual Regression Findings" section
2. The stage MUST NOT present the "Continue to Next Stage" option until resolved
3. Resolution options:
   - Fix the code change that caused the visual difference
   - Update baselines if the difference is intentional (document justification in audit.md)

---

## Integration with AI-DLC Stages

### Code Generation Stage
- **Before generating code**: Execute baseline capture (VISUAL-02)
- **After generating code**: Execute comparison (VISUAL-03)

### Build and Test Stage
- Include visual regression test results in build-and-test-summary.md
- Report pass/fail status for visual comparison
