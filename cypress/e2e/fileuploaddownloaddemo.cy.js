it("File Upload Test", () => {
  cy.visit("https://trytestingthis.netlify.app/");

  cy.get("#myfile").attachFile("daniel.jpg");
});



it('File Download Test', ()=>{
    
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})