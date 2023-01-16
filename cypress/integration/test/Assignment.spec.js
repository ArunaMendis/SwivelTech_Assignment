import { HomePage } from "../page-objects/home_page";


  

describe('Checkout flow', function()
{

    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })

          describe('data Initailizing...', function()
        {
            before(function () {
              cy.fixture('product_Data').then(function (productData) 
              { 
                  this.productData = productData; 
              })
            })

        
 
        it('Verify user can access the drop down and select book', function() {
          const homePage = new HomePage();
          homePage.selectBookFromDropDown(this.productData.search, this.productData.bookName, this.productData.bookQty, this.productData.bookPrice, this.productData.totalPrice);
        })

      })

});
