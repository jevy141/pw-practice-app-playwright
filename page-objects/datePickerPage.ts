import {Page,expect} from '@playwright/test'
import { HelperBase } from './helperBase'

export class DatepickerPage extends HelperBase
{
    

    constructor(page : Page){
       super(page)
    }

    async selectCommonDatePickerDateFromToday(numberOfDaysFromToday : number)
    {

     const calendarInputFiled=this. page.getByPlaceholder('Form Picker')
     await calendarInputFiled.click()
     const dateToAssert = await this.selectDateInTheCalendar(numberOfDaysFromToday)

    await expect(calendarInputFiled).toHaveValue(dateToAssert)
    
  }

async selectDatepickerWithRangeFromToday(startDayFromToday : number , endDayFromToday : number)
{
   const calendarInputFiled=this. page.getByPlaceholder('Range Picker')
   await calendarInputFiled.click()
   const dateToAssertStart= await this.selectDateInTheCalendar(startDayFromToday)
   const dateToAssertEnd = await this.selectDateInTheCalendar(endDayFromToday)
   const dateToAssert= `${dateToAssertStart} - ${dateToAssertEnd}`

       await expect(calendarInputFiled).toHaveValue(dateToAssert)
}



  private async selectDateInTheCalendar(numberOfDaysFromToday: number)
  {
      let date= new Date()
    date.setDate(date.getDate() + numberOfDaysFromToday)// adding 7 days from current date
    const expectedDate=date.getDate().toString()
    const expectedMonthShot=date.toLocaleString('En-US',{month : 'short'})
    const expectedMonthLong=date.toLocaleString('En-US',{month : 'long'})
    const expectedYear=date.getFullYear()
    //date for assertion in format Jun 1, 2026
    const dateToAssert=`${expectedMonthShot} ${expectedDate}, ${expectedYear}`
    
    let calendarMonthAndYear= await this.page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthAndYear= `${expectedMonthLong} ${expectedYear}`
    while(!calendarMonthAndYear?.includes(expectedMonthAndYear))
    {
          await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
         calendarMonthAndYear=await this.page.locator('nb-calendar-view-mode').textContent()
         }
    
         // use .day-cell not today day-cell, as + 7 day will give 8 days further
         await this.page.locator('.day-cell').getByText(expectedDate,{exact : true}).click()
       return dateToAssert
  }
}