import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Form Layouts page', () => {
    
   test.describe.configure({retries:0})
  test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
  })

  test('radio buttons', async ({ page }) => {
    const usingTheGridForm = page.locator('nb-card', { hasText: "Using the Grid" })
    await usingTheGridForm.getByLabel("Option 2").check({ force: true })
    const radioStatus = await usingTheGridForm.getByRole('radio', { name: "Option 1" }).isChecked()
      // Not using this assertions
    // expect(radioStatus).toBeTruthy()
    // await expect(usingTheGridForm.getByRole('radio',{name :"Option 1"})).toBeChecked()
    
    // using visual assertion, 1st run capture screenshot and 2nd run captures again and compares
    await expect(usingTheGridForm).toHaveScreenshot()
//we can change option 2 to click and expect Option 1 assertion to fail intentionally , so 2nd failed screenshot will be captured
//In Playwright test report browser which open , we can see both screenshots and diff


    
  }) 
}) 
