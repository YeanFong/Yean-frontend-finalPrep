// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Set the development server port (default is 3000)
  },
  build: {
    outDir: 'build', // Output directory for production build
  },
});
