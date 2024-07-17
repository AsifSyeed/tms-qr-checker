import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import babel from '@vitejs/plugin-babel';

export default defineConfig({
  plugins: [
    vue(),
    babel({
      babelConfig: {
        plugins: ['@babel/plugin-transform-runtime']
      }
    })
  ]
});
