import * as locators from '../locators/index';

export function login(user, pass) {
  cy.get(locators.login.username).type(user)

  cy.get(locators.login.password).type(pass)
  
  cy.xpath(locators.login.loginButton).click()
}
