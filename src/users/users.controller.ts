import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() user: Prisma.UserCreateInput) {
    console.log('create user\n', user);
    return await this.usersService.createUser(user);
  }
}
