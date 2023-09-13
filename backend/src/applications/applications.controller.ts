import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Request } from 'express';

@Controller('application')
export class ApplicationsController {
  constructor(private applicatiosService: ApplicationsService) {}

  @HttpCode(201)
  @Post()
  createApplication(
    @Query('jobId') jobID: number,
    @Req() request: Request,
  ): Promise<object> {
    return this.applicatiosService.createApplication(jobID, request);
  }
  @HttpCode(200)
  @Get()
  getForFK(@Query('jobId') jobID: number): Promise<object> {
    return this.applicatiosService.getCandidatesForJob(jobID);
  }
}
