/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/admin/admin.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Role } from '@prisma/client';
import {
  AdminService,
  CreateLearningPathDto,
  CreateLessonDto,
} from './admin.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard, Roles } from '../auth/roles.guard';

/**
 * Admin Controller
 *
 * All routes are protected by:
 * 1. JwtAuthGuard - Ensures user is authenticated
 * 2. RolesGuard - Ensures user has ADMIN role
 *
 * Base path: /admin
 */
@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard) // Apply guards to all routes in controller
@Roles(Role.ADMIN) // Only ADMIN role can access
export class AdminController {
  constructor(private adminService: AdminService) {}

  // ==================== LEARNING PATHS ====================

  /**
   * POST /admin/learning-paths
   * Create a new learning path
   *
   * Body example:
   * {
   *   "title": "Web Application Security",
   *   "description": "Learn about common web vulnerabilities",
   *   "published": false
   * }
   */
  @Post('learning-paths')
  async createLearningPath(@Body() dto: CreateLearningPathDto) {
    return this.adminService.createLearningPath(dto);
  }

  /**
   * GET /admin/learning-paths
   * Get all learning paths with their lessons
   */
  @Get('learning-paths')
  async getAllLearningPaths() {
    return this.adminService.getAllLearningPaths();
  }

  /**
   * GET /admin/learning-paths/:id
   * Get a specific learning path by ID
   */
  @Get('learning-paths/:id')
  async getLearningPathById(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.getLearningPathById(id);
  }

  /**
   * PUT /admin/learning-paths/:id
   * Update a learning path
   *
   * Body example:
   * {
   *   "title": "Updated Title",
   *   "published": true
   * }
   */
  @Put('learning-paths/:id')
  async updateLearningPath(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<CreateLearningPathDto>,
  ) {
    return this.adminService.updateLearningPath(id, dto);
  }

  /**
   * DELETE /admin/learning-paths/:id
   * Delete a learning path (will also delete all associated lessons)
   */
  @Delete('learning-paths/:id')
  async deleteLearningPath(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteLearningPath(id);
  }

  // ==================== LESSONS ====================

  /**
   * POST /admin/lessons
   * Create a new lesson with file upload
   *
   * Content-Type: multipart/form-data
   *
   * Form fields:
   * - title: string
   * - description: string (optional)
   * - learningPathId: number
   * - order: number
   * - published: boolean (optional)
   * - file: PDF or video file
   *
   * Example using curl:
   * curl -X POST http://localhost:3000/admin/lessons \
   *   -H "Authorization: Bearer YOUR_JWT_TOKEN" \
   *   -F "title=SQL Injection Basics" \
   *   -F "description=Learn about SQL injection" \
   *   -F "learningPathId=1" \
   *   -F "order=1" \
   *   -F "published=false" \
   *   -F "file=@/path/to/lesson.pdf"
   */
  @Post('lessons')
  @UseInterceptors(FileInterceptor('file')) // 'file' is the form field name
  async createLesson(
    @Body() dto: any, // Use 'any' to handle multipart form data
    @UploadedFile() file: any, // Use 'any' for Multer file type
  ) {
    // Convert string inputs to correct types (multipart/form-data sends everything as strings)
    const lessonData: CreateLessonDto = {
      title: dto.title,
      description: dto.description,
      learningPathId: Number(dto.learningPathId),
      order: Number(dto.order),
      published:
        dto.published === 'true' ||
        dto.published === true ||
        dto.published === 'on',
    };

    return this.adminService.createLesson(lessonData, file);
  }

  /**
   * GET /admin/lessons
   * Get all lessons, optionally filtered by learning path
   *
   * Query params:
   * - learningPathId (optional): Filter lessons by learning path
   *
   * Examples:
   * GET /admin/lessons
   * GET /admin/lessons?learningPathId=1
   */
  @Get('lessons')
  async getAllLessons(@Query('learningPathId') learningPathId?: string) {
    const pathId = learningPathId ? Number(learningPathId) : undefined;
    return this.adminService.getAllLessons(pathId);
  }

  /**
   * DELETE /admin/lessons/:id
   * Delete a lesson
   */
  @Delete('lessons/:id')
  async deleteLesson(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteLesson(id);
  }
}

/**
 * IMPORTANT NOTES:
 *
 * 1. File serving: To serve uploaded files to users, add this to main.ts:
 *
 *    import { NestExpressApplication } from '@nestjs/platform-express';
 *    import { join } from 'path';
 *
 *    async function bootstrap() {
 *      const app = await NestFactory.create<NestExpressApplication>(AppModule);
 *      app.useStaticAssets(join(__dirname, '..', 'uploads'), {
 *        prefix: '/uploads/',
 *      });
 *      await app.listen(3000);
 *    }
 *
 * 2. CORS: If frontend is on different port, enable CORS in main.ts:
 *    app.enableCors({
 *      origin: 'http://localhost:5173', // Vite default port
 *      credentials: true,
 *    });
 *
 * 3. Validation: Install class-validator and class-transformer:
 *    npm install class-validator class-transformer
 *    Then add @IsString(), @IsNumber(), etc. to DTOs
 */
