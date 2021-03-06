# Vitesse Prettier

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/johannschopplich/vitesse-prettier)

This is a opiniated variation of [Vitesse](https://github.com/antfu/vitesse), dropping some features and cleaning the boilerplate for my use-case.

Most notable changes include:

- Lightweight ESLint configuration for TypeScript & Vue 3 `<script setup>`
- Prettier
- Overhauled demo
- <s>API auto importing</s>
- <s>Prism inside Markdown</s>
- <s>i18n</s>

## Features

- β‘οΈ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild)
- π [File-based routing](./src/pages)
- π¦ [Components auto importing](./src/components)
- π [State management via Pinia](https://pinia.esm.dev/)
- π² [PWA](https://github.com/antfu/vite-plugin-pwa)
- π¨ [UnoCSS](https://github.com/antfu/unocss) β Next generation utility-first CSS framework
- π [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)
- π [Markdown support](https://github.com/antfu/vite-plugin-md)
- π₯ Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- π¨ Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)
- π¦ Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)
- π¦Ύ TypeScript, of course
- βοΈ Deploy on Netlify with zero configuration

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) (On-demand [TailwindCSS](https://tailwindcss.com)) β lighter and faster, with a bunch of additional features!
  - [UnoCSS Preset Typography](https://github.com/ydcjeff/unocss-preset-typography/)

### Icons

- [Iconify](https://iconify.design) β Use icons from any icon sets [πIcΓ΄nes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) β Icons as Vue components

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) β File system based routing
- [Pinia](https://pinia.esm.dev) β Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) β Components auto import
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) β PWA
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) β Markdown as components / components in Markdown
- [VueUse](https://github.com/antfu/vueuse) β Collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) β Manipulate document head reactively

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

### Dev Tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) β Fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) β Server-side generation
  - [critters](https://github.com/GoogleChromeLabs/critters) β Critical CSS
- [Netlify](https://www.netlify.com/) β Zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) β Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) β Icon inline display and autocomplete

## Usage

### Development

```bash
pnpm dev
```

Afterwards, visit [localhost:3000](http://localhost:3000):

### Build

To build the app, run:

```bash
pnpm build
```

The generated files will be put into `dist`, ready to be served.

### Deploy on Netlify

Visit [Netlify](https://app.netlify.com/start) and select your clone, hit `OK` along the way, and your app will be live in a minute.

## Credits

[@antfu](https://github.com/antfu) for all of his incredible work and contributions to the community, including Vitesse of course, which this repository is forked from.

## License

[MIT](./LICENSE) License Β© 2021 [Anthony Fu](https://github.com/antfu)

[MIT](./LICENSE) License Β© 2021 [Johann Schopplich](https://github.com/johannschopplich)
