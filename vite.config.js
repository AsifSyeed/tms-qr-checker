import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteBabel } from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    vue(),
    viteBabel({
      babelConfig: {
        plugins: ['@babel/plugin-transform-runtime']
      }
    })
  ]
});
