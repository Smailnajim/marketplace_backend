import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/user.service';
import { RoleService } from './roles/role.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, PrismaModule, RolesModule],
  controllers: [AppController],
  providers: [AppService, UsersService, RoleService],
})
export class AppModule {}
