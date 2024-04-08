describe("First test case", () => {
    it("launching the application and verify the title", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.title().should('eq','OrangeHRM')
    
    });

    it("Login successfully with valid credentials", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@name='username']").type("Admin");
  
        cy.xpath("//input[@name='password']").type("admin123");
    
         cy.xpath("//button[text()=' Login ']").click();
      
      });
  });