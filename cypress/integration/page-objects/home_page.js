///<reference types="Cypress" />

export const HomePageSelector = {
    dropDown: '[id="searchDropdownBox"]',
    searchBox: '[id="twotabsearchtextbox"]',
    fourStar: '[id="reviewsRefinements"] li[id="p_72/1250221011"]',
   checkLanguage: '[id="p_n_feature_nine_browse-bin/3291437011"] input[type="checkbox"]',
   secondItem: '[data-index="2"] [class="a-size-medium a-color-base a-text-normal"]',
   getPrice: '[id="a-autoid-6-announce"] [class="a-size-base a-color-price a-color-price"]',
   getProductName: '[id="productTitle"]',
   selectQty: '[id="a-autoid-0"]',
   numberOfQty: '[id="quantity_1"]',
   addToCart: '[id="add-to-cart-button"]',
   goToCart: '[data-csa-c-content-id="sw-gtc_CONTENT"]',
   clearCart: '[value="Delete"]',
   subTotal: '[id="sc-subtotal-amount-activecart"]'
}

export class HomePage {
    selectBookFromDropDown(search,bookName,bookQty,bookPrice,totalPrice){
        cy.get(HomePageSelector.dropDown).select('Books', {force:true});
        cy.get(HomePageSelector.searchBox).click().type("Automation").click().type('{enter}');
        cy.get(HomePageSelector.fourStar).type('{enter}');
        cy.wait(2000);
        cy.get(HomePageSelector.checkLanguage).click({force:true});
        cy.wait(2000);

       // cy.get(HomePageSelector.secondItem);
       // const secondBook = secondItem;
       // console.log("secondItem:" + secondBook);
        cy.get(HomePageSelector.secondItem).click({force:true});
        cy.wait(2000);

     //   cy.get(HomePageSelector.getPrice);
     //   const itemPrice = getPrice;
      //  console.log("getPrice:" + itemPrice);

      //  cy.get(HomePageSelector.getProductName);
      //  const bookName = getProductName;
        //console.log("getBookName:" + bookName);

        cy.get(HomePageSelector.selectQty).click();
        cy.get(HomePageSelector.numberOfQty).click();
        cy.get(HomePageSelector.addToCart).click();
        cy.wait(2000);
        cy.get(HomePageSelector.goToCart).click();
        cy.wait(2000);

        //verification

        cy.get(HomePageSelector.clearCart).click({force:true});
        cy.wait(2000);
        cy.get(HomePageSelector.subTotal);

        //Testcase 1: verify the product name
      //  cy.should(secondBook == bookName);
       


    }
}