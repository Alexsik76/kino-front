import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueRouter from 'unplugin-vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
})
