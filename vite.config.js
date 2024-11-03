import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  base: './',
  mode: 'development',
  server: {
    port: 3000,
  },
  esbuild: {
    legalComments: 'none',
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        additionalData: `@use '@/css/shared.scss' as *;`,
      },
    },
  },
  build: {
    output: {
      dir: 'js',
      name: 'index.js',
    },
  },
});
