export class DashboardPage{

    constructor(page)
    {
        this.page = page
        this.products = page.locator(".card-body")
        this.cart = page.locator("[routerlink*='cart']")
        this.cartList = page.locator("div li")
    }

    async addtoCart(productname)
    {
            const count = await this.products.count()
        
            for(let i=0; i<count; i++)
            {
                if(await this.products.nth(i).locator("b").textContent() === productname)
                {
                    await this.products.nth(i).locator('text=Add To Cart').click()
                    break
                }
            }
    }

    async clickCart()
    {
        await this.cart.click()
        await this.cartList.first().waitFor()
    }
}