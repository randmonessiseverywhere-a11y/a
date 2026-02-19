/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

/**
 * Auth Controller - Handles user authentication
 */
@Controller('auth')
export class AuthController {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() body: any) {
    console.log('📥 Received login request:', body);

    // Accept both 'email' and 'username' fields
    const email = body.email || body.username;
    const password = body.password;

    console.log('📧 Email:', email);
    console.log('🔑 Password length:', password?.length);

    // Validate input
    if (!email || !password) {
      console.log('❌ Missing email or password');
      throw new BadRequestException('Email and password are required');
    }

    console.log('🔍 Looking up user:', email);

    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    console.log('👤 User found:', user ? 'Yes' : 'No');

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('🔐 Password valid:', isPasswordValid);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate JWT token
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const access_token = await this.jwtService.signAsync(payload, {
      secret:
        process.env.JWT_SECRET || 'cybersec-learning-platform-secret-key-2024',
      expiresIn: '7d',
    });

    console.log('✅ Login successful for:', user.email);

    return {
      access_token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}
