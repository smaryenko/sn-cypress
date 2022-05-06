import cypress from 'cypress';
import testData from './environments.json';

export default abstract class ConfigProvider {

    static envi = Cypress.env('ENV');

    static getBaseUrl() {
        try {
            return testData[this.envi].baseUrl;
        }
        catch(e) {
            cy.log(`Base url was not found in configuration for environment ${this.envi}`);
            cy.log(e.message);
        }
    }

    static getUser(user) {
        try {
            return testData[this.envi].users[user];
        }
        catch(e) {
            cy.log(`User ${user} was not found in configuration for environment ${this.envi}`);
            cy.log(e.message);
        }
    }

}