describe("Handling WwebTablles", () => {
   beforeEach('navigation to Application',()=>{
    //  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("Check Number Rows and Columns", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.xpath("//div[@class='left-align']//table[@id='product']//tbody//tr").should('have.length',11)
      cy.xpath("//div[@class='left-align']//table[@id='product']//tbody//tr//th").should('have.length',3)

      cy.xpath("//div[@class='left-align']//table[@id='product']//tbody//tr").then(rows => {
        const numberOfRows = rows.length;
        cy.log('Number of rows:', numberOfRows);
      });
  
      // Find number of columns using headers
      cy.xpath("//div[@class='left-align']//table[@id='product']//tbody//tr//th").then(columns => {
        const numberOfColumns = columns.length;
        cy.log('Number of columns:', numberOfColumns);
      });
  
      
    });
  
    it("check cell data from specific rows and colimns", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.xpath("//div[@class='left-align']//table[@id='product']//tbody//tr//td[text()='Master Selenium Automation in simple Python Language']")
      .contains("Selenium Automation")
    });
  
    it("Read all the data from rows and columns data in the first page", () => {

      //reading each rows
        cy.xpath("//div[@class='left-align']//table[@id='product']//tbody//tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {

              //get all the td within each row(reading each column)
                cy.xpath("//div[@class='left-align']//table[@id='product']//tbody//tr//td").each(($col, index, $cols) => {
                    const text = $col.text();
                    cy.log(text); // This ensures the text content is logged correctly.
                });
            });
        });
        
     
    });

    it.only("Pagination", () => {
     //Read all the data from all the pages
     cy.visit('https://demo.opencart.com/admin/index.php')
      cy.get("#input-username").type("demo");
      cy.get("#input-password").type("demo");
      cy.xpath('//button[text()= " Login"]').click();  
      cy.wait(6000);

      cy.get('.btn-close').click();

       cy.xpath('//a[text()= " Customers"]').click()
      cy.wait(7000);
      cy.get('#collapse-5 > :nth-child(1) > a').click()
      //cy.xpath('//li[@class="active"]//a[text()= "Customers"]').click()

      let total_no_of_pages;
// Find total number of pages
// cy.get(".row > .text-end").then((e) => {
//   let mytext = e.text();
//   // Extracting the number of pages using substring and indexOf
//   let start = mytext.indexOf("(") + 1; // Position right after "("
//   let end = mytext.indexOf("Pages") - 1; // Position right before "Pages"
//   let pagesText = mytext.substring(start, end).trim();
//    // Extract and trim spaces
//   // Assuming the format is always "(xxxx Pages)", extract the number
//   total_no_of_pages = pagesText.split(" ")[0]; // Get the number part before the space (if any)
//   cy.log("Total no of pages are : " + total_no_of_pages);

  total_no_of_pages=5;
  for(let p=1;p<=total_no_of_pages;p++){
    if(total_no_of_pages>1){
      cy.log("current page number is : " +p)
      cy.get(`ul[class="pagination"]>li:nth-child(${p})`)
    //  cy.xpath(`//ul[@class="pagination"]//li//a[text()="${p}"]`).click();
      
      //cy.get(`:nth-child(${p}) > .page-link`).click();

      cy.wait(6000)

      //read all the emails
      cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows) => {
        cy.wrap($row).within(() => {

          cy.get('td:nth-child(3)').then(e=>{
            cy.log(e.text())
          })
        });
    });

    }
  }



});





     
     

     
    });
  
  