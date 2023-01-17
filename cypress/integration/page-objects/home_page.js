///<reference types="Cypress" />

export const HomePageSelector = {
  dropDown: '[id="searchDropdownBox"]',
  searchBox: '[id="twotabsearchtextbox"]',
  fourStar: '[id="reviewsRefinements"] li[id="p_72/1250221011"]',
 checkLanguage: '[id="p_n_feature_nine_browse-bin/3291437011"] input[type="checkbox"]',
 secondItem: '[data-index="2"] [class="a-size-medium a-color-base a-text-normal"]',
 getPrice: '[class="a-size-base a-color-price a-color-price"]',
 getProductName: '[id="productTitle"]',
 selectQty: '[id="a-autoid-0"]',
 numberOfQty: '[id="quantity_1"]',
 addToCart: '[id="add-to-cart-button"]',
 goToCart: '[data-csa-c-content-id="sw-gtc_CONTENT"]',
 findSubTotal: '[class="a-price sw-subtotal-amount"] [class="a-offscreen"]',
 clearCart: '[value="Delete"]',
 subTotal: '[id="sc-subtotal-amount-activecart"]',
 bookTitle: '[class="a-truncate sc-grid-item-product-title a-size-base-plus"]',
 bookPrice: '[class="sc-item-price-block"]',
 bookCount: '[class="a-dropdown-prompt"]'
}

export class HomePage {

  selectBookFromDropDown(){
      cy.get(HomePageSelector.dropDown).select('Books', {force:true});
      cy.get(HomePageSelector.searchBox).click().type("Automation").click().type('{enter}');
      cy.get(HomePageSelector.fourStar).type('{enter}');
      cy.wait(2000);
      cy.get(HomePageSelector.checkLanguage).click({force:true});
      cy.wait(2000);

      cy.get(HomePageSelector.secondItem).invoke('text').then((name) => {
         cy.wrap(name).as('bookTextName')
      });

      cy.get(HomePageSelector.secondItem).click({force:true});
      cy.wait(2000);
      
      cy.get('@bookTextName').then(abcBookName => {
        cy.get(HomePageSelector.getProductName).invoke('text').then(expectname => {
          expect(abcBookName).to.eql(expectname.trim());
        })
      })

      cy.get(HomePageSelector.getPrice).invoke('text').then((price) => {
        cy.wrap(price).as('bookTextPrice')
      });

      cy.get(HomePageSelector.selectQty).click();

      cy.get(HomePageSelector.numberOfQty).invoke('text').then((qty) => {
        cy.wrap(qty).as('bookTextQty')
      });


      cy.get(HomePageSelector.numberOfQty).click();
      cy.get(HomePageSelector.addToCart).click();
      cy.wait(2000);

      cy.get(HomePageSelector.findSubTotal).invoke('text').then((subtotal) => {
        cy.wrap(subtotal).as('bookTextSubtotal')
      });

      cy.get(HomePageSelector.goToCart).click();
      cy.wait(2000);

      cy.get(HomePageSelector.bookTitle).invoke('text').then((title) => {
        cy.wrap(title).as('bookTextTitle')
       });

       console.log('@bookTextTitle');

    //  cy.get('@bookTextName').then(abcBookName => {
    //   cy.get(HomePageSelector.bookTitle).invoke('text').then(expectBookTitle => {
    //     expect(abcBookName.replace(/^\s+|\s+$/gm,'').trim()).to.eql(expectBookTitle.replace(/^\s+|\s+$/gm,'').trim());
    //   })
    // })

    cy.get('@bookTextPrice').then(abcBookPrice => {
      cy.get(HomePageSelector.bookPrice).invoke('text').then(expectBookPrice => {
        expect(abcBookPrice.trim()).to.eql(expectBookPrice.trim());
      })
    })

    cy.get('@bookTextQty').then(abcBookQty => {
      cy.get(HomePageSelector.bookCount).invoke('text').then(expectBookCount => {
        expect(abcBookQty.trim()).to.eql(expectBookCount.trim());
      })
    })
    
      cy.get(HomePageSelector.clearCart).click({force:true});
      cy.wait(2000);

      cy.get(HomePageSelector.subTotal).invoke('text').then((zero) => {
        cy.wrap(zero).as('bookTextAmount')
      });

      cy.get('@bookTextAmount').then(abcBookAmount => {
          const finalSubTotal = "$0.00";
          expect(abcBookAmount.trim()).to.eql(finalSubTotal);
        })

  }
}