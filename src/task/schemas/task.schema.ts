import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Priority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

export enum Status {
  PENDING = 'Pending',
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}

@Schema({
  timestamps: true,
})
export class Task {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  due_date: string;

  @Prop()
  priority: Priority;

  @Prop()
  status: Status;

  @Prop()
  assigned_to: string;

  @Prop()
  created_by: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
