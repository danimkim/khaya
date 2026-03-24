// src/theme/theme.ts
export const theme = {
  colors: {
    primary:       '#C8341A',
    primaryLight:  '#E8913A',
    accent:        '#1E5F6E',
    accentLight:   '#6ECFC5',
    background:    '#F2F0EB',
    surface:       '#FFFFFF',
    text:          '#1A1A1A',
    textSecondary: '#888888',
    border:        '#EEECE8',
  },
  spacing: {
    xs: 4, sm: 8, md: 12, lg: 16, xl: 24,
  },
  radius: {
    sm: 8, md: 12, lg: 20, full: 999,
  },
  typography: {
    appName:   { fontSize: 22, fontWeight: '900' as const },
    postTitle: { fontSize: 18, fontWeight: '700' as const },
    heading:   { fontSize: 16, fontWeight: '700' as const },
    body:      { fontSize: 14, lineHeight: 22 },
    caption:   { fontSize: 12 },
    badge:     { fontSize: 10, fontWeight: '700' as const, letterSpacing: 0.5 },
  },
};
