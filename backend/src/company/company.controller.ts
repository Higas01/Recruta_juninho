import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCompanyDTO } from 'src/dto/create.company.dto';
import { LoginCompanyDTO } from 'src/dto/login.company.dto';
import { Request, Response } from 'express';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @HttpCode(201)
  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  createCompany(
    @Body() value: CreateCompanyDTO,
    @UploadedFile() photo?: Express.Multer.File,
  ): Promise<object> {
    return this.companyService.createCompany(value, photo);
  }

  @HttpCode(200)
  @Delete()
  deleteCompany(
    @Res() response: Response,
    @Req() request: Request,
  ): Promise<void> {
    return this.companyService.deleteCompany(response, request);
  }

  @HttpCode(200)
  @Put()
  @UseInterceptors(FileInterceptor('photo'))
  updateCompany(
    @Body() value: any,
    @UploadedFile() photo: Express.Multer.File,
    @Req() request: Request,
  ): Promise<object> {
    return this.companyService.updateCompany(value, photo, request);
  }

  @HttpCode(200)
  @Post('login')
  loginCompany(
    @Body() value: LoginCompanyDTO,
    @Res() response: Response,
    @Req() request: Request,
  ): Promise<void> {
    return this.companyService.loginCompany(value, response, request);
  }
  @HttpCode(200)
  @Post('token')
  verifyToken(@Req() request: Request): Promise<object> {
    return this.companyService.verifyToken(request);
  }
  @HttpCode(200)
  @Post('logout')
  logoutCompany(@Res() response: Response): Promise<void> {
    return this.companyService.logoutCompany(response);
  }
}
