import { ApplicationContract } from '@ioc:Adonis/Core/Application'

// IoC에 서비스 등록
export default class AppProvider {
    constructor(protected app: ApplicationContract) { }

    public register() {
        this.app.container.singleton('App/Services/TasksService', () => {
            const TasksService = require('App/Services/TasksService').default
            return new TasksService()
        })
    }
}