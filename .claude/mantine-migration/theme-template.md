# Theme File Template

> **Note:** This is a TEMPLATE for **Mantine v8**. Once the actual `tailwind.config.js` is provided, generate the real `src/theme/theme.ts` by mapping the Tailwind custom values into this structure.

## How to generate theme.ts from tailwind.config.js

1. Read `tailwind.config.js` (or `tailwind.config.ts`), or for Tailwind CSS v4, read `src/styles/globals.css` for `@theme` directives
2. Extract custom values from `theme.extend` (or `theme`), or CSS custom properties in v4
3. Map them into the Mantine `createTheme()` structure below

### Mapping rules:

| Tailwind config | Mantine theme |
|----------------|---------------|
| `theme.colors.primary` | `theme.primaryColor` + `theme.colors.primary` |
| `theme.colors.*` | `theme.colors.*` (convert to 10-shade array) |
| `theme.fontFamily.sans` | `theme.fontFamily` |
| `theme.fontFamily.mono` | `theme.fontFamilyMonospace` |
| `theme.fontSize.*` | `theme.fontSizes` |
| `theme.spacing.*` | `theme.spacing` |
| `theme.borderRadius.*` | `theme.radius` |
| `theme.screens.*` | `theme.breakpoints` |
| `theme.boxShadow.*` | `theme.shadows` |
| `theme.lineHeight.*` | `theme.lineHeights` |

## Template

```typescript
// src/theme/theme.ts
import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

// TODO: Generate color tuples from tailwind.config.js custom colors
// Each color needs exactly 10 shades (index 0-9)
// Use https://mantine.dev/colors-generator/ to expand single colors
const primaryColor: MantineColorsTuple = [
  '#e7f5ff', // 0 - lightest
  '#d0ebff', // 1
  '#a5d8ff', // 2
  '#74c0fc', // 3
  '#4dabf7', // 4
  '#339af0', // 5 - base
  '#228be6', // 6 - filled buttons default
  '#1c7ed6', // 7
  '#1971c2', // 8
  '#1864ab', // 9 - darkest
];

export const theme = createTheme({
  // === PRIMARY COLOR ===
  primaryColor: 'primary',
  primaryShade: 6,

  colors: {
    primary: primaryColor,
    // TODO: Add other custom colors from Tailwind config
  },

  // === TYPOGRAPHY ===
  // TODO: Map from tailwind.config.js theme.fontFamily
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  fontFamilyMonospace: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',

  // TODO: Map from tailwind.config.js theme.fontSize
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },

  // TODO: Map heading sizes from Tailwind text-2xl, text-3xl, text-4xl usage
  headings: {
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(36), lineHeight: '1.2' },
      h2: { fontSize: rem(30), lineHeight: '1.3' },
      h3: { fontSize: rem(24), lineHeight: '1.35' },
      h4: { fontSize: rem(20), lineHeight: '1.4' },
      h5: { fontSize: rem(18), lineHeight: '1.45' },
      h6: { fontSize: rem(16), lineHeight: '1.5' },
    },
  },

  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },

  // === SPACING ===
  // TODO: Map from tailwind.config.js theme.spacing
  // Default Tailwind: 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 8=32px
  spacing: {
    xs: rem(8),    // Tailwind p-2
    sm: rem(12),   // Tailwind p-3
    md: rem(16),   // Tailwind p-4
    lg: rem(20),   // Tailwind p-5
    xl: rem(24),   // Tailwind p-6
  },

  // === BORDERS & RADIUS ===
  // TODO: Map from tailwind.config.js theme.borderRadius
  radius: {
    xs: rem(2),    // Tailwind rounded-sm
    sm: rem(4),    // Tailwind rounded
    md: rem(8),    // Tailwind rounded-md
    lg: rem(12),   // Tailwind rounded-lg
    xl: rem(16),   // Tailwind rounded-xl
  },
  defaultRadius: 'sm',

  // === SHADOWS ===
  // TODO: Map from tailwind.config.js theme.boxShadow
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  },

  // === BREAKPOINTS ===
  // TODO: Map from tailwind.config.js theme.screens
  breakpoints: {
    xs: '36em',    // 576px (Tailwind default sm: 640px → adjust)
    sm: '48em',    // 768px (Tailwind md)
    md: '62em',    // 992px (Tailwind lg)
    lg: '75em',    // 1200px (Tailwind xl)
    xl: '88em',    // 1408px (Tailwind 2xl)
  },

  // === COMPONENT DEFAULTS ===
  // Set default props and styles for Mantine components
  components: {
    Button: {
      defaultProps: {
        // radius: 'sm',
      },
    },
    Card: {
      defaultProps: {
        // padding: 'md',
        // radius: 'sm',
        // withBorder: true,
      },
    },
    TextInput: {
      defaultProps: {
        // radius: 'sm',
      },
    },
    Modal: {
      defaultProps: {
        // radius: 'md',
        // centered: true,
      },
    },
    Container: {
      defaultProps: {
        // size: 'lg',
      },
    },
    // === Mantine v8 defaults to match v7 appearance ===
    // Switch thumb now shows a check indicator by default in v8.
    // Uncomment below to disable if you want the v7 plain thumb look:
    // Switch: {
    //   defaultProps: {
    //     withThumbIndicator: false,
    //   },
    // },
  },

  // === OTHER ===
  cursorType: 'pointer', // pointer cursor on interactive elements
  focusRing: 'auto',
  respectReducedMotion: true,
});
```

## PostCSS config needed

```javascript
// postcss.config.cjs
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
```

## App root setup needed

```tsx
// src/main.tsx (or App.tsx)
import '@mantine/core/styles.css';
// Import other Mantine package styles as needed:
// import '@mantine/notifications/styles.css';
// import '@mantine/dates/styles.css';

import { MantineProvider } from '@mantine/core';
import { theme } from './theme/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      {/* ... existing app content ... */}
    </MantineProvider>
  );
}
```
