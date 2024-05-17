import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { RegisterDto } from './dto/register.dto';
import { sign } from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { compareSync } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async register(registerDto: RegisterDto): Promise<{ token: string }> {
    const { username, email, password } = registerDto;

    // validate user exist
    const userExists = await this.userModel.findOne({ email: email });
    if (userExists) {
      throw new HttpException(
        'Email already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const user = await this.userModel.create({
      username,
      email,
      password,
    });

    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string; data: object }> {
    const { email, password } = loginDto;

    // validate user exists
    const user = await this.userModel.findOne({ email }).select('+password');
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // validate password
    if (!compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    // clone the user object
    const user_data = { ...user.toObject() };
    // remove the 'password' key
    delete user_data.password;

    return { token, data: user_data };
  }
}
