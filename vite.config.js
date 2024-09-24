import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    vue(),
    babel({
      babelHelpers: 'bundled', // Ensure babel helpers are bundled
      exclude: 'node_modules/**' // Exclude node_modules
    })
  ],
  server: {
    port: 3000, // Set dev server port to 3000
  },
  preview: {
    port: 3000, // Set preview port to 3000
  }
});
