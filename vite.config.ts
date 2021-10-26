import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-md'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import MarkdownItAnchor from 'markdown-it-anchor'
import slugify from 'slugify'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue', 'md'],
      dts: 'src/components.d.ts',

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // custom resolvers
      resolvers: [
        // https://github.com/antfu/unplugin-icons
        IconsResolver({ prefix: false }),
      ],
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperComponent: 'post',
      wrapperClasses: 'prose',
      headEnabled: true,

      markdownItSetup(md) {
        md.use(MarkdownItAnchor, {
          slugify: (s: string) => slugify(s),
        })
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      // registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    formatting: 'minify',
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', 'pinia'],
    exclude: ['vue-demi'],
  },
})
