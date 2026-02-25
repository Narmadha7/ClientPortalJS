import { CartPage } from "./CartPage"
import { CheckoutPage } from "./CheckoutPage"
import { DashboardPage } from "./DashboardPage"
import { LoginPage } from "./LoginPage"
import { OrdersPage } from "./OrdersPage"
import { ThankPage } from "./ThankPage"

export class POManager {

    constructor(page) {
        this.page = page
        this.loginpage = new LoginPage(this.page)
        this.dashboardpage = new DashboardPage(this.page)
        this.cartpage = new CartPage(this.page)
        this.thankpage = new ThankPage(this.page)
        this.checkoutpage = new CheckoutPage(this.page)
        this.orderpage = new OrdersPage(this.page)
    }

    getLoginPage() {
        return this.loginpage
    }

    getDashboardPage() {
        return this.dashboardpage
    }

    getCartPage() {
        return this.cartpage
    }

    getCheckoutPage() {
        return this.checkoutpage
    }

    getThankPage() {
        return this.thankpage
    }

    getOrderPage() {
        return this.orderpage
    }

}