# AIBots V2 — Landing Page Spec

> **Purpose:** Combined copy + implementation spec for the AIBots V2 public landing page.
> Designed to plug into the existing repo. References existing Tailwind classes and basic components — does not redefine fonts, colours, or brand tokens.
>
> **Last updated:** 25 Feb 2026

---

## Table of Contents

1. [Page Overview](#1-page-overview)
2. [Global Layout](#2-global-layout)
3. [Section 1 — Navbar](#3-section-1--navbar)
4. [Section 2 — Hero](#4-section-2--hero)
5. [Section 3 — Key Features](#5-section-3--key-features)
6. [Section 4 — Built-in Tools](#6-section-4--built-in-tools)
7. [Section 5 — Footer](#7-section-5--footer)
8. [Responsive Behaviour](#8-responsive-behaviour)
9. [Copy Reference (All Text)](#9-copy-reference)

---

## 1. Page Overview

| Attribute         | Value                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| Product name      | AIBots (V2)                                                           |
| Page type         | Public landing / marketing page                                       |
| Primary CTA       | Login / Sign-up                                                       |
| Secondary goal    | Communicate key benefits of the unified workspace                     |
| Target audience   | 100K+ Singapore Public Officers                                       |
| Sections (order)  | Navbar → Hero → Key Features → Built-in Tools → Footer                |

---

## 2. Global Layout

```
Max content width  : max-w-7xl (1280px)
Horizontal padding : px-6 (mobile), px-8 (md+)
Section gap        : py-20 (80px) between sections, py-24 (96px) for hero
Background         : Use existing page background token (e.g. bg-white or bg-surface)
```

All sections are horizontally centred within the max-width container. Each section is a full-width `<section>` element with content constrained inside a `max-w-7xl mx-auto` wrapper.

---

## 3. Section 1 — Navbar

### Layout

```
Position        : sticky top-0 z-50
Height          : h-16 (64px)
Background      : bg-white with bottom border (border-b border-gray-200)
                  Optional: backdrop-blur-md bg-white/80 for glass effect
Content         : flex items-center justify-between
Padding         : px-6 md:px-8 within max-w-7xl mx-auto
```

### Structure

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]                                       [Login]   │
└─────────────────────────────────────────────────────────┘
```

### Elements

| Element    | Spec                                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| **Logo**   | Existing `<Logo />` component or `<img>` — height: `h-8` (32px). Alt text: `"AIBots"`.                |
| **Login**  | Use existing `<Button>` component, variant `primary`. Label: **"Login"**. Links to auth flow / SGID.  |

### Copy

- No text links in V2 navbar for MVP. Keep it minimal: logo + single CTA.

---

## 4. Section 2 — Hero

### Layout

```
Padding         : pt-24 pb-20 md:pt-32 md:pb-24
Text alignment  : text-center
Content width   : max-w-3xl mx-auto (for text block)
```

### Structure

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              [ Pill badge / tag — optional ]             │
│                                                         │
│              Your AI Workspace.                         │
│              One Place. Every Tool.                     │
│                                                         │
│       Stop switching between apps. AIBots brings        │
│     your tools, documents, and AI assistants into       │
│       a single workspace built for public officers.     │
│                                                         │
│                 [ Get Started ]                          │
│                                                         │
│            [ Hero visual / placeholder ]                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Elements

| Element              | Spec                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Pill badge**       | Optional. Small rounded chip above heading. `text-xs font-medium px-3 py-1 rounded-full` using accent bg/text. Label: **"V2 — Now in Beta"** |
| **Heading**          | `<h1>`. Two lines. `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight`                                   |
| **Subheading**       | `<p>`. `text-lg md:text-xl leading-relaxed` using muted text colour (e.g. `text-gray-600`). Max-width `max-w-2xl mx-auto`     |
| **CTA Button**       | Use existing `<Button>` component, variant `primary`, size `lg`. Label: **"Get Started"**. Full-width on mobile (`w-full sm:w-auto`). Links to login. |
| **Hero visual**      | Placeholder container below CTA. `mt-12 md:mt-16`. Aspect ratio `aspect-video` or fixed `h-[400px]`. Rounded `rounded-xl`. Background `bg-gray-100` with a centred label: *"Product screenshot / illustration placeholder"*. Drop shadow `shadow-lg` optional. |

### Copy

| Field       | Text                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Pill        | V2 — Now in Beta                                                                                             |
| Heading L1  | Your AI Workspace.                                                                                           |
| Heading L2  | One Place. Every Tool.                                                                                       |
| Subheading  | Stop switching between apps. AIBots brings your tools, documents, and AI assistants into a single workspace built for public officers. |
| CTA         | Get Started                                                                                                  |

---

## 5. Section 3 — Key Features

### Purpose

Communicate the three flagship capabilities that differentiate V2 from V1 (which was primarily a chatbot builder). These map directly to the product one-pager's core features: integrated toolset, adaptive memory, and canvas.

### Layout

```
Background      : bg-gray-50 (light contrast band) or existing surface-alt token
Padding         : py-20 md:py-24
```

### Structure

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│          Built for how you actually work                │
│   Everything you need in one place — no more juggling   │
│   tabs, tools, or copy-pasting between apps.            │
│                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│  │  [icon]     │ │  [icon]     │ │  [icon]     │       │
│  │  Powerful   │ │  Memory     │ │  Canvas     │       │
│  │  Tools,     │ │  That       │ │             │       │
│  │  Built In   │ │  Works      │ │             │       │
│  │             │ │  For You    │ │             │       │
│  │  body text  │ │  body text  │ │  body text  │       │
│  └─────────────┘ └─────────────┘ └─────────────┘       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section Header

| Element          | Spec                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------- |
| **Section title**| `<h2>`. `text-3xl md:text-4xl font-bold tracking-tight text-center`                       |
| **Section desc** | `<p>`. `text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto mt-4`            |

### Card Grid

```
Grid              : grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16
```

### Feature Card Component

Each card should use the existing `<Card>` if available, or the following structure:

```
Container   : bg-white rounded-2xl p-6 md:p-8
              border border-gray-200
              Optional hover: hover:shadow-md transition-shadow
Icon area   : w-12 h-12 rounded-xl flex items-center justify-center
              using accent background (e.g. bg-primary/10)
              Icon: 24px, use existing icon set or placeholder SVG
Title       : mt-5. text-xl font-semibold leading-snug
Body        : mt-3. text-base text-gray-600 leading-relaxed
```

### Card Content

| #  | Icon placeholder | Title                       | Body                                                                                                                                                     |
| -- | ---------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | `search` / `tool`| **Powerful Tools, Built In**| Search the web, chat with your documents, transcribe audio, and visualise data — all without leaving your conversation.                                  |
| 2  | `brain` / `memory`| **Memory That Works For You**| AIBots remembers your preferences and past context so you spend less time repeating yourself and more time on work that matters.                          |
| 3  | `layout` / `canvas`| **Canvas**                  | Edit, preview, and download documents side-by-side with your AI. Draft a report, refine it in Canvas, and export — all in one flow.                      |

---

## 6. Section 4 — Built-in Tools

### Purpose

A more granular, glanceable breakdown of what's included out of the box. Reinforces the "you don't need any other tool" message and highlights the breadth of the platform. Helps the "underserved 80%" see immediate, tangible value without requiring any configuration.

### Layout

```
Background      : bg-white (or default surface)
Padding         : py-20 md:py-24
```

### Structure

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│        Everything you need, nothing to configure        │
│    Start with powerful defaults. Customise when         │
│    you're ready.                                        │
│                                                         │
│  ┌──────────────────────┐  ┌──────────────────────┐     │
│  │ [icon] Web Search    │  │ [icon] File Support  │     │
│  │ short desc           │  │ short desc           │     │
│  ├──────────────────────┤  ├──────────────────────┤     │
│  │ [icon] Audio Intel   │  │ [icon] Data Viz      │     │
│  │ short desc           │  │ short desc           │     │
│  ├──────────────────────┤  ├──────────────────────┤     │
│  │ [icon] Pre-built     │  │ [icon] Secure by     │     │
│  │ Assistants           │  │ Default              │     │
│  │ short desc           │  │ short desc           │     │
│  └──────────────────────┘  └──────────────────────┘     │
│                                                         │
│                   [ Get Started ]                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section Header

Same pattern as Section 3 (centred `<h2>` + `<p>`).

### Tool Grid

```
Grid    : grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16
```

### Tool Item Component

A lighter-weight card — less visual weight than the feature cards above:

```
Container   : flex items-start gap-4 p-5 rounded-xl
              bg-gray-50 or bg-white with border border-gray-100
Icon        : w-10 h-10 rounded-lg flex items-center justify-center
              bg-primary/10 — icon 20px
Text block  : flex-1
Title       : text-base font-semibold
Desc        : text-sm text-gray-500 mt-1 leading-relaxed
```

### Tool Items Content

| #  | Icon placeholder   | Title                  | Description                                                                                      |
| -- | ------------------ | ---------------------- | ------------------------------------------------------------------------------------------------ |
| 1  | `globe`            | **Web Search**         | Get real-time information from the web, right inside your conversation.                           |
| 2  | `file-text`        | **File Support**       | Chat with PDFs, Word docs, spreadsheets, images, and more — no conversion needed.                |
| 3  | `mic`              | **Audio Intelligence** | Upload and transcribe audio recordings, then analyse and summarise them instantly.                |
| 4  | `bar-chart`        | **Data Visualisation** | Turn raw data into charts and visual summaries you can use in reports.                            |
| 5  | `users`            | **Pre-built Assistants** | Start immediately with ready-made assistants for email drafting, coding, and writing.           |
| 6  | `shield`           | **Secure by Default**  | Built for government. Your data stays within the approved boundary up to Restricted / Sensitive.  |

### Bottom CTA

```
Container   : mt-12 md:mt-16 text-center
Button      : existing <Button> component, variant primary, size lg
Label       : "Get Started"
```

---

## 7. Section 5 — Footer

### Layout

```
Background      : bg-gray-900 (or existing dark footer token)
Padding         : py-8 md:py-10
Text colour     : text-gray-400
```

### Structure

```
┌─────────────────────────────────────────────────────────┐
│  © 2025 Government of Singapore                        │
│                                                         │
│  Feedback · Privacy · Terms of Use · Report Vulnerability│
└─────────────────────────────────────────────────────────┘
```

### Elements

| Element        | Spec                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------- |
| **Copyright**  | `text-sm text-gray-400`. Text: **"© 2025 Government of Singapore"**                      |
| **Links**      | `flex flex-wrap gap-x-6 gap-y-2 text-sm`. Each link: `text-gray-400 hover:text-white transition-colors`. Links: **Feedback**, **Privacy**, **Terms of Use**, **Report Vulnerability** — all open in new tab with external link icon. |
| **Layout**     | Mobile: stacked (copyright above links). Desktop: `flex items-center justify-between`.   |

---

## 8. Responsive Behaviour

| Breakpoint | Key changes                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| **< sm**   | Single column everywhere. Hero heading `text-4xl`. CTA button full-width. Cards stack vertically. Navbar padding `px-4`. |
| **sm–md**  | Tool grid becomes 2-col. CTA button auto-width.                                                         |
| **md–lg**  | Feature cards become 3-col. Hero heading `text-5xl`. Section padding increases.                          |
| **lg+**    | Hero heading `text-6xl`. Tool grid 3-col. Max-width container kicks in.                                 |

General rules:
- All images / placeholders are `w-full` and scale with container.
- Text containers cap at readable widths (`max-w-2xl` for body copy, `max-w-3xl` for hero).
- Touch targets are minimum `44px` on mobile.

---

## 9. Copy Reference

All landing page copy in one place for easy review and translation.

### Navbar

| Key         | Copy          |
| ----------- | ------------- |
| CTA button  | Login         |

### Hero

| Key         | Copy                                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Pill badge  | V2 — Now in Beta                                                                                                      |
| Heading     | Your AI Workspace. One Place. Every Tool.                                                                             |
| Subheading  | Stop switching between apps. AIBots brings your tools, documents, and AI assistants into a single workspace built for public officers. |
| CTA         | Get Started                                                                                                           |

### Key Features

| Key              | Copy                                                                                                                          |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Section title    | Built for how you actually work                                                                                               |
| Section desc     | Everything you need in one place — no more juggling tabs, tools, or copy-pasting between apps.                                |
| Card 1 title     | Powerful Tools, Built In                                                                                                      |
| Card 1 body      | Search the web, chat with your documents, transcribe audio, and visualise data — all without leaving your conversation.       |
| Card 2 title     | Memory That Works For You                                                                                                     |
| Card 2 body      | AIBots remembers your preferences and past context so you spend less time repeating yourself and more time on work that matters.|
| Card 3 title     | Canvas                                                                                                                        |
| Card 3 body      | Edit, preview, and download documents side-by-side with your AI. Draft a report, refine it in Canvas, and export — all in one flow. |

### Built-in Tools

| Key              | Copy                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Section title    | Everything you need, nothing to configure                                                                |
| Section desc     | Start with powerful defaults. Customise when you're ready.                                               |
| Tool 1           | **Web Search** — Get real-time information from the web, right inside your conversation.                 |
| Tool 2           | **File Support** — Chat with PDFs, Word docs, spreadsheets, images, and more — no conversion needed.    |
| Tool 3           | **Audio Intelligence** — Upload and transcribe audio recordings, then analyse and summarise them instantly.|
| Tool 4           | **Data Visualisation** — Turn raw data into charts and visual summaries you can use in reports.           |
| Tool 5           | **Pre-built Assistants** — Start immediately with ready-made assistants for email drafting, coding, and writing. |
| Tool 6           | **Secure by Default** — Built for government. Your data stays within the approved boundary up to Restricted / Sensitive. |
| CTA              | Get Started                                                                                              |

### Footer

| Key         | Copy                                 |
| ----------- | ------------------------------------ |
| Copyright   | © 2025 Government of Singapore      |
| Link 1      | Feedback                             |
| Link 2      | Privacy                              |
| Link 3      | Terms of Use                         |
| Link 4      | Report Vulnerability                 |
