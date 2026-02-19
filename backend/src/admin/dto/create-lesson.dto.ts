import { Transform } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  published: boolean;

  @Transform(({ value }) => Number(value))
  @IsInt()
  order: number;

  @Transform(({ value }) => Number(value))
  @IsInt()
  learningPathId: number;
}
