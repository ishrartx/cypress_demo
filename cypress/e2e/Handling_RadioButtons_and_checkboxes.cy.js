describe("Handling Radio buttons and checkboxes", () => {
  it("Handling Radio buttons ", () => {
    cy.visit("https://testautomationpractice.blogspot.com/", {
      timeout: 30000,
    });

    cy.get("#male").should("be.visible");
    cy.get("#female").should("be.visible");

    //click the checkbox
    cy.get("#male").check();
    cy.get("#male").should("be.checked");

    cy.get("#female").should("not.be.checked");

    cy.get("#female").check();
    cy.get("#female").should("be.checked");

    cy.get("#male").should("not.be.checked");
  });

  it("Hadling checkboxes", () => {
    cy.visit("https://testautomationpractice.blogspot.com/", {
      timeout: 30000,
    });

    var length;
    //count no of checkboxes
    cy.xpath('//div[@class="form-group"]//input[@type="checkbox"]').then(
      (checkbox) => {
        length = checkbox.length;
        cy.log(
          "The total no of checkboxes are present in form group: " + length
        );
      }
    );

    //click on the checkbox
    cy.log("selecting the sinlge checkbox")
    cy.xpath("//div[@class='form-group']//input[@type='checkbox' and @id='sunday']").check()

    cy.wait(10000);
   

    cy.log("uncheck the ckeckbox if any checkbox is checked")
     cy.get('input[type="checkbox"]').each(($checkbox) => {
    // If the checkbox is checked, click it to uncheck
    if ($checkbox.is(':checked')) {
      cy.wrap($checkbox).uncheck();
    }
  });

  cy.log("Verify all checkboxes are initially unchecked")
// Verify all checkboxes are initially unchecked
cy.xpath('//div[@class="form-group"]//input[@type="checkbox"]',{force: true}).each(($el) => {
    cy.wrap($el).should('not.be.checked');
  });
  
  cy.log("Check all checkboxes")
  // Check all checkboxes
  cy.xpath('//div[@class="form-group"]//input[@type="checkbox"]',{force: true}).check();
  
  cy.log("verify all checkboxes are now checked")
  // Optionally, verify all checkboxes are now checked
  cy.xpath('//div[@class="form-group"]//input[@type="checkbox"]',{force: true}).each(($el) => {
    cy.wrap($el).should('be.checked');
  });


  

  });
});
