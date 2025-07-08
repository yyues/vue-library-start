import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const externals = ['vue'];

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'x-library',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...externals],
      output: [
        {
          format: 'umd',
          dir: 'dist',
          inlineDynamicImports: true,
          exports: 'named',
          name: 'x-library',
          entryFileNames: '[name].umd.js',
          globals: { vue: 'Vue' },
          assetFileNames: 'style.css',
        },
        {
          format: 'es',
          dir: 'dist',
          inlineDynamicImports: true,
          exports: 'named',
          entryFileNames: '[name].esm.js',
          globals: { vue: 'Vue' },
          assetFileNames: 'style.css',
        },
      ],
    },
    outDir: 'dist',
    cssCodeSplit: false,
  },
  resolve: {
    dedupe: ['vue'],
  },
  optimizeDeps: {
    include: [...externals],
  },
});
