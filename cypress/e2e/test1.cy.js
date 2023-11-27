/// <reference types = 'cypress'/>

it("Google Search", () => {
  cy.visit("https://google.com");

  cy.get('.SDkEP').type('Aaron Daniel Chiemezie{Enter}')



  cy.contains('Videos').click()

//   cy.contains('Google Search').click()

});
