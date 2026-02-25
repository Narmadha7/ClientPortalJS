export class ThankPage {

    constructor(page) {
        this.page = page
        this.thank_text = page.locator(".hero-primary")
        this.orderid = page.locator(".em-spacer-1 .ng-star-inserted")
        this.my_orders = page.locator("[routerlink*='myorders']")
        this.order_page = page.locator("tbody")

    }


    async verifyText() {
        return this.thank_text
    }

    async clickOrders() {
        await this.page.waitForTimeout(3000)
        await this.my_orders.first().click()
        await this.order_page.waitFor()
    }

    async getOrderid() {
        const orderid = await this.orderid.textContent()
        return orderid
    }
}