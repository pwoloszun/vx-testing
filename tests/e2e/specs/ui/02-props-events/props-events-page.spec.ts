import { getMainPageContentAs } from '../helpers';

// TODO refactor: getMyCounter

describe('Props, events page', () => {
  describe('ui', () => {
    xit('should render counter with defaults', () => {
      // TODO: visit page
      cy.visit('/props-events');

      // TODO: get main page content
      getMainPageContentAs('pageContent');

      // TODO: find 'My Counter' rendered text

      // TODO: find rendered initial counter value
    });

    xit('should increment counter value on "Increment" button click', () => {
      cy.visit('/props-events');
      getMainPageContentAs('pageContent');

      // TODO: find displayed Counter value
      //    then: Increment it
      //    then: check if displayed value has changed as expected

    });
  });

  describe('navigation', () => {
    xit('should navigate to binding exammples page', () => {
      // TODO
    });
  });
});
