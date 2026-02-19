// src/learning-path/learning-path.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('learning-paths')
export class LearningPathController {
  constructor(private prisma: PrismaService) {}

  @Get(':id')
  getLearningPath(@Param('id', ParseIntPipe) id: number) {
    // Use ParseIntPipe to convert string to number
    return this.prisma.learningPath.findUnique({ where: { id } });
  }

  @Post()
  createLearningPath(@Body() data: any) {
    // Remove 'difficulty' field if it doesn't exist in schema
    return this.prisma.learningPath.create({
      data: {
        title: data.title,
        description: data.description,
        published: data.published ?? false,
      },
    });
  }
}