describe("Handle dropdown", () => {
  it("Dropdown with select tag", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.wait(3000);
    cy.get("#country").select("Brazil").should("have.value", "brazil");
  });

  it("should print all options of the dropdown", () => {
    cy.visit("https://testautomationpractice.blogspot.com/"); 

    cy.get("#country")
      .find("option")
      .each(($el, index, $list) => {
        // Print the option text and value in the console
        cy.log(`Option ${index + 1}: ${$el.text()} (Value: ${$el.val()})`);
      });
  });

  it('Dynamic Dropdown', function (){
    // test step to launch a URL
    cy.visit("https://www.tutorialspoint.com/videotutorials/index.php");
    // enter test in the dynamic dropdown
    cy.get("#search-strings").type("Java",{force: true});
    // wait for some time
    cy.wait(3000);
    // assertion to validate the number of search results
    cy.get('.clsHeadQuestion'). should('have.length',12);
    // iterate through the suggested options
    cy.get('.clsHeadQuestion').each(($el, index, $list) => {
       // condition matching check
       if($el.text() ==="Java"){
          // click() on that option for selection
          $el.click();
       }
    })
    // assertion to check if correct option is selected
    cy.get("#search-strings").should("have.value","Java");
 });
});
