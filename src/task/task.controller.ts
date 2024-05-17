import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';

import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAllTasks(@Query() query: ExpressQuery): Promise<Task[]> {
    return this.taskService.findAll(query);
  }

  @Post()
  async createTask(
    @Body()
    task: CreateTaskDto,
  ): Promise<Task> {
    return await this.taskService.create(task);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Task> {
    return await this.taskService.findById(id);
  }

  @Patch(':id')
  async updateTask(
    @Param('id')
    id: string,
    @Body()
    task: UpdateTaskDto,
  ): Promise<Task> {
    return await this.taskService.updateById(id, task);
  }

  @Delete(':id')
  async deleteTask(
    @Param('id')
    id: string,
  ): Promise<Task> {
    return await this.taskService.deleteById(id);
  }
}
