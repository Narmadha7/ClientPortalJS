import {test, expect} from '@playwright/test'
import { POManager } from '../pages/POManager'

test.only("Client App Login", async ({page}) => {


    const username = "brainandbeauty30@test.com"
    const password = "Brain@123"
    const productname = "ZARA COAT 3"
    const country = "ind"
    const countryname = " India"
    let orderid

    const pomanager = new POManager(page)

    const loginpage = pomanager.getLoginPage()
    await loginpage.goTo()
    await loginpage.createLogin(username, password)

    // dashboard objects creation

    const dahboardpage = pomanager.getDashboardPage()
    await dahboardpage.addtoCart(productname)
    await dahboardpage.clickCart()

    const cartpage = pomanager.getCartPage()
    const bool = await cartpage.verifyCart(productname)
    expect(bool).toBeTruthy()
    await cartpage.getProductLocator(productname)
    await cartpage.clickCheckout()

    const checkout = pomanager.getCheckoutPage()
    await checkout.verifyCheckout(country, countryname)
    const emailtext = await checkout.verifyEmailtxt()
    await expect(emailtext).toHaveText(username)
    await checkout.clickSubmit()

    const thankpage = pomanager.getThankPage()
    const thank_text = await thankpage.verifyText()
    await expect(thank_text).toHaveText(" Thankyou for the order. ")
    orderid = await thankpage.getOrderid()
    await thankpage.clickOrders()

    const Orderpage = pomanager.getOrderPage()
    await Orderpage.verifyOrders(orderid)
    const orderdetails = await Orderpage.verifyOrderDetails()
    expect(orderid.includes(orderdetails)).toBeTruthy()

})