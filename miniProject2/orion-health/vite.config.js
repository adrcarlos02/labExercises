import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allows for cleaner imports, use "@" for src directory
      '@': '/src',
    },
  },
  server: {
    port: 3000, // Change to your preferred port
    open: true, // Automatically open the app in your browser
  },
});