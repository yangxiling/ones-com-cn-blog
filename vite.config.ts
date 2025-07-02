import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://ones.cn/', // Public base path for production
  build: {
    outDir: 'react-build',
    sourcemap: true,
    assetsInlineLimit: Infinity, // 所有图片都会被内联为 base64
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
  publicDir: false,
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@ones-design/core/dist/index.css";`
      }
    }
  },
  optimizeDeps: {
    include: ['@ones-design/core', '@ones-design/icons']
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
});