
describe("Handling Child tabs or windows", () => {
    // Start of the test case
it("Approach 1", () => {
    // First, navigate to the specified URL. This is the starting point of our test.
    cy.visit("https://the-internet.herokuapp.com/");
    
    // Find the link that leads to the Multiple Windows page by its text and click it.
    // This navigates to the Multiple Windows section of the website.
    cy.xpath('//a[text()="Multiple Windows"]').click();

    // The aim here is to handle a common testing challenge: links that open in new windows or tabs.
    // Normally, clicking a link with the attribute target="_blank" would open a new window/tab,
    // which Cypress does not automatically manage in the same way it does with the current window/tab.
    // To work around this, the test removes the target attribute from the link.
    // This is done using the .invoke() command, which can call jQuery functions on the selected elements.
    // 'removeAttr' is a jQuery function to remove an attribute, in this case, 'target'.
    cy.get('.example>a').invoke('removeAttr', 'target').click();
    
    // After clicking the link (which had its target attribute removed), it opens in the same window.
    // The test then verifies that the current URL includes the expected path,
    // indicating that the navigation to the new page (in the same tab) was successful.
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
    
    // The test waits for 10 seconds. It's often better to avoid fixed waits and instead use conditional waits to proceed as soon as possible.
    // However, in some cases, you might use them for demonstration purposes or when dealing with non-deterministic operations.
    cy.wait(10000);
    
    // Finally, the test navigates back to the previous page (the parent window in this context),
    // demonstrating how to control the browser's history in a test.
    cy.go('back');
});

  
    // Define a test case with the name "Approach 2".
it("Approach 2 ", () => {
    // Visit the homepage of the given website.
    cy.visit("https://the-internet.herokuapp.com/");
    
    // Navigate to the "Multiple Windows" section by finding the link by its text and clicking on it.
    cy.xpath('//a[text()="Multiple Windows"]').click();

    // Find the link that is supposed to open in a new window. Instead of clicking it directly,
    // grab the element and then perform an operation on it.
    cy.get('.example>a').then((e) => {
        // Extract the 'href' property of the link, which is the URL it points to.
        let url = e.prop('href');
        
        // Use Cypress to visit the URL directly. This effectively bypasses the need
        // for the link to open in a new tab or window, since we're navigating straight to the URL
        // within the same tab Cypress is controlling.
        cy.visit(url);
    });

    // Verify that the URL of the current page includes the expected path, confirming
    // that the navigation to the new page was successful.

    //the url should contain a domain and subdomain is anything.
    // the domain means the the main url : https://the-internet.herokuapp.com/
    //and the subdoamin is : /windows/new
    //here the subdomain should be matched otherwise it will fail the assertion
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

    // Wait for 10 seconds. It's worth noting that static waits are generally discouraged
    // in favor of more dynamic waiting methods, as they can lead to brittle tests. However,
    // they can be useful in certain scenarios.
    cy.wait(10000);

    // Navigate back to the previous page, effectively returning to the "Multiple Windows" section
    // of the website. This demonstrates navigating through the browser's history in a Cypress test.
    cy.go('back');
});
  
    
    
  
   
    
  
  });
  