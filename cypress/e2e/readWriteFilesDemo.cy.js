it("Read files using fixture", () => {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
  });
});

it("Write file demo", () => {
  cy.writeFile("sample.txt", "Hello World, I am Aaron Daniel Chiemezie\n");
  cy.writeFile("sample.txt", "I am learning Cypress");
});
