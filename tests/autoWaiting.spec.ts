import { test, expect } from '@playwright/test';

// page is argument, first page of browser to start tests
// for every await, use async

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('http://uitestingplayground.com/ajax')
  await page.getByText('Button Triggering AJAX Request').click()
  testInfo.setTimeout(testInfo.timeout + 2000)
  //if u want use testInfo above , not necessary
})

test('auto waiting', async({page})=>{

    // on click of button text display after 15 sec how to test
     const successButton= page.locator('.bg-success')
     //await successButton.click()

     //const text=await successButton.textContent()
     //await successButton.waitFor({state:"attached"})
     //const text= await successButton.allTextContents()

     //expect(text).toContain('Data loaded with AJAX get request.')
     await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:20000})
})

test.skip('alternative waits', async({page})=>{
  const successButton= page.locator('.bg-success')
    // wait for element

    await page.waitForSelector('.bg-success')

    // wait for particular response in page, network as its API call , click on Ajax then Headers the
    //in Header copy request url

    await page.waitForResponse('http://uitestingplayground.com/ajaxdata')
    
    //wait for network to be completed 'Not Recommended'

    await page.waitForLoadState('networkidle')

      const text= await successButton.allTextContents()
          expect(text).toContain('Data loaded with AJAX get request.')



})



test.skip('timeouts', async({page})=>{

    //(in playwright.config.ts we can configure timeout in export default defineConfig timeout:10000, globalTimeout : 60000,
  //For action timeout put inside use : below trace:'on-first-retry' actionTimeout : 50000 , navigationTimeout : 50000)

//test.setTimeout(10000)----this test will fail as it takes 15 sec to display text
   //test.slow()---will help test to wait 3 times of timeout more so to pass 
     const successButton= page.locator('.bg-success')
     await successButton.click({timeout:16000})// this will overwrite config timeout 

})

