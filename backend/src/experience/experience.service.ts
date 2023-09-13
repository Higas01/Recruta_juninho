import {
  BadRequestException,
  Injectable,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Experience } from './experience.entity';
import { CreateExperienceDTO } from 'src/dto/create.experience.dto';
import { User } from '../user/user.entity';
import { UpdateExperienceDTO } from 'src/dto/update.experience.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ExperienceService {
  constructor(
    @Inject('EXPERIENCES_REPOSITORY')
    private experienceRepository: typeof Experience,
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  async createExperience(
    value: CreateExperienceDTO,
    @Req() request: Request,
  ): Promise<object> {
    try {
      const token = request.cookies['token'];
      const decodedToken = await this.jwtService.verify(token, {
        secret: process.env.JWT_USER,
      });

      const id = decodedToken.sub;
      if (!id) {
        throw new UnauthorizedException(
          'Você precisa esta autenticado para isso',
        );
      }
      const existingUser = await this.userRepository.findByPk(id);

      if (!existingUser) {
        throw new BadRequestException('Usuário não existe');
      }

      const experienceForCreate = {
        userId: id,
        function: value.function,
        description: value.description,
        project_name: value.project_name,
        habilitys: value.habilitys,
      };
      const experience =
        await this.experienceRepository.create(experienceForCreate);

      return {
        message: 'Experiência registrada com sucesso',
        experience,
      };
    } catch (error) {
      throw error;
    }
  }

  async getByFK(@Req() request: Request, queryId: number): Promise<object> {
    try {
      const token = request.cookies['token'];
      let id: number;
      if (token) {
        const decodedToken = await this.jwtService.verify(token, {
          secret: process.env.JWT_USER,
        });

        const idToken = decodedToken.sub;
        id = idToken;
      } else {
        id = queryId;
      }
      const existingUser = await this.userRepository.findByPk(id);

      if (!existingUser) {
        throw new BadRequestException('Usuário não existe');
      }

      return this.experienceRepository.findAll({
        where: {
          userId: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async updateByID(value: UpdateExperienceDTO, id: number): Promise<Object> {
    try {
      const existingExperience = await this.experienceRepository.findByPk(id);

      if (!existingExperience) {
        throw new BadRequestException('ID não existente');
      }

      const experienceForUpdate = {
        function: value.function,
        project_name: value.project_name,
        description: value.description,
        habilitys: value.habilitys,
      };

      await this.experienceRepository.update(experienceForUpdate, {
        where: {
          id,
        },
      });

      return {
        message: 'Alteração realizada com sucesso',
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteExperience(id: number): Promise<object> {
    try {
      const existingExperience = await this.experienceRepository.findByPk(id);

      if (!existingExperience) {
        throw new BadRequestException('ID não existente');
      }

      await this.experienceRepository.destroy({
        where: {
          id,
        },
      });

      return {
        message: 'Experiência excluída com sucesso',
      };
    } catch (error) {
      throw error;
    }
  }
}
