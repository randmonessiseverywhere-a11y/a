// src/admin/admin.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FileType } from '@prisma/client';

/**
 * DTOs (Data Transfer Objects) for type safety and validation
 */
export class CreateLearningPathDto {
  title: string;
  description: string;
  published?: boolean;
}

export class CreateLessonDto {
  title: string;
  description?: string;
  learningPathId: number;
  order: number;
  published?: boolean;
}

/**
 * Admin Service
 * 
 * Contains all business logic for admin operations:
 * - CRUD operations for learning paths
 * - CRUD operations for lessons
 * - File metadata management
 */
@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) { }

  /**
   * Create a new learning path
   */
  async createLearningPath(data: CreateLearningPathDto) {
    return this.prisma.learningPath.create({
      data: {
        title: data.title,
        description: data.description,
        published: data.published ?? false,
      },
    });
  }

  /**
   * Get all learning paths (for admin view)
   */
  async getAllLearningPaths() {
    return this.prisma.learningPath.findMany({
      include: {
        lessons: {
          orderBy: { order: 'asc' }, // Sort lessons by order
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Get a single learning path by ID
   */
  async getLearningPathById(id: number) {
    const learningPath = await this.prisma.learningPath.findUnique({
      where: { id },
      include: {
        lessons: {
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!learningPath) {
      throw new NotFoundException(`Learning path with ID ${id} not found`);
    }

    return learningPath;
  }

  /**
   * Create a new lesson with uploaded file
   * 
   * @param data - Lesson metadata
   * @param file - Uploaded file from Multer
   */
  async createLesson(data: CreateLessonDto, file: any) {
    // Validate that learning path exists
    const learningPath = await this.prisma.learningPath.findUnique({
      where: { id: data.learningPathId },
    });

    if (!learningPath) {
      throw new NotFoundException(
        `Learning path with ID ${data.learningPathId} not found`,
      );
    }

    // Check if order number is already taken in this learning path
    const existingLesson = await this.prisma.lesson.findFirst({
      where: {
        learningPathId: data.learningPathId,
        order: data.order,
      },
    });

    if (existingLesson) {
      throw new BadRequestException(
        `A lesson with order ${data.order} already exists in this learning path`,
      );
    }

    // Determine file type based on MIME type
    const fileType = file.mimetype.includes('pdf')
      ? FileType.PDF
      : FileType.VIDEO;

    // Create lesson record with file metadata
    return this.prisma.lesson.create({
      data: {
        title: data.title,
        description: data.description,
        fileUrl: `/uploads/${fileType === FileType.PDF ? 'pdfs' : 'videos'}/${file.filename}`,
        fileType,
        order: data.order,
        published: data.published ?? false,
        learningPathId: data.learningPathId,
      },
      include: {
        learningPath: true, // Include parent learning path in response
      },
    });
  }

  /**
   * Get all lessons (optionally filtered by learning path)
   */
  async getAllLessons(learningPathId?: number) {
    return this.prisma.lesson.findMany({
      where: learningPathId ? { learningPathId } : undefined,
      include: {
        learningPath: true,
      },
      orderBy: [
        { learningPathId: 'asc' },
        { order: 'asc' },
      ],
    });
  }

  /**
   * Update learning path
   */
  async updateLearningPath(id: number, data: Partial<CreateLearningPathDto>) {
    return this.prisma.learningPath.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete learning path (will cascade delete all lessons)
   */
  async deleteLearningPath(id: number) {
    return this.prisma.learningPath.delete({
      where: { id },
    });
  }

  /**
   * Delete lesson
   */
  async deleteLesson(id: number) {
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}
