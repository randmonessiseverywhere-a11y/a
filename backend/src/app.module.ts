import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LearningPathController } from './learning-path/learning-path.controller';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [PrismaModule, AuthModule, AdminModule],
  controllers: [AppController, LearningPathController, UserController],
  providers: [AppService],
})
export class AppModule {}
