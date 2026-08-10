import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Allow opening dist/index.html directly via Live Server (5500) or static server
  server: {
    port: 3000,
    host: true
  }
});
