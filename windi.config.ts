import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            '[class~="lead"]': 'inherit',
            strong: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
            'a code': { color: 'inherit' }
          }
        }
      }
    }
  }
})
