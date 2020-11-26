import { forEach } from 'lodash';

import { getMainPageContentAs } from '../helpers';

export function stubFetchTodosAs(routeAlias: string, jsonAlias: string): void {
  cy.fixture('16-adv-todos/todos.json')
    .as(jsonAlias);
  cy.server();
  cy.route({
    method: 'GET',
    url: '/api/todos',
    response: '@todosJSON',
  }).as(routeAlias);
}

export function getTodoListItemsAs(alias: string) {
  return getMainPageContentAs('pageContent')
    .findByTestId('todos-list')
    .findAllByTestId('my-list-item')
    .as(alias);
}

export function getTodoFormAs(alias: string) {
  return getMainPageContentAs('pageContent')
    .findByTestId('todo-form')
    .as(alias);
}

interface FieldValuesDict {
  [label: string]: string;
}

export function fillFormWithAndSubmit(alias: string, fieldValues: FieldValuesDict): void {
  cy.get(alias)
    .within(() => {
      forEach(fieldValues, (fieldValue, label) => {
        cy.findByLabelText(label)
          .type(fieldValue);
      });
      cy.findByText('Submit')
        .click();
    });
}

export function getModalInfoAs(alias: string) {
  return cy.findByTestId('app-snackbar-container')
    .as(alias);
}
