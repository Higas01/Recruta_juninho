import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  Req,
} from '@nestjs/common';
import { Applications } from './applications.entity';
import { User } from 'src/user/user.entity';
import { Job } from 'src/job/job.entity';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ApplicationsService {
  constructor(
    @Inject('APPLICATIONS_REPOSITORY')
    private applicationsRepository: typeof Applications,
    private jwtService: JwtService,
  ) {}

  async createApplication(
    jobID: number,
    @Req() request: Request,
  ): Promise<object> {
    try {
      const token = request.cookies['token'];
      const decodedToken = await this.jwtService.verify(token, {
        secret: process.env.JWT_USER,
      });

      const userID = decodedToken.sub;

      if (!jobID || !userID) {
        throw new BadRequestException(
          'ID da vaga e ID do usuário são obrigatórios',
        );
      }

      const applicationForCreate = {
        userId: userID,
        jobId: jobID,
      };

      const existingApplication = await this.applicationsRepository.findOne({
        where: {
          userId: userID,
          jobId: jobID,
        },
      });

      if (existingApplication) {
        throw new BadRequestException('Você já se candidatou nesta vaga');
      }

      await this.applicationsRepository.create(applicationForCreate);
      return {
        message: 'Candidatura efetuada com sucesso',
      };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getCandidatesForJob(jobID: number) {
    try {
      const candidates = await this.applicationsRepository.findAll({
        where: {
          jobId: jobID,
        },
        include: {
          model: User,
          attributes: [
            'name',
            'email',
            'description',
            'habilitys',
            'level',
            'age',
            'tel',
            'id',
          ],
        },
      });

      if (candidates.length === 0) {
        throw new NotFoundException(
          'Não existe nenhum candidato para a vaga até o momento',
        );
      }

      return candidates;
    } catch (e) {
      throw e;
    }
  }
}
