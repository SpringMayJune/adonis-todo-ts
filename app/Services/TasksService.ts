import { TaskDto } from "App/Dtos/TaskDto";
import Task from "App/Models/Task";
export default class TasksService {
    public getTasks() {
        return []
    }

    public async createTask(payload: TaskDto): Promise<Task> {
        return await Task.create(payload);
    }
}