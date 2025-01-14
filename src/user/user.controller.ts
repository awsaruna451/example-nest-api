import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schemas';
import { hashPassword } from '../utils/bcrypt.util';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User> {
    const hashedPassword = await hashPassword(password);
    return this.userService.createUser(name, age, username, hashedPassword);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User> {
    return this.userService.findOne(username);
  }

  @Delete(':username')
  async deleteUser(@Param('username') username: string): Promise<User> {
    return this.userService.deleteUser(username);
  }

  @Put(':username')
  async updateUser(
    @Param('username') username: string,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('password') password: string,
  ): Promise<User> {
    const user = await this.userService.findOne(username);
    user.name = name;
    user.age = age;
    user.password = password;
    return user.save();
  }
}