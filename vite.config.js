import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-custom-tree/',
  build: {
    outDir: 'dist-demo',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});

