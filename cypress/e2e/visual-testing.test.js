<<<<<<< HEAD
describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];
  it('Main Page', () => {
    const SCROLL_DURATION = 1500;
    cy.visit('/');

    cy.scrollTo('bottom', { duration: SCROLL_DURATION });

    cy.wait(SCROLL_DURATION).percySnapshot('Main Page Responsive', {
=======
/* eslint-disable cypress/no-unnecessary-waiting */

describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];

  it('Main Page', () => {
    cy.visit('/');

    cy.get('#home').scrollIntoView({ duration: 500 });
    cy.get('#about').scrollIntoView({ duration: 500 });
    cy.get('#projects').scrollIntoView({ duration: 500 });
    cy.get('#writing').scrollIntoView({ duration: 500 });
    cy.get('#footer').scrollIntoView({ duration: 500 });

    cy.waitForAnimations();

    cy.percySnapshot('Main Page Responsive', {
>>>>>>> ec69f354ad0f31dc8137fae84c0e1dd9b5d2f874
      widths: SCREENS,
    });
  });

  it('404 Page', () => {
    cy.visit('/404');
<<<<<<< HEAD
    cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
=======

    cy.waitForAnimations();

>>>>>>> ec69f354ad0f31dc8137fae84c0e1dd9b5d2f874
    cy.percySnapshot('404 Page Responsive', { widths: SCREENS });
  });
});
