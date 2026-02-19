/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/admin/admin.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

/**
 * Admin Module
 *
 * Handles all admin-related functionality:
 * - Learning path management
 * - Lesson uploads and management
 * - File storage configuration
 */
@Module({
  imports: [
    // Configure JWT for authentication
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '7d' }, // Token expires in 7 days
    }),

    // Configure Multer for file uploads
    MulterModule.register({
      storage: diskStorage({
        // Destination: where to save uploaded files
        destination: (req, file, cb) => {
          // Save PDFs and videos in separate folders
          const uploadPath = file.mimetype.includes('pdf')
            ? './uploads/pdfs'
            : './uploads/videos';
          cb(null, uploadPath);
        },

        // Filename: generate unique filename to prevent collisions
        filename: (req, file, cb) => {
          // Generate unique filename: timestamp-randomstring.ext
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),

      // File filter: only allow PDFs and videos
      fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
          'application/pdf',
          'video/mp4',
          'video/webm',
          'video/ogg',
        ];

        if (allowedMimeTypes.includes(file.mimetype)) {
          cb(null, true); // Accept file
        } else {
          cb(
            new Error('Invalid file type. Only PDF and video files allowed'),
            false,
          );
        }
      },
      limits: {
        fileSize: 100 * 1024 * 1024, // 100MB in bytes
      },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService, PrismaService],
})
export class AdminModule {}
