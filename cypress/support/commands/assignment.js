import * as locators from '../locators/index';

export const selectGroupLevel = level => {
  cy.get(locators.assignment.newSubject.subjectLevelSlider)
    .should('be.visible')
    .contains(level)
    .click()

  cy.get(locators.assignment.newSubject.nextButton).click()
}

export const selectSubject = (subjectName) => {
  cy.get(locators.assignment.newSubject.subjectsDropdown).click()

  cy.get(locators.assignment.newSubject.subjectsDropdownList)
    .contains(subjectName)
    .click()

  cy.get(locators.assignment.newSubject.nextButton).click()
}

export const selectGroup = (group) => {
  cy.get(locators.assignment.newSubject.groupCard)
    .eq(group)
    .click()
}

export const enterName = (name) => {
  cy.get(locators.assignment.newSubject.subjectNameField)
    .clear({ force: true })
    .type(name)
}

export const selectStudents = (students) => {
  cy.get(locators.assignment.newSubject.studentSelectionDropdown).click()

  cy.get(locators.assignment.newSubject.subjectsDropdownList)
    .contains(students)
    .click()

  cy.get(locators.assignment.newSubject.activateSubjectButton).click()
}