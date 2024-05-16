import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Priority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export enum Status {
  PENDING = 'pending',
  ACTIVE = 'active',
  COMPLETED = 'completed',
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
