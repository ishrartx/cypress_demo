
describe("Locators", () => {
  it("Css Selectors", () => {
    cy.visit("http://automationpractice.pl/index.php");
    cy.title().should('eq','My Shop');

    //Id locator
    cy.get("#search_query_top").type("T-Shirt");

    //attribute locator
    cy.get('[name="submit_search"]').click();

    //class locator
    cy.get(".lighter").contains("T-Shirt")

   
    
  });

  it("Xpath Selectors", () => {
    cy.visit("http://automationpractice.pl/index.php");
    cy.title().should('eq','My Shop');
    cy.xpath("//a[text()='Women']").click();
    cy.xpath("//ul[@class='product_list grid row']/li").should('have.length','7')
   
    
  });
});
