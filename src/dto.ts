import { IsString, IsNotEmpty } from 'class-validator';

// Add post DTO
export class AddPostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
