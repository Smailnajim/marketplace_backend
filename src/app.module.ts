import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './user.service';
import { PrismaService } from './prisma.service';
import { RoleService } from './role.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, UsersService, PrismaService, RoleService],
})
export class AppModule {}
