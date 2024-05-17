import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  username: string;

  @Prop({ unique: [true, 'Duplicate email address'] })
  email: string;

  @Prop({ select: false })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next: Function) {
  this.password = await hash(this.password, 10);
  next();
});
