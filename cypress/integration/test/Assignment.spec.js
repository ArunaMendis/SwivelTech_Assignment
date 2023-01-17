import { HomePage } from "../page-objects/home_page";


describe('Checkout flow', () =>
{

    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })
 
        it('Verify user can access the drop down and select book', function() {
          const homePage = new HomePage();
          homePage.selectBookFromDropDown();
        })

});
