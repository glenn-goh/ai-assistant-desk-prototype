import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: '/ai-assistant-desk-prototype/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'figma:asset/ed3327b092c51eb4f6fab282e873ac3eb916ae69.png': path.resolve(__dirname, './src/assets/ed3327b092c51eb4f6fab282e873ac3eb916ae69.png'),
      'figma:asset/c40ed3952ce54c1b90fff90b82ba5589caf255b7.png': path.resolve(__dirname, './src/assets/c40ed3952ce54c1b90fff90b82ba5589caf255b7.png'),
      'figma:asset/4e2729d2a10d63bcdd1cf8140425fc9c5b89f532.png': path.resolve(__dirname, './src/assets/4e2729d2a10d63bcdd1cf8140425fc9c5b89f532.png'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});