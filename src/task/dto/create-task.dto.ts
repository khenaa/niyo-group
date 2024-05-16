import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Priority, Status } from '../schemas/task.schema';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly due_date: string;

  @IsNotEmpty()
  @IsEnum(Priority, {
    message: "Priority should be 'high', 'medium' or 'low' ",
  })
  readonly priority: Priority;

  @IsNotEmpty()
  @IsEnum(Status, {
    message: "Status should be 'pending', 'active' or 'completed' ",
  })
  readonly status: Status;

  @IsNotEmpty()
  @IsString()
  readonly assigned_to: string;

  @IsNotEmpty()
  @IsString()
  readonly created_by: string;
}
