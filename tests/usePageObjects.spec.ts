import{test, expect} from '@playwright/test'
//import { NavigationPage } from '../page-objects/navigationPage'
//import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
//import { DatepickerPage } from '../page-objects/datePickerPage'
import { PageManager } from '../page-objects/pageManager'
    import {faker} from '@faker-js/faker'

test.beforeEach(async({page})=>
{
    await page.goto('/')
})

test('navigate to form page @smoke @regresssion' , async({page})=>{

    const pm = new PageManager(page)//calling once every page from PageManager class
   // const navigateTo= new NavigationPage(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()

})

test('parametrized methods @smoke',async({page})=>{

    const pm = new PageManager(page)//calling once every page from PageManager class
  //const navigateTo= new NavigationPage(page)
   //const onFormLayoutsPage = new FormLayoutsPage(page)
   //const onDatepickerPage = new DatepickerPage(page)
   const randomFullName=faker.person.fullName()// using faker lib
   const randomEmail= `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`



await pm.navigateTo().formLayoutsPage()
await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption("test@test.com","Welcome123","Option 1")
await page.screenshot({path : 'screenshots/formsLayoutPage.png'})
// to creating base64 file to send to other 
const buffer= await page.screenshot()
//console.log(buffer.toString('base64'))

await pm.onFormLayoutsPage().submitInlineFormWithEmailAndCheckBox(randomFullName, randomEmail ,false)
await page.locator('nb-card',{hasText :"Inline form"}).screenshot({path : 'screenshots/inlineForm.png'})
await pm.navigateTo().datepickerPage()
await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5)
await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6,15)
})


