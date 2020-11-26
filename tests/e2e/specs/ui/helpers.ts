export function fullAppUrl(path: string) {
  return `${Cypress.config('baseUrl')}${path}`;
}

// TODO getMainPageContentAs
export function getMainNavigationContentAs(alias: string) {
  return cy.findByTestId('main-nav-content')
    .as(alias);
}

// TODO getMainPageContentAs
export function getMainPageContentAs(alias: string) {
  return cy.findByTestId('main-page-content')
    .as(alias);
}
