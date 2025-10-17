import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './e2e-tests',
  webServer: {
    command: 'npm start',
    url: 'http://localhost:8080',
    // eslint-disable-next-line no-undef
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000 // wait up to 2 minutes for the server
  },
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:8080/'
  }
})
