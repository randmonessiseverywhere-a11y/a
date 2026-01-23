import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * PrismaService
 * This service manages the Prisma database connection for the entire application.
 * Why we need it:
 * - Prisma needs to connect when the app starts (OnModuleInit)
 * - Prisma needs to disconnect when the app shuts down (OnModuleDestroy)
 * - All other services will inject this to access the database
 * How it works:
 * 1. Instantiates PrismaClient
 * 2. onModuleInit() - connects to database when NestJS app starts
 * 3. onModuleDestroy() - closes connection when app shuts down
 * 4. Other services inject this and use it to query the database
 * Example usage in other services:
 * constructor(private prisma: PrismaService) {}
 * // Then use it like:
 * const users = await this.prisma.user.findMany();
 * const user = await this.prisma.user.create({ data: {...} });
 */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    console.log('🔗 Connecting to database...');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await this.$connect();
    console.log('✅ Database connected successfully');
  }

  async onModuleDestroy() {
    console.log('🔌 Disconnecting from database...');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await this.$disconnect();
  }
}
