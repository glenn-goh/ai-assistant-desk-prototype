# AI Assistant Desk Prototype

A lo-fi wireframe prototype for an AI Assistant Desk application built with React, TypeScript, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/glenn-goh/ai-assistant-desk-prototype.git
cd ai-assistant-desk-prototype
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### 4. Build for production

```bash
npm run build
```

The built files will be in the `build` directory.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icons
- **React Resizable Panels** - Resizable layout panels

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Reusable UI components (Button, Input, etc.)
│   ├── ChatSidebar.tsx
│   ├── ChatSimulatorView.tsx
│   ├── HomePage.tsx
│   ├── ExplorePage.tsx
│   ├── LibraryPage.tsx
│   └── ...
├── data/            # Mock data for chat simulations
├── lib/             # Utility functions
├── styles/          # Global CSS styles
└── App.tsx          # Main app component
```

## Design System

This prototype uses a lo-fi wireframe aesthetic with:
- 5 grayscale colors (#f5f5f5, #d4d4d4, #737373, #404040, #171717)
- Red for errors (#ef4444)
- Source Sans Pro font
- 8px border radius
- Minimal shadows

## Original Figma Design

The original design is available at: https://www.figma.com/design/gOkwlIFZzJLoRd3JF1zp8y/AI-Assistant-Desk--UXD-s-edit
