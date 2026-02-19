// src/user/user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('users')
export class UserController {
  constructor(private prisma: PrismaService) {}

  @Get()
  getUsers() {
    // Use EMAIL not username
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true, // Changed from username
        role: true,
      },
    });
  }
}
