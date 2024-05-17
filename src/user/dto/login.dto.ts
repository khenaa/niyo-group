import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter valid email ' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
