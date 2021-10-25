import type { UserModule } from '~/types'

// https://vite-plugin-pwa.netlify.app
export const install: UserModule = ({ isClient, router }) => {
  if (!isClient) return

  router.isReady().then(async () => {
    // Only needed with `registerType: 'autoUpdate'`,
    // not for reloading prompt:
    // const { registerSW } = await import('virtual:pwa-register')
    // registerSW({ immediate: true })
  })
}
