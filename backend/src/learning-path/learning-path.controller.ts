import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('learning-paths')
export class LearningPathController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getPublishedPaths() {
    return this.prisma.learningPath.findMany({
      where: { published: true },
      include: {
        lessons: {
          where: { published: true },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  @Get(':id')
  async getPathById(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.learningPath.findUnique({
      where: { id },
      include: {
        lessons: {
          where: { published: true },
          orderBy: { order: 'asc' },
        },
      },
    });
  }
}
