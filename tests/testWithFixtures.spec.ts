import {test} from '../test-options'
import {faker} from '@faker-js/faker'


//-----------Handled by test-options.ts----------------------------//
//test.beforeEach(async({page})=>
//{
 //   await page.goto('/')
//})

//  Test Fixtures (Brwoser prepares the environments , before test will run , so its faster )

test('parametrized methods',async({pageManager})=>{

   
    const randomFullName=faker.person.fullName()// using faker lib
    const randomEmail= `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`



//await pm.navigateTo().formLayoutsPage()
await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption("test@test.com","Welcome123","Option 1")
await pageManager.onFormLayoutsPage().submitInlineFormWithEmailAndCheckBox(randomFullName, randomEmail ,false)

})
