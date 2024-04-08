describe("Dynamic dropdown", () => {
  it("Handling dynamic dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/dropdownsPractise/");
    cy.get("#ctl00_mainContent_ddl_originStation1_CTXT").click();
    cy.xpath('//a[text()=" Ahmedabad (AMD)"]').click();
    cy.get('#ctl00_mainContent_ddl_destinationStation1_CTXT').click()
     cy.xpath('//div[@id="ctl00_mainContent_ddl_destinationStation1_CTNR"]//a[text()=" Hyderabad (HYD)"]').click();
     cy.xpath('//div[@id="ctl00_mainContent_ddl_destinationStation1_CTNR"]//a[text()=" Hyderabad (HYD)"]').should('have.text',' Hyderabad (HYD)')
  });

  it("Handling Auto suggestions dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/dropdownsPractise/");
    cy.get("#autosuggest").type("Ind");
   //getting all the options
   cy.xpath('//a[@class="ui-corner-all"]').each(($el, index, $list) => {
    // match the optins 
    cy.log(`Option ${index + 1}: ${$el.text()} })`);
     if($el.text()=='India'){
          cy.wrap($el).click()
     }

    //  cy.get("#autosuggest").should('have.value',"India")
  });
     
  
  });
});
