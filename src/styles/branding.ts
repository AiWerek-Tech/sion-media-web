// App branding constants
export const BRAND = {
  name: 'SION Media',
  tagline: 'Modern worship media management',
  colors: {
    primary: '#0ea5e9',    // cyan-500 - main brand color
    primaryLight: '#7dd3fc', // cyan-300 - lighter variant
    primaryDark: '#0284c7',  // cyan-600 - darker variant
    secondary: '#7dd3fc',  // cyan-300 - secondary accent
    accent: '#0f172a',     // slate-950 - dark accent
    background: '#020617', // slate-950 - main background
    surface: '#0f172a',    // slate-900 - card/surface background
    surfaceLight: '#1e293b', // slate-800 - lighter surface
    text: '#e2e8f0',       // slate-100 - primary text
    textSecondary: '#94a3b8', // slate-400 - secondary text
    textMuted: '#64748b',   // slate-500 - muted text
    border: '#334155',     // slate-700 - borders
    borderLight: '#475569', // slate-600 - light borders
    success: '#10b981',    // emerald-500
    warning: '#f59e0b',    // amber-500
    error: '#ef4444',      // red-500
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.625',
    },
  },
  spacing: {
    xs: '0.25rem',       // 4px
    sm: '0.5rem',        // 8px
    md: '1rem',          // 16px
    lg: '1.5rem',        // 24px
    xl: '2rem',          // 32px
    '2xl': '3rem',       // 48px
    '3xl': '4rem',       // 64px
    '4xl': '6rem',       // 96px
    '5xl': '8rem',       // 128px
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',       // 4px
    md: '0.375rem',      // 6px
    lg: '0.5rem',        // 8px
    xl: '0.75rem',       // 12px
    '2xl': '1rem',       // 16px
    '3xl': '1.5rem',     // 24px
    full: '9999px',
  },
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      linear: 'linear',
      in: 'ease-in',
      out: 'ease-out',
      inOut: 'ease-in-out',
    },
  },
}