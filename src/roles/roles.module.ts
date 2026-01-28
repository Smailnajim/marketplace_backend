import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RolesController } from './roles.controller';

@Module({
  imports: [PrismaModule],
  providers: [RoleService],
  controllers: [RolesController],
})
export class RolesModule {}
