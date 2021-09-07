import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['*', '.js', '.ts', '.vue', '.json']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/vars";`
      }
    }
  },
  optimizeDeps: {
    include: [
      "zen-observable",
      "fast-json-stable-stringify",
      "@vue/apollo-composable",
    ],
  },
})
