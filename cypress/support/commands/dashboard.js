import * as locators from '../locators/index';
import * as assignment from './assignment'

export const openSubjectsList = () => {
  cy.get(locators.dashboard.subjectsList.subjectsListButton)
    .should('be.visible')
    .click()

  cy.get(locators.dashboard.subjectsList.addSubjectButton).click()

  cy.get(locators.assignment.newSubject.body).should('be.visible')
}

export const openSubjectModal = () => {
  cy.get(locators.dashboard.newSubjectButton)
    .should('be.visible')
    .click()
    
  cy.get(locators.assignment.newSubject.body).should('be.visible')
}

export function activateSubject(name, subjectName = 'Rekenen', level = 3, group = 0, students='#StanislavInterviewClass') {
  cy.url().then(($url) => {
    if($url.includes("V4")) 
      openSubjectsList()
    else 
      openSubjectModal()
})

  assignment.selectSubject(subjectName)
  assignment.selectGroupLevel(level)
  assignment.selectGroup(group)
  assignment.enterName(name)
  assignment.selectStudents(students)
}

export function assertSubjectPresentInList(name) {
  cy.get(locators.dashboard.subjectCard.body).should('contain', name)
}

export function editSubject(prevTitle, newTitle) {
  cy.get(locators.dashboard.subjectCard.body).contains(prevTitle)
    .eq(0)
    .parents(locators.dashboard.subjectCard.body)
    .find(locators.dashboard.subjectCard.editSubjectButton).click()

  cy.get(locators.dashboard.subjectCard.editSubjectTitleField)
    .click()
    .clear({ force: true })
    .type(newTitle)
  
  cy.get(locators.dashboard.subjectCard.editSubjectSaveButton).click()
}