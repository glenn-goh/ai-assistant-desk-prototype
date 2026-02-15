import type { CSSProperties } from 'react';
import type { ColorTheme, FontStyle } from '../components/PersonalizationDialog';

export interface ThemeStyles {
  sidebar: CSSProperties;
  mainBg: CSSProperties;
  header: CSSProperties;
  title: CSSProperties;
  newChatBtn: CSSProperties;
  incognitoBtn: CSSProperties;
  navItem: CSSProperties;
  separator: CSSProperties;
  chatItem: CSSProperties;
  chatItemActive: CSSProperties;
  chatItemText: CSSProperties;
  userMessage: CSSProperties;
  aiMessage: CSSProperties;
  userAvatar: CSSProperties;
  aiAvatar: CSSProperties;
  inputBorder: CSSProperties;
  sendButton: CSSProperties;
  outputPanel: CSSProperties;
  chatArea: CSSProperties;
}

export interface FontStyles {
  base: CSSProperties;
  title: CSSProperties;
  message: CSSProperties;
  input: CSSProperties;
}

export function getThemeClasses(theme: ColorTheme): ThemeStyles {
  const themes: Record<ColorTheme, ThemeStyles> = {
    dark: {
      sidebar: { backgroundColor: '#030712', borderColor: '#1f2937' },
      mainBg: { backgroundColor: '#111827' },
      header: { borderColor: '#1f2937', backgroundColor: '#030712' },
      title: { color: '#ffffff' },
      newChatBtn: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none' },
      incognitoBtn: { backgroundColor: '#374151', color: '#ffffff', border: 'none' },
      navItem: { color: '#d1d5db' },
      separator: { backgroundColor: '#1f2937' },
      chatItem: {},
      chatItemActive: { backgroundColor: 'rgba(49,46,129,0.3)' },
      chatItemText: { color: '#f3f4f6' },
      userMessage: { backgroundColor: '#2563eb', color: '#ffffff' },
      aiMessage: { backgroundColor: '#1f2937', color: '#f3f4f6' },
      userAvatar: { backgroundColor: '#2563eb' },
      aiAvatar: { backgroundColor: '#16a34a' },
      inputBorder: { border: '1px solid #374151' },
      sendButton: { backgroundColor: '#2563eb' },
      outputPanel: { backgroundColor: '#030712', border: '1px solid #1f2937' },
      chatArea: { backgroundColor: '#111827' },
    },
    light: {
      sidebar: { backgroundColor: '#ffffff', borderColor: '#e5e7eb' },
      mainBg: { backgroundColor: '#f9fafb' },
      header: { borderColor: '#e5e7eb', backgroundColor: '#ffffff' },
      title: { color: '#111827' },
      newChatBtn: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none' },
      incognitoBtn: { backgroundColor: '#4b5563', color: '#ffffff', border: 'none' },
      navItem: { color: '#374151' },
      separator: { backgroundColor: '#e5e7eb' },
      chatItem: {},
      chatItemActive: { backgroundColor: '#eef2ff' },
      chatItemText: { color: '#111827' },
      userMessage: { backgroundColor: '#2563eb', color: '#ffffff' },
      aiMessage: { backgroundColor: '#ffffff', color: '#111827', border: '1px solid #e5e7eb' },
      userAvatar: { backgroundColor: '#2563eb' },
      aiAvatar: { backgroundColor: '#16a34a' },
      inputBorder: { border: '1px solid #d1d5db' },
      sendButton: { backgroundColor: '#2563eb' },
      outputPanel: { backgroundColor: '#ffffff', border: '1px solid #e5e7eb' },
      chatArea: { backgroundColor: '#f9fafb' },
    },
    minimal: {
      sidebar: { backgroundColor: '#ffffff', borderColor: '#f3f4f6' },
      mainBg: { backgroundColor: '#ffffff' },
      header: { borderColor: '#f3f4f6', backgroundColor: '#ffffff' },
      title: { color: '#111827' },
      newChatBtn: { backgroundColor: '#111827', color: '#ffffff', border: 'none' },
      incognitoBtn: { backgroundColor: '#374151', color: '#ffffff', border: 'none' },
      navItem: { color: '#4b5563' },
      separator: { backgroundColor: '#f3f4f6' },
      chatItem: {},
      chatItemActive: { backgroundColor: '#eef2ff' },
      chatItemText: { color: '#111827' },
      userMessage: { backgroundColor: '#111827', color: '#ffffff' },
      aiMessage: { backgroundColor: '#f9fafb', color: '#111827' },
      userAvatar: { backgroundColor: '#111827' },
      aiAvatar: { backgroundColor: '#374151' },
      inputBorder: { border: '1px solid #e5e7eb' },
      sendButton: { backgroundColor: '#111827' },
      outputPanel: { backgroundColor: '#ffffff', border: '1px solid #f3f4f6' },
      chatArea: { backgroundColor: '#ffffff' },
    },
    'singapore-red': {
      sidebar: { background: 'linear-gradient(to bottom right, #fef2f2, #ffffff, #fef2f2)', borderColor: '#fecaca' },
      mainBg: { background: 'linear-gradient(to bottom right, #fef2f2, #ffffff, #fef2f2)' },
      header: { borderColor: '#fecaca', background: 'linear-gradient(to right, #fee2e2, #ffffff)' },
      title: { background: 'linear-gradient(to right, #b91c1c, #dc2626)', WebkitBackgroundClip: 'text', color: 'transparent' },
      newChatBtn: { background: 'linear-gradient(to right, #dc2626, #ef4444)', color: '#ffffff', border: 'none' },
      incognitoBtn: { background: 'linear-gradient(to right, #b91c1c, #dc2626)', color: '#ffffff', border: 'none' },
      navItem: { color: '#991b1b' },
      separator: { background: 'linear-gradient(to right, #fca5a5, #fecaca)' },
      chatItem: {},
      chatItemActive: { background: 'linear-gradient(to right, #fee2e2, #fef2f2)' },
      chatItemText: { color: '#7f1d1d' },
      userMessage: { background: 'linear-gradient(to right, #dc2626, #ef4444)', color: '#ffffff' },
      aiMessage: { backgroundColor: '#ffffff', border: '1px solid #fecaca', color: '#111827' },
      userAvatar: { background: 'linear-gradient(to bottom right, #dc2626, #ef4444)' },
      aiAvatar: { background: 'linear-gradient(to bottom right, #f87171, #fca5a5)' },
      inputBorder: { border: '2px solid #fca5a5' },
      sendButton: { background: 'linear-gradient(to right, #dc2626, #ef4444)' },
      outputPanel: { backgroundColor: '#ffffff', border: '1px solid #fecaca' },
      chatArea: { background: 'linear-gradient(to bottom right, #fef2f2, #ffffff, #fef2f2)' },
    },
    'pastel-pink': {
      sidebar: { background: 'linear-gradient(to bottom right, #fdf2f8, #fff1f2, #fce7f3)', borderColor: '#fbcfe8' },
      mainBg: { background: 'linear-gradient(to bottom right, #fdf2f8, #fff1f2, #fce7f3)' },
      header: { borderColor: '#fbcfe8', background: 'linear-gradient(to right, #fce7f3, #ffe4e6, #fce7f3)' },
      title: { background: 'linear-gradient(to right, #db2777, #e11d48, #db2777)', WebkitBackgroundClip: 'text', color: 'transparent' },
      newChatBtn: { background: 'linear-gradient(to right, #f472b6, #fb7185)', color: '#ffffff', border: 'none' },
      incognitoBtn: { background: 'linear-gradient(to right, #ec4899, #f43f5e)', color: '#ffffff', border: 'none' },
      navItem: { color: '#be185d' },
      separator: { background: 'linear-gradient(to right, #f9a8d4, #fda4af, #f9a8d4)' },
      chatItem: {},
      chatItemActive: { background: 'linear-gradient(to right, #fce7f3, #ffe4e6)' },
      chatItemText: { color: '#831843' },
      userMessage: { background: 'linear-gradient(to right, #f472b6, #fb7185)', color: '#ffffff' },
      aiMessage: { backgroundColor: '#ffffff', border: '1px solid #fbcfe8', color: '#111827' },
      userAvatar: { background: 'linear-gradient(to bottom right, #f472b6, #f43f5e)' },
      aiAvatar: { background: 'linear-gradient(to bottom right, #f9a8d4, #fda4af)' },
      inputBorder: { border: '2px solid #f9a8d4' },
      sendButton: { background: 'linear-gradient(to right, #f472b6, #fb7185)' },
      outputPanel: { backgroundColor: '#ffffff', border: '1px solid #fbcfe8' },
      chatArea: { background: 'linear-gradient(to bottom right, #fdf2f8, #fff1f2, #fce7f3)' },
    },
    'army-green': {
      sidebar: { background: 'linear-gradient(to bottom right, #14532d, #166534, #14532d)', borderColor: '#15803d' },
      mainBg: { background: 'linear-gradient(to bottom right, #14532d, #166534, #14532d)' },
      header: { borderColor: '#15803d', background: 'linear-gradient(to right, #14532d, #166534)' },
      title: { color: '#dcfce7' },
      newChatBtn: { background: 'linear-gradient(to right, #15803d, #16a34a)', color: '#ffffff', border: 'none' },
      incognitoBtn: { background: 'linear-gradient(to right, #166534, #15803d)', color: '#ffffff', border: 'none' },
      navItem: { color: '#bbf7d0' },
      separator: { backgroundColor: '#15803d' },
      chatItem: {},
      chatItemActive: { backgroundColor: '#166534' },
      chatItemText: { color: '#dcfce7' },
      userMessage: { background: 'linear-gradient(to right, #15803d, #16a34a)', color: '#ffffff' },
      aiMessage: { backgroundColor: '#052e16', border: '1px solid #166534', color: '#dcfce7' },
      userAvatar: { background: 'linear-gradient(to bottom right, #16a34a, #22c55e)' },
      aiAvatar: { background: 'linear-gradient(to bottom right, #15803d, #16a34a)' },
      inputBorder: { border: '2px solid #15803d' },
      sendButton: { background: 'linear-gradient(to right, #15803d, #16a34a)' },
      outputPanel: { backgroundColor: '#052e16', border: '1px solid #166534' },
      chatArea: { background: 'linear-gradient(to bottom right, #14532d, #166534, #14532d)' },
    },
    rainbow: {
      sidebar: { background: 'linear-gradient(to bottom right, #fee2e2, #fef9c3, #dcfce7, #dbeafe, #f3e8ff)', borderColor: '#d8b4fe' },
      mainBg: { background: 'linear-gradient(to bottom right, #fef2f2, #fefce8, #f0fdf4, #eff6ff, #faf5ff)' },
      header: { borderColor: '#d8b4fe', background: 'linear-gradient(to right, #fee2e2, #fef9c3, #dcfce7, #dbeafe, #f3e8ff)' },
      title: { background: 'linear-gradient(to right, #dc2626, #f97316, #eab308, #16a34a, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', color: 'transparent' },
      newChatBtn: { background: 'linear-gradient(to right, #ef4444, #eab308, #22c55e, #3b82f6, #a855f7)', color: '#ffffff', border: 'none' },
      incognitoBtn: { background: 'linear-gradient(to right, #a855f7, #3b82f6, #6366f1)', color: '#ffffff', border: 'none' },
      navItem: { color: '#6b21a8' },
      separator: { background: 'linear-gradient(to right, #fca5a5, #fde68a, #86efac, #93c5fd, #d8b4fe)' },
      chatItem: {},
      chatItemActive: { background: 'linear-gradient(to right, #fee2e2, #fef9c3, #f3e8ff)' },
      chatItemText: { color: '#581c87' },
      userMessage: { background: 'linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e)', color: '#ffffff' },
      aiMessage: { background: 'linear-gradient(to right, #dbeafe, #f3e8ff, #fce7f3)', border: '1px solid #e9d5ff', color: '#111827' },
      userAvatar: { background: 'linear-gradient(to bottom right, #ef4444, #f97316, #eab308)' },
      aiAvatar: { background: 'linear-gradient(to bottom right, #3b82f6, #a855f7, #ec4899)' },
      inputBorder: { border: '2px solid #d8b4fe' },
      sendButton: { background: 'linear-gradient(to right, #ef4444, #eab308, #22c55e, #3b82f6, #a855f7)' },
      outputPanel: { backgroundColor: '#ffffff', border: '1px solid #e9d5ff' },
      chatArea: { background: 'linear-gradient(to bottom right, #fef2f2, #fefce8, #f0fdf4, #eff6ff, #faf5ff)' },
    },
    'national-day': {
      sidebar: { background: 'linear-gradient(to bottom right, #dc2626, #ef4444, #ffffff)', borderColor: '#f87171' },
      mainBg: { background: 'linear-gradient(to bottom right, #ef4444, #ffffff, #ef4444)' },
      header: { borderColor: '#f87171', background: 'linear-gradient(to right, #dc2626, #ffffff, #dc2626)' },
      title: { background: 'linear-gradient(to right, #b91c1c, #eab308, #b91c1c)', WebkitBackgroundClip: 'text', color: 'transparent' },
      newChatBtn: { background: 'linear-gradient(to right, #dc2626, #facc15, #dc2626)', color: '#ffffff', border: '2px solid #facc15' },
      incognitoBtn: { background: 'linear-gradient(to right, #b91c1c, #dc2626, #b91c1c)', color: '#ffffff', border: '2px solid #ffffff' },
      navItem: { color: '#7f1d1d' },
      separator: { background: 'linear-gradient(to right, #f87171, #fde68a, #f87171)', height: 4 },
      chatItem: {},
      chatItemActive: { background: 'linear-gradient(to right, #fee2e2, #fefce8, #fee2e2)', borderLeft: '4px solid #dc2626' },
      chatItemText: { color: '#7f1d1d' },
      userMessage: { background: 'linear-gradient(to right, #dc2626, #ef4444, #dc2626)', color: '#ffffff', border: '2px solid #facc15' },
      aiMessage: { backgroundColor: '#ffffff', border: '2px solid #f87171', color: '#111827' },
      userAvatar: { background: 'linear-gradient(to bottom right, #dc2626, #eab308, #dc2626)', border: '2px solid #ffffff' },
      aiAvatar: { background: 'linear-gradient(to bottom right, #ffffff, #fecaca, #ffffff)', border: '2px solid #dc2626' },
      inputBorder: { border: '2px solid #f87171' },
      sendButton: { background: 'linear-gradient(to right, #dc2626, #facc15, #dc2626)', border: '2px solid #eab308' },
      outputPanel: { background: 'linear-gradient(to bottom right, #ffffff, #fef2f2, #ffffff)', border: '2px solid #f87171' },
      chatArea: { background: 'linear-gradient(to bottom right, #fee2e2, #ffffff, #fefce8, #fee2e2)' },
    },
  };

  return themes[theme];
}

export function getFontClasses(fontStyle: FontStyle): FontStyles {
  const fonts: Record<FontStyle, FontStyles> = {
    modern: {
      base: {},
      title: {},
      message: {},
      input: {},
    },
    seniors: {
      base: { fontSize: '18px' },
      title: { fontSize: '24px' },
      message: { fontSize: '20px' },
      input: { fontSize: '18px' },
    },
    compact: {
      base: { fontSize: '14px' },
      title: { fontSize: '16px' },
      message: { fontSize: '14px' },
      input: { fontSize: '14px' },
    },
  };

  return fonts[fontStyle];
}
