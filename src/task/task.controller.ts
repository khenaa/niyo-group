import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  async createTask(
    @Body()
    task: CreateTaskDto,
  ): Promise<Task> {
    return this.taskService.create(task);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Task> {
    return this.taskService.findById(id);
  }

  @Patch(':id')
  async updateTask(
    @Param('id')
    id: string,
    @Body()
    task: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.updateById(id, task);
  }

  @Delete(':id')
  async deleteTask(
    @Param('id')
    id: string,
  ): Promise<Task> {
    return this.taskService.deleteById(id);
  }
}
