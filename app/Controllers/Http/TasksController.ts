import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import TasksService from 'App/Services/TasksService';
import TaskValidator from 'App/Validators/TaskValidator';

export default class TasksController {
  private tasksService: TasksService;

  constructor() {
    this.tasksService = new TasksService();
  }

  public async index({ response }: HttpContextContract) {
    const tasks = await this.tasksService.getTasks();
    return response.status(200).json(tasks)
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const data = ({
        ...request.body(),
        is_completed: request.input('is_completed', false),
      })
      const payload = await request.validate({ schema: TaskValidator.createTaskSchema, data });
      ;
      const newTask = await this.tasksService.createTask(payload)
      response.status(200).json({
        task: newTask,
        message: 'Task created successfully!'
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Failed to create task',
        error: error.messages || error.message
      })
    }
  }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
