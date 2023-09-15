import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dto/create.user.dto';
import { LoginUserDTO } from 'src/dto/login.user.dto';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(201)
  @Post()
  createUser(@Body() value: CreateUserDTO): Promise<object> {
    return this.userService.createUser(value);
  }

  @HttpCode(200)
  @Delete()
  deleteUser(
    @Res() response: Response,
    @Req() request: Request,
  ): Promise<void> {
    return this.userService.deleteUser(response, request);
  }

  @HttpCode(200)
  @Post('login')
  loginUser(
    @Body() value: LoginUserDTO,
    @Res() response: Response,
  ): Promise<void> {
    return this.userService.loginUser(value, response);
  }

  @HttpCode(200)
  @Post('token')
  verifyToken(@Req() request: Request): Promise<object> {
    return this.userService.verifyToken(request);
  }
  @HttpCode(200)
  @Post('logout')
  logoutUser(@Res() response: Response): Promise<void> {
    return this.userService.logoutUser(response);
  }
}
