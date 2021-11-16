import type { UserModule } from '~/types'

// https://vite-plugin-pwa.netlify.app
// Only needed with `registerType: 'autoUpdate'`,
// not for reloading prompt
export const __deactivated_install: UserModule = ({ isClient, router }) => {
  if (!isClient) return

  router.isReady().then(async () => {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({ immediate: true })
  })
}
