import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: colors.teal[600],
              textDecorationLine: 'none',
              textDecorationStyle: 'solid',
              textDecorationColor: 'currentcolor',
              textDecorationThickness: 'auto',
              textDecorationSkipInk: 'auto',
              textUnderlineOffset: '0.2em',
              '&:hover': {
                color: colors.teal[600],
                textDecorationLine: 'underline'
              }
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' }
          }
        }
      }
    }
  }
})
