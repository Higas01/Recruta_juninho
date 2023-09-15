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
} from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDTO } from 'src/dto/create.experience.dto';
import { UpdateExperienceDTO } from 'src/dto/update.experience.dto';
import { Request } from 'express';

@Controller('experience')
export class ExperienceController {
  constructor(private experienceService: ExperienceService) {}

  @HttpCode(201)
  @Post()
  createExperience(
    @Req() request: Request,
    @Body() value: CreateExperienceDTO,
  ): Promise<object> {
    return this.experienceService.createExperience(value, request);
  }
  @HttpCode(201)
  @Get()
  getExperience(@Req() request: Request): Promise<object> {
    return this.experienceService.getByToken(request);
  }

  @HttpCode(200)
  @Get(':id')
  getByFK(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    queryId: number,
  ): Promise<object> {
    return this.experienceService.getByID(queryId);
  }

  @HttpCode(200)
  @Put(':id')
  updateByID(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,

    @Body() value: UpdateExperienceDTO,
  ): Promise<object> {
    return this.experienceService.updateByID(value, id);
  }

  @HttpCode(200)
  @Delete(':id')
  deleteExperience(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<object> {
    return this.experienceService.deleteExperience(id);
  }
}
