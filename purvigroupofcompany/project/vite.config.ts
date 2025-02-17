import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser on server start
    port: 3000, // Specify a custom port
    hmr: {
      overlay: false, // Disable error overlay in the browser
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude 'lucide-react' from dependency pre-bundling
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
    sourcemap: true, // Enable source maps for easier debugging
  },
});
