import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from './users.controller';

@Module({
  imports: [PrismaModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
