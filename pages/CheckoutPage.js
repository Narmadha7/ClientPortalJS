export class CheckoutPage{

    constructor(page)
    {
        this.page = page
        this.country = page.locator("[placeholder*='Country']")
        this.allcountry = page.locator(".ta-results")
        this.submit = page.locator(".action__submit")
        this.email_text = page.locator(".user__name [type='text']").first()
    }


    async verifyCheckout(country, countryname)
    {
        await this.country.pressSequentially(country)
        
        const options = this.allcountry
        await options.waitFor()
        const count1 = await options.locator("button").count()
        
        for(let i=0; i<count1; i++)
        {
            const text = await options.locator("button").nth(i).textContent()
            if(text === countryname)
            {
                await options.locator("button").nth(i).click()
                break
            }
        }
  
    }

    async verifyEmailtxt()
    {
        return this.email_text
    }

    async clickSubmit()
    {
        await this.submit.click()
    }
}