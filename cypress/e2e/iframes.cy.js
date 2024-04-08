//By default cypress will handle alert on its own, we do not need to write nay script.
describe("Handling iframes", () => {
  it("Approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.xpath('//a[text()="Frames"]').click();
    cy.xpath('//a[text()="iFrame"]').click();
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap);
       iframe.clear().type("Welcome {ctrl+a}");
       cy.xpath('//button[@aria-label="Bold"]').click();

       cy.wait(5000)
  });

  it("By using custom commands", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.xpath('//a[text()="Frames"]').click();
    cy.xpath('//a[text()="iFrame"]').click();
    cy.getiframes("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
    cy.xpath('//button[@aria-label="Bold"]').click();
    cy.wait(5000)
  });

  it("By using Cypress iframe plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.xpath('//a[text()="Frames"]').click();
    cy.xpath('//a[text()="iFrame"]').click();
    cy.frameLoaded('#mce_0_ifr'); //Load the frame

    //get the frame
    cy.iframe('#mce_0_ifr')
    .clear().type("welcome {ctrl+a}")
    cy.xpath('//button[@aria-label="Bold"]').click();
    cy.wait(5000)
   
  });
});
