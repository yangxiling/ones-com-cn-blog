import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://ones.cn/', // Public base path for production
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        header: './src/entry/header.tsx',
        footer: './src/entry/footer.tsx'
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].[hash].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@ones-design/core/dist/index.css";`
      }
    }
  },
  optimizeDeps: {
    include: ['@ones-design/core', '@ones-design/icons']
  }
});