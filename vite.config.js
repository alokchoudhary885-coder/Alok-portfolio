import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use relative base path for build (dist) and root path for dev server
  base: command === 'build' ? './' : '/',
  server: {
    port: 3000,
    host: true
  }
}));
