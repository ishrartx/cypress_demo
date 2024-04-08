//By default cypress will handle alert on its own, we do not need to write nay script.
describe("Handling Alerts", () => {
  it("simple  Alerts", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.xpath('//a[text()="JavaScript Alerts"]').click();
    cy.wait(10000);
    cy.xpath('//button[text()="Click for JS Alert"]').click();

    cy.on("window:alert", (t) => {
      expect(t).contains("I am a JS Alert");
    });
    //alert window automatically clsoed by the cypress
    //  cy.wait(5000)
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("confirmation alerts", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.xpath('//a[text()="JavaScript Alerts"]').click();
    cy.wait(10000);
    cy.xpath('//button[text()="Click for JS Confirm"]').click();

    cy.on("window:confirm", (t) => {
      expect(t).contains("I am a JS Confirm");
    });

    // by default cypress will click on the ok button
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("confirmation alerts cancel button", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.xpath('//a[text()="JavaScript Alerts"]').click();
    cy.wait(10000);
    cy.xpath('//button[text()="Click for JS Confirm"]').click();

    cy.on("window:confirm", (t) => {
      expect(t).contains("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); // by applying flase cypress click on the cancel button
    //becuase the default value is true

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("javascript prompt alerts", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.xpath('//a[text()="JavaScript Alerts"]').click();

    let text = "Hello world";
    //Passing the text in alert
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns(text);
    });
    cy.wait(10000);
    cy.xpath('//button[text()="Click for JS Prompt"]').click();

    cy.on("window:confirm", (t) => {
      expect(t).contains("I am a JS prompt");
    });
    cy.get("#result").should("have.text", `You entered: ${text}`);
  });

  it("javascript prompt alerts cancel button", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.xpath('//a[text()="JavaScript Alerts"]').click();

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns(null); // Simulate clicking "Cancel" by returning null
      cy.contains("Click for JS Prompt").click();
    });
    cy.wait(10000);
    cy.xpath('//button[text()="Click for JS Prompt"]').click();

    cy.on("window:confirm", (t) => {
      expect(t).contains("I am a JS prompt");
    });

    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", `You entered: null`);
  });

  it("javascript prompt alerts cancel button", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });



      cy.xpath("//p[contains(normalize-space(), 'Congratulations! You must have the proper credentials.')]").then($value => {
        const textValue = $value.text()
        cy.wrap(textValue).as('wrapValue')
    })
  });
});
