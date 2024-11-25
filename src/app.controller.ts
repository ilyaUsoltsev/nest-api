import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { AddPostDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createPost(@Body(new ValidationPipe()) addPostDto: AddPostDto) {
    return {
      message: 'User created',
      data: addPostDto,
    };
  }
}
