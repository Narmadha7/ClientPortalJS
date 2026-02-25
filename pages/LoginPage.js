export class LoginPage{

    constructor(page){
        this.page = page
        this.username = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.submit = page.locator("#login")
        this.productTitle = page.locator(".card-body b")
    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    }

    async createLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.submit.click()
        console.log(await this.productTitle.first().textContent())
        console.log(await this.productTitle.allInnerTexts())
    }
}