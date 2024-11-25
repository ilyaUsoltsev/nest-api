import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:id/:optional?')
  getUsers(@Param() params: any, @Query() query: any) {
    console.log(params, 'params');
    console.log(query, 'query');
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() body: any, @Headers() headers: any, @Ip() ip: string) {
    console.log(body, 'body');
    console.log(headers, 'headers');
    console.log(ip, 'ip');
    return 'HELLO';
  }
}
