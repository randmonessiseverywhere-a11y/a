import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('learning-path')
export class LearningPathController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.learningPath.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.learningPath.findUnique({ where: { id } });
  }

  @Post()
  async create(@Body() data: { title: string; description: string; difficulty: string; creatorId: string }) {
    return this.prisma.learningPath.create({ data: { ...data, difficulty: data.difficulty as any } });
  }
}
