import { test, describe, expect } from '@playwright/test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('pokemon page can be navigated to', async ({ page }) => {
    await page.goto('')
    await page.getByText('ivysaur', { exact: true }).click()
    await expect(page).toHaveURL(/.*ivysaur/i)
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
