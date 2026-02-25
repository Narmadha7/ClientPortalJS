export class CartPage{

    constructor(page)
    {
        this.page = page
        this.checkout = page.locator("text=Checkout")
    }

    async verifyCart(productname)
    {
        const bool = await this.getProductLocator(productname).isVisible()
        return bool
    }

    getProductLocator(productname)
    {
        return this.page.locator("h3:has-text('"+productname+"')")
    }

    async clickCheckout()
    {
        await this.checkout.click()
    }
}