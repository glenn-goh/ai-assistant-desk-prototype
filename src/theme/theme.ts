import { createTheme, type MantineColorsTuple, rem } from '@mantine/core';

// ═══════════════════════════════════════════════════════════════
// COLOR PALETTE
// ═══════════════════════════════════════════════════════════════
//
// Lo-fi wireframe aesthetic: neutral grayscale + red for errors.
// Original 5-color palette (gray-100/300/500/700/900) expanded
// to Mantine's 10-shade tuple using Tailwind's neutral scale.
//
// Shade mapping:
//   [1] → gray-100 (#f5f5f5) — backgrounds, muted fills
//   [3] → gray-300 (#d4d4d4) — borders, dividers, light borders
//   [5] → gray-500 (#737373) — secondary text, placeholders
//   [7] → gray-700 (#404040) — body text, primary text
//   [9] → gray-900 (#171717) — headings, buttons, bold borders

const gray: MantineColorsTuple = [
  '#fafafa', // 0 — lightest (neutral-50)
  '#f5f5f5', // 1 — gray-100: backgrounds, muted, sidebar bg
  '#e5e5e5', // 2 — neutral-200
  '#d4d4d4', // 3 — gray-300: borders, dividers, input borders
  '#a3a3a3', // 4 — neutral-400
  '#737373', // 5 — gray-500: secondary text, placeholders, muted-foreground
  '#525252', // 6 — neutral-600
  '#404040', // 7 — gray-700: body text (<p>), primary readable text
  '#262626', // 8 — neutral-800
  '#171717', // 9 — gray-900: headings, buttons, bold lo-fi borders
];

const red: MantineColorsTuple = [
  '#fef2f2', // 0
  '#fee2e2', // 1
  '#fecaca', // 2
  '#fca5a5', // 3
  '#f87171', // 4
  '#ef4444', // 5 — red-500: destructive/error
  '#dc2626', // 6 — red-600: destructive hover
  '#b91c1c', // 7
  '#991b1b', // 8
  '#7f1d1d', // 9
];

// ═══════════════════════════════════════════════════════════════
// THEME DEFINITION
// ═══════════════════════════════════════════════════════════════

