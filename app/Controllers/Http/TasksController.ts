import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import TasksService from 'App/Services/TasksService';

export default class TasksController {

  constructor(protected tasksService: TasksService) { }

  public async index({ }: HttpContextContract) {
    return await this.tasksService.getTasks();
  }

  public async create({ request, response }: HttpContextContract) {
    console.log('request', request);
    response.status(200).json({ message: 'succeed!' })
    // const newTask = await this.tasksService.createTask()
  }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
