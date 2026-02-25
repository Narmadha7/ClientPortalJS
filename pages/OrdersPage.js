export class OrdersPage {

    constructor(page) {
        this.page = page
        this.table_row = page.locator("tbody tr")
        this.order_details = page.locator(".col-text")
    }


    async verifyOrders(orderid) {
        const tablerow = this.table_row
        const rowcount = await tablerow.count()

        for (let i = 0; i < rowcount; i++) {
            const rowOrderid = await tablerow.nth(i).locator("th").textContent()
            if (orderid.includes(rowOrderid)) {
                await tablerow.nth(i).locator(".btn-primary").click()
                break
            }
        }
    }

    async verifyOrderDetails() {
        const orderDetails = await this.order_details.textContent()
        return orderDetails
    }
}