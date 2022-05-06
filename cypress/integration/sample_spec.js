import ConfigProvider from "../configuration/configProvider"
import * as commands from '../support/commands/index'
import {v4 as uuidv4} from 'uuid'

const url = ConfigProvider.getBaseUrl()
const user = ConfigProvider.getUser('teacher1')
const subjectTitle = `${uuidv4().substring(0,6)}`
const newTitle = `${uuidv4().substring(6,12)}`

describe('Teacher Dashboard', () => {
    before(() => {
        cy.visit(url)
        
        commands.login(user.username, user.password)
    })

    it('should be possible to edit subject', () => {
        commands.activateSubject(subjectTitle)
        commands.assertSubjectPresentInList(subjectTitle)

        commands.editSubject(subjectTitle, newTitle)
        commands.assertSubjectPresentInList(newTitle)
    })
})
