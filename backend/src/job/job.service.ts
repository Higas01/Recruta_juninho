import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { Job } from './job.entity';
import { Company } from 'src/company/company.entity';
import { CreateJobDTO } from 'src/dto/create.job.dto';
import { Op } from 'sequelize';
import { UpdateJobDTO } from 'src/dto/update.job.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JobService {
  constructor(
    @Inject('JOBS_REPOSITORY')
    private jobService: typeof Job,
    @Inject('COMPANYS_REPOSITORY')
    private companyService: typeof Company,
    private jwtService: JwtService,
  ) {}
  async createJob(
    value: CreateJobDTO,
    @Req() request: Request,
  ): Promise<object> {
    try {
      const token = request.cookies['token'];
      const decodedToken = await this.jwtService.verify(token, {
        secret: process.env.JWT_COMPANY,
      });

      const id = decodedToken.sub;

      if (!id) {
        throw new UnauthorizedException(
          'Você precisa esta autenticado para isso',
        );
      }

      const existingCompany = await this.companyService.findByPk(id);

      if (!existingCompany) {
        throw new BadRequestException('Empresa não existe');
      }

      const habilitysLowerCase = value.habilitys.map((hability) =>
        hability.toLowerCase(),
      );

      const createForJob = {
        name: value.name,
        level: value.level,
        habilitys: habilitysLowerCase,
        type_of_contract: value.type_of_contract,
        sallary: value.sallary,
        companyId: id,
        remote: value.remote,
        requirements: value.requirements,
        responsibilities: value.responsibilities,
      };

      await this.jobService.create(createForJob);

      return {
        message: 'Vaga cadastrada com sucesso',
      };
    } catch (e) {
      throw e;
    }
  }

  async getAllJobs(): Promise<object> {
    try {
      return this.jobService.findAll({
        include: [
          {
            model: Company,
            attributes: ['state', 'city'],
          },
        ],
      });
    } catch (e) {
      throw e;
    }
  }

  async getByFK(@Req() request: Request) {
    const token = request.cookies['token'];
    const decodedToken = await this.jwtService.verify(token, {
      secret: process.env.JWT_COMPANY,
    });

    const id = decodedToken.sub;

    const data = await this.jobService.findAll({
      where: {
        companyId: id,
      },
    });

    return data;
  }

  async filterJobs(
    querySearch: string,
    queryLevel: string,
    queryState: string,
    queryCity: string,
  ) {
    try {
      let searchConditions: any;

      if (querySearch) {
        const search = querySearch.split('-').slice(1);
        const searchToLowerCase = search.map((term) => term.toLowerCase());
        searchConditions = searchToLowerCase.map((term) => ({
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `%${term}%`,
              },
            },
            {
              level: {
                [Op.iLike]: `%${queryLevel}%`,
              },
            },
            {
              habilitys: {
                [Op.contains]: [term],
              },
            },
          ],
        }));

        if (querySearch && !queryCity && !queryLevel && !queryState) {
          return this.jobService.findAll({
            where: {
              [Op.or]: [...searchConditions],
            },
          });
        }

        if (querySearch && queryLevel && queryCity && queryState) {
          return this.jobService.findAll({
            where: {
              [Op.and]: [
                ...searchConditions,
                {
                  level: {
                    [Op.iLike]: `%${queryLevel}%`,
                  },
                },
                {
                  '$company.state$': {
                    [Op.iLike]: `%${queryState}%`,
                  },
                },
                {
                  '$company.city$': {
                    [Op.iLike]: `%${queryCity}%`,
                  },
                },
              ],
            },
            include: [
              {
                model: Company,
                as: 'company',
              },
            ],
          });
        }

        if (querySearch && queryLevel) {
          return this.jobService.findAll({
            where: {
              [Op.and]: [
                ...searchConditions,
                {
                  level: {
                    [Op.iLike]: `%${queryLevel}%`,
                  },
                },
              ],
            },
          });
        }

        if (querySearch && queryCity && queryState) {
          return this.jobService.findAll({
            where: {
              [Op.and]: [
                ...searchConditions,

                {
                  '$company.state$': {
                    [Op.iLike]: `%${queryState}%`,
                  },
                },
                {
                  '$company.city$': {
                    [Op.iLike]: `%${queryCity}%`,
                  },
                },
              ],
            },
            include: [
              {
                model: Company,
                as: 'company',
              },
            ],
          });
        }
      } else if (queryLevel && !queryCity && !queryState) {
        return this.jobService.findAll({
          where: {
            [Op.and]: [
              {
                level: {
                  [Op.iLike]: `%${queryLevel}%`,
                },
              },
            ],
          },
        });
      } else if (queryCity && queryState && !queryLevel) {
        return this.jobService.findAll({
          where: {
            [Op.and]: [
              {
                '$company.state$': {
                  [Op.iLike]: `%${queryState}%`,
                },
              },
              {
                '$company.city$': {
                  [Op.iLike]: `%${queryCity}%`,
                },
              },
            ],
          },
          include: [
            {
              model: Company,
              as: 'company',
            },
          ],
        });
      } else {
        return this.jobService.findAll({
          where: {
            [Op.and]: [
              {
                level: {
                  [Op.iLike]: `%${queryLevel}%`,
                },
              },
              {
                '$company.state$': {
                  [Op.iLike]: `%${queryState}%`,
                },
              },
              {
                '$company.city$': {
                  [Op.iLike]: `%${queryCity}%`,
                },
              },
            ],
          },
          include: [
            {
              model: Company,
              as: 'company',
            },
          ],
        });
      }
    } catch (e) {
      throw e;
    }
  }

  async updateJobs(value: UpdateJobDTO, id: number): Promise<object> {
    try {
      const existingJob = await this.jobService.findByPk(id);

      if (!existingJob) {
        throw new BadRequestException('Vaga não existe');
      }

      const jobForUpdate = {
        name: value.name,
        level: value.level,
        habilitys: value.habilitys,
        sallary: value.sallary,
        type_of_contract: value.type_of_contract,
        remote: value.remote,
        requirements: value.requirements,
        responsibilities: value.responsibilities,
      };
      await this.jobService.update(jobForUpdate, {
        where: {
          id,
        },
      });

      return {
        message: 'Vaga atualizado com sucesso',
      };
    } catch (e) {
      throw e;
    }
  }

  async getByID(id: number) {
    try {
      const job = await this.jobService.findOne({
        where: { id },
        include: [
          {
            model: Company,
            attributes: ['name', 'city', 'state', 'photo', 'description'],
          },
        ],
      });
      if (!job) {
        throw new NotFoundException('Vaga não existe');
      }

      return [job];
    } catch (e) {
      throw e;
    }
  }

  async deleteJob(id: number): Promise<object> {
    try {
      const existingJob = await this.jobService.findByPk(id);

      if (!existingJob) {
        throw new BadRequestException('Vaga não existe');
      }

      await this.jobService.destroy({
        where: {
          id,
        },
      });

      return {
        message: 'Vaga apagada com sucesso',
      };
    } catch (e) {
      throw e;
    }
  }
}
