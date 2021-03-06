<<<<<<< HEAD
describe('Accessibility checks', () => {
  it('Main Page', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('404 Page', () => {
    cy.visit('/404');
    cy.injectAxe();
    cy.checkA11y();
=======
function terminalLog(violations) {
  console.log(
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`,
  );

  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }),
  );

  console.table(violationData);
}

describe('Accessibility checks', () => {
  it('Main Page', () => {
    cy.visit('/');
    cy.waitForAnimations();
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog);
  });

  it('Main Page', () => {
    cy.visit('/404');
    cy.waitForAnimations();
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog);
>>>>>>> ec69f354ad0f31dc8137fae84c0e1dd9b5d2f874
  });
});
