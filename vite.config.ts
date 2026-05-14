/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      fs: 'data:text/javascript,export default {}',
      path: 'data:text/javascript,export default {}',
      crypto: 'data:text/javascript,export default {}'
    }
  },
  define: {
    'process.env': {}
  },
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/*.test.{ts,tsx}']
  },
  build: {
    chunkSizeWarningLimit: 3000
  },
  worker: { format: 'es' }
});
