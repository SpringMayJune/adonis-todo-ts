import { TaskDto } from "App/Dtos/TaskDto";
import Task from "App/Models/Task";
export default class TasksService {
    public async getTasks(): Promise<Task[]> {
        return await Task.query().orderBy('created_at', 'asc')
    }

    public async createTask(payload: TaskDto): Promise<Task> {
        return await Task.create(payload);
    }
}