import { Module } from '@nestjs/common';
import { LearningPathController } from './learning-path.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [LearningPathController],
  providers: [PrismaService],
})
export class LearningPathModule {}
