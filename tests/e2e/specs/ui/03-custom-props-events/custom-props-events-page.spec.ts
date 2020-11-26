import { getCarConfiguratorAs, getOptionPickerByText } from './helpers';

describe('Custom props, events page', () => {
  describe('ui', () => {
    xit('should render Car Configurator with initial values', () => {
      getCarConfiguratorAs('carConfigurator');

      cy.get('@carConfigurator')
        .should('contain', 'CarConfigurator')
        .and('contain', 'Current config');

      ['Engine:', 'Color:', 'Type of Drive:'].forEach((labelText) => {
        const regExp = new RegExp(`${labelText}\\s+$`);
        // TODO: find el by labelText
        //    then: its text() should match RegExp
      });

    });

    xit('should render option pickers for: engine, color and type of drive', () => {
      getCarConfiguratorAs('carConfigurator');

      // TODO: 3x option pickers should be rendered in CarConfigurator


      const testCases = [
        { label: 'Choose engine type', options: ['Petrol', 'Diesel', 'Tesla'] },
        { label: 'Select color', options: ['Black', 'White', 'Red', 'Yellow'] },
        { label: 'Your type of drive?', options: ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'] },
      ];

      // for each testCase/option picker
      //    - check rendered buttons count & order AND
      //    - check rendered buttons labels
      testCases.forEach(({ label, options }, index) => {
        const expectedOptions = options.map((o) => o.toUpperCase());
        // TODO
      });
    });

    xit('should show selected Engine option', () => {
      getCarConfiguratorAs('carConfigurator');

      // TODO: change selected engine from: null -> Diesel -> Petrol
    });

  });

  describe('navigation', () => {
    xit('should be possible enter page via menu', () => {
      // TODO
    });
  });
});
