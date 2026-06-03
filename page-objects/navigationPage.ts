import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase{

   
    constructor (page : Page){
        super(page)  //as extends no need of this keyword here

    }

    // create  a method
    async formLayoutsPage(){
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form Layout').click()
        await this.waitForNumberOfSeconds(2)
    }

    async datepickerPage(){
          await this.selectGroupMenuItem('Forms')
          await this.page.getByText('Datepicker').click()
    }

    async smartTablePage(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }

    async toastrPage(){

        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }

    async tooltipPage(){
          await this.selectGroupMenuItem('Modal & Overlays')
         await this.page.getByText('Tooltip').click()
    }

    // creating method as Forms is already clicked above
    private async selectGroupMenuItem(groupItemTitle : string){
        const groupMenuItem= this.page.getByTitle(groupItemTitle)
        const expandedState= await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState =='false')
        {
            await groupMenuItem.click()

        }
    }
}




// or initilaize locator inside constructor using readonly before 


/*import { Locator, Page } from "@playwright/test";

export class NavigationPage{

    readonly page : Page
    readonly fromLayoutMenuItem : Locator
    readonly datePickerMenuItem : Locator
    readonly smartTableMenuItem : Locator
    readonly toastrMenuIten : Locator
    readonly tooltipMenuItem : Locator


    constructor (page : Page){
        this.page=page
        this.fromLayoutMenuItem = page.getByText('Form Layout')
        this.datePickerMenuItem= page.getByText('Datepicker')
        this.smartTableMenuItem=page.getByText('Smart Table')
        this.toastrMenuIten=page.getByText('Toastr')
        this.tooltipMenuItem=page.getByText('Tooltip')
    }

    // create  a method
    async formLayoutsPage(){
        await this.selectGroupMenuItem('Forms')
        this.fromLayoutMenuItem.click()
    }

    async datepickerPage(){
          await this.selectGroupMenuItem('Forms')
         this.datePickerMenuItem.click()
    }

    async smartTablePage(){
        await this.selectGroupMenuItem('Tables & Data')
       this.smartTableMenuItem.click()
    }

    async toastrPage(){

        await this.selectGroupMenuItem('Modal & Overlays')
        this.toastrMenuIten.click()
    }

    async tooltipPage(){
          await this.selectGroupMenuItem('Modal & Overlays')
         this.tooltipMenuItem.click()
    }

    // creating method as Forms is already clicked above
    private async selectGroupMenuItem(groupItemTitle : string){
        const groupMenuItem= this.page.getByTitle(groupItemTitle)
        const expandedState= await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState =='false')
        {
            await groupMenuItem.click()

        }
    }
    

}*/