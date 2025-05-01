import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vitePluginSass from 'vite-plugin-sass';
import { patchCssModules } from 'vite-css-modules';
import vuetify from 'vite-plugin-vuetify';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { visualizer } from 'rollup-plugin-visualizer';

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
    proxy: {
      '/api': {
        target: 'http://192.168.0.101:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
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
    rollupOptions: {
      external: [
        'gsap',
        'MotionPathPlugin',
        'gsap/MotionPathPlugin',
        'vue',
        // /node_modules/,
      ],
      // output: {
      //   globals: {
      //     vue: 'vue',
      //     gsap: 'gsap',
      //   },
      // },
      plugins: [
        visualizer({
          emitFile: true,
          filename: 'stats.html',
        }),
        nodeResolve({
          jsnext: true,
          skip: ['gsap', 'gsap/MotionPathPlugin', 'MotionPathPlugin'],
        }),
      ],
    },
  },
  optimizeDeps: {
    exclude: ['@tanstack/vue-query'],
  },
});
