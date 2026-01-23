import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { PrismaService } from '../prisma/prisma.service';

@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @Roles('ADMIN')
  async findAll() {
    return this.prisma.user.findMany({ select: { id: true, username: true, email: true, role: true } });
  }
}
