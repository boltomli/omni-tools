/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      fs: 'data:text/javascript,export default {}',
      path: 'data:text/javascript,export default {}',
      crypto: 'data:text/javascript,export default {}',
      '@tools': resolve(__dirname, 'src/tools'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      components: resolve(__dirname, 'src/components'),
      pages: resolve(__dirname, 'src/pages'),
      utils: resolve(__dirname, 'src/utils'),
      config: resolve(__dirname, 'src/config'),
      contexts: resolve(__dirname, 'src/contexts'),
      providers: resolve(__dirname, 'src/providers'),
      hooks: resolve(__dirname, 'src/hooks'),
      datatables: resolve(__dirname, 'src/datatables'),
      assets: resolve(__dirname, 'src/assets'),
      i18n: resolve(__dirname, 'src/i18n'),
      lib: resolve(__dirname, 'src/lib')
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
