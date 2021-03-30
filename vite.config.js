import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Eslint from '@rollup/plugin-eslint'
import Path from 'path'
import Components from 'vite-plugin-components'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import imagetools from 'vite-imagetools'
import SvgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    Vue(),
    Components(),
    Pages(),
    Layouts(),
    SvgLoader(),
    imagetools(),
    Eslint({
      include: '**/*.+(vue|js|jsx|ts|tsx)',
      exclude: ['node_modules/**', 'dist/**']
    }),
  ],
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, './src'),
    },
  },
})