export const theme = createTheme({
  // ─── Primary Color ──────────────────────────────────────
  // Lo-fi default: gray-900 (#171717) as primary action color.
  // Filled buttons = near-black bg + white text.
  primaryColor: 'gray',
  primaryShade: 9,

  colors: {
    gray,
    red,
  },

  // White/black are available via:
  //   var(--mantine-color-white)  → #ffffff
  //   var(--mantine-color-black)  → #000000

  // ─── Typography ─────────────────────────────────────────
  // Font: Source Sans 3 (Google Fonts), fallback chain
  // Current CSS: --font-family: 'Source Sans 3', 'Source Sans Pro', system-ui, sans-serif
  fontFamily:
    "'Source Sans 3', 'Source Sans Pro', system-ui, -apple-system, sans-serif",
  fontFamilyMonospace:
    "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, 'Courier New', monospace",

  // Maps to --text-xs through --text-xl CSS variables
  //   xs=12px (<small>, Badge)
  //   sm=14px (<label>, <button>)
  //   md=16px (<p>, <input>, default body)
  //   lg=18px (<h4>)
  //   xl=20px (<h3>)
  // Note: text-2xl (24px), text-3xl (30px), text-4xl (36px) are covered by headings
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },

  headings: {
    fontFamily:
      "'Source Sans 3', 'Source Sans Pro', system-ui, -apple-system, sans-serif",
    sizes: {
      h1: { fontSize: rem(30), lineHeight: '1.2', fontWeight: '700' }, // --text-3xl, bold
      h2: { fontSize: rem(24), lineHeight: '1.3', fontWeight: '600' }, // --text-2xl, semibold
      h3: { fontSize: rem(20), lineHeight: '1.4', fontWeight: '600' }, // --text-xl, semibold
      h4: { fontSize: rem(18), lineHeight: '1.4', fontWeight: '600' }, // --text-lg, semibold
    },
  },

  // Default body line-height is 1.5 (--line-height).
  // Chat messages use 1.7 for readability.
  lineHeights: {
    xs: '1.2',
    sm: '1.3',
    md: '1.5', // default body (--line-height)
    lg: '1.7', // chat messages
    xl: '1.7',
  },

  // ─── Spacing ────────────────────────────────────────────
  // Tailwind uses 4px multiples. Most common spacings in the app:
  //   4px  (gap-1, p-1)       → use numeric 4 or xs
  //   8px  (gap-2, p-2)       → sm
  //   12px (gap-3, p-3)       → md
  //   16px (gap-4, p-4)       → lg
  //   24px (gap-6, p-6, px-6) → xl
  // For 6px (gap-1.5) and 20px (p-5), use numeric values.
  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(24),
  },

  // ─── Border Radius ──────────────────────────────────────
  // App default: --radius: 8px. Most elements use rounded-lg (8px).
  //   --radius-sm = 4px  (calc(8px - 4px))
  //   --radius-md = 6px  (calc(8px - 2px))
  //   --radius-lg = 8px  (the base --radius)
  //   --radius-xl = 12px (calc(8px + 4px))
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(6),
    lg: rem(8), // app default — matches rounded-lg
    xl: rem(12),
  },
  defaultRadius: 'lg', // 8px everywhere by default

  // ─── Shadows ────────────────────────────────────────────
  // Subtle shadows used sparingly in the lo-fi aesthetic
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // --shadow-sm
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)', // --shadow
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)', // --shadow-md
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  },

  // ─── Breakpoints ────────────────────────────────────────
  breakpoints: {
    xs: '36em', // 576px
    sm: '48em', // 768px
    md: '62em', // 992px
    lg: '75em', // 1200px
    xl: '88em', // 1408px
  },

  // ─── Component Defaults ─────────────────────────────────
  // Maps current Radix UI + CVA component styles to Mantine defaults.
  //
  // BUTTON (src/components/ui/button.tsx)
  //   Tailwind: rounded-lg text-sm font-semibold, h-10 px-4 py-2
  //   Variants: default→filled(gray-900), outline→outline(border-2 gray-900),
  //             secondary→light(gray-100), ghost→subtle, destructive→filled(red),
  //             link→transparent+underline
  //   Sizes: default=h-10, sm=h-8, lg=h-12, icon=h-10 w-10
  //
  // CARD (src/components/ui/card.tsx)
  //   Tailwind: rounded-lg border-2 border-gray-900 shadow-md, px-6 pt-6 pb-6
  //   Lo-fi thick black borders (border-2)
  //
  // INPUT (src/components/ui/input.tsx)
  //   Tailwind: h-10 rounded-lg border border-gray-900, text-base
  //   Focus: ring-2 ring-gray-500 ring-offset-2
  //
  // BADGE (src/components/ui/badge.tsx)
  //   Tailwind: rounded-lg px-2 py-0.5 text-xs font-medium
  //   Variants: default→filled(gray-900), secondary→light, outline, destructive
  components: {
    Button: {
      defaultProps: {
        radius: 'lg',
      },
    },
    Card: {
      defaultProps: {
        padding: 'xl',
        radius: 'lg',
        withBorder: true,
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'lg',
      },
      styles: {
        input: {
          borderColor: 'var(--mantine-color-gray-3)',
        },
      },
    },
    Textarea: {
      defaultProps: {
        radius: 'lg',
      },
      styles: {
        input: {
          borderColor: 'var(--mantine-color-gray-3)',
        },
      },
    },
    Select: {
      defaultProps: {
        radius: 'lg',
      },
      styles: {
        input: {
          borderColor: 'var(--mantine-color-gray-3)',
        },
      },
    },
    Badge: {
      defaultProps: {
        radius: 'lg',
        variant: 'filled',
      },
    },
    Modal: {
      defaultProps: {
        radius: 'xl',
        centered: true,
        padding: 'lg',
      },
      styles: {
        content: {
          border: '1px solid var(--mantine-color-gray-3)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        },
        header: {
          paddingBottom: '2px',
        },
        title: {
          fontSize: 'var(--mantine-font-size-lg)',
          fontWeight: 700,
        },
      },
    },
    Popover: {
      defaultProps: {
        radius: 'lg',
      },
      styles: {
        dropdown: {
          border: '2px solid var(--mantine-color-gray-9)',
        },
      },
    },
    Menu: {
      defaultProps: {
        radius: 'lg',
      },
      styles: {
        dropdown: {
          border: '2px solid var(--mantine-color-gray-9)',
        },
      },
    },
    Tooltip: {
      defaultProps: {
        withArrow: true,
      },
      styles: {
        tooltip: {
          fontSize: 'var(--mantine-font-size-sm)',
          padding: '6px 12px',
        },
      },
    },
    ActionIcon: {
      defaultProps: {
        radius: 'lg',
        variant: 'subtle',
        color: 'gray',
      },
    },
    Paper: {
      defaultProps: {
        radius: 'lg',
      },
    },
  },

  // ─── Other ──────────────────────────────────────────────
  cursorType: 'pointer',
  focusRing: 'auto',
  respectReducedMotion: true,
});

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS REFERENCE
// ═══════════════════════════════════════════════════════════════
//
// Global styles in src/styles/globals.css:
//   .prose-lofi   — grayscale filter + typography overrides for artifact content
//   @keyframes dotBounce — thinking indicator dots
//
// Personalization themes (src/lib/theme-utils.ts):
//   8 ColorTheme variants returning CSSProperties objects
//   3 FontStyle variants (modern, seniors, compact)

