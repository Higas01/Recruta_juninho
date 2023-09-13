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
  Query,
  Req,
} from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDTO } from 'src/dto/create.job.dto';
import { UpdateJobDTO } from 'src/dto/update.job.dto';
import { Request } from 'express';

@Controller('job')
export class JobController {
  constructor(private jobService: JobService) {}

  @HttpCode(201)
  @Post()
  createJob(
    @Body() value: CreateJobDTO,
    @Req() request: Request,
  ): Promise<object> {
    return this.jobService.createJob(value, request);
  }

  @HttpCode(200)
  @Get()
  getAllJobs(
    @Query('search') querySearch: string,
    @Query('level') queryLevel: string,
    @Query('state') queryState: string,
    @Query('city') queryCity: string,
  ): Promise<object> {
    if (querySearch || queryLevel || queryState || queryCity) {
      return this.jobService.filterJobs(
        querySearch,
        queryLevel,
        queryState,
        queryCity,
      );
    }

    return this.jobService.getAllJobs();
  }

  @Get('fk')
  getByFk(@Req() request: Request) {
    return this.jobService.getByFK(request);
  }

  @Get(':id')
  getById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.jobService.getByID(id);
  }

  @HttpCode(200)
  @Put(':id')
  updateJob(
    @Body() value: UpdateJobDTO,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.jobService.updateJobs(value, id);
  }
  @HttpCode(200)
  @Delete(':id')
  deleteJob(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.jobService.deleteJob(id);
  }
}
