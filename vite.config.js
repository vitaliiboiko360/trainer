import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vitePluginSass from 'vite-plugin-sass';
import { patchCssModules } from 'vite-css-modules';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  base: './',
  mode: 'development',
  appType: 'spa',
  server: {
    host: '0.0.0.0',
    port: 3000,
    fs: {
      allow: ['./data/', './data/tr', './', './data/hm'],
      deny: ['./node_modules'],
    },
  },
  esbuild: {
    legalComments: 'none',
  },
  resolve: {
    alias: [
      { find: 'css', replacement: path.resolve(__dirname, 'css') },
      { find: 'data', replacement: path.resolve(__dirname, 'data') },
      { find: 'data/tr', replacement: path.resolve(__dirname, 'data/tr') },
      { find: 'data/hm', replacement: path.relative(__dirname, 'data/hm') },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    patchCssModules(),
    vitePluginSass(),
    vue(),
    vuetify({ autoImport: true }),
  ],
  css: {
    modules: {
      generateScopedName: '[hash]',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use './css/shared.scss' as *;`,
      },
    },
  },
  build: {
    output: {
      dir: 'js',
      name: 'index.js',
    },
  },
  optimizeDeps: {
    exclude: ['@tanstack/vue-query'],
  },
});
