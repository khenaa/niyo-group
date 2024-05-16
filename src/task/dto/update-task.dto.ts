import {
  IsOptional,
  IsString,
  IsEnum,
  IsDate,
  IsDateString,
} from 'class-validator';
import { Priority, Status } from '../schemas/task.schema';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly due_date: string;

  @IsOptional()
  @IsEnum(Priority, {
    message: "Priority should be 'high', 'medium' or 'low' ",
  })
  readonly priority: Priority;

  @IsOptional()
  @IsEnum(Status, {
    message: "Status should be 'pending', 'active' or 'completed' ",
  })
  readonly status: Status;

  @IsOptional()
  @IsString()
  readonly assigned_to: string;

  @IsOptional()
  @IsString()
  readonly created_by: string;
}
