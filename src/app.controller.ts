import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './user.service';
import { Prisma } from './generated/prisma/client';
import { RoleService } from './role.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
    private readonly roleService: RoleService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createUser(@Body() user: Prisma.UserCreateInput) {
    console.log('create user\n', user);
    return await this.usersService.createUser(user);
  }
  @Post('/roles')
  async createRole(@Body() role: Prisma.RoleCreateInput) {
    console.log('create role\n', role);
    return await this.roleService.createRole(role);
  }
}
