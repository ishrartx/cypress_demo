


describe("Assertions", () => {
    it("Implicit Assertion", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //   //should
    //   cy.url().should('include','orangehrmlive')
    //   cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //   cy.url().should('contain','live')
      
    cy.log("url validations using implicit Assertions")
      //another way not using the should again and again
      cy.url().should('include','orangehrmlive').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain','live').and('not.contain','ABC')


      //validations on the title
      cy.log("title validations using implicit Assertions")
      cy.title().should('eq','OrangeHRM').and('include','HRM')
      .and('contain','Orange')

      //validation on the logo is displayed or not
      cy.log("logo verification using implicit Assertion")
    //   cy.get('.orangehrm-login-branding > img').should('be.visible')
    //   .should('exist')

      cy.get('.orangehrm-login-branding > img').should('be.visible')
      .and('exist')


      //No of links
      cy.xpath("//a").should('have.length','1')


      //verified input field
      cy.xpath("//input[@name='username']").type("Admin");
      cy.xpath("//input[@name='username']").should('have.value','Admin')
     
      
      
    });

    it("Explicit Assertions", () => {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@name='username']").type("Admin");
        cy.xpath("//input[@name='password']").type("admin123");
        cy.xpath("//button[text()=' Login ']").click();


        //veriied user name
        let expectname = "";

        cy.get(".oxd-userdropdown-name").then((x) => {
          let actual_name = x.text().trim();
          cy.log( "actual name " + actual_name);
          expectname= actual_name
          expect(actual_name).to.equal(expectname);
          
          //assert
          assert.equal(actual_name,expectname)
        });

        //verified title
        let expecttitle = "OrangeHRM";

        cy.title().then((title) => {
          
          cy.log("Page title: " + title);
          expect(title).to.equal(expecttitle);
          
          //assert
          assert.equal(title,expecttitle)
        });

      });
  });

 