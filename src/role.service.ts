import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, Role } from './generated/prisma/client';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async createRole(data: Prisma.RoleCreateInput): Promise<Role | null> {
    return await this.prisma.role.create({
      data,
    });
  }
}
