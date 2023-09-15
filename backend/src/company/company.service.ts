import {
  BadRequestException,
  Inject,
  Injectable,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Company } from './company.entity';
import { CreateCompanyDTO } from '../dto/create.company.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import { UpdateCompanyDTO } from 'src/dto/update.company.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginCompanyDTO } from 'src/dto/login.company.dto';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';

@Injectable()
export class CompanyService {
  constructor(
    private cloudinary: CloudinaryService,
    @Inject('COMPANYS_REPOSITORY')
    private companyRepository: typeof Company,
    private jwtService: JwtService,
  ) {}

  async createCompany(
    value: CreateCompanyDTO,
    photo?: Express.Multer.File,
  ): Promise<object> {
    try {
      const existingCompany = await this.companyRepository.findOne({
        where: {
          email: value.email,
        },
      });

      if (existingCompany) {
        throw new BadRequestException('Email já cadastrado');
      }

      let companyForCreate = {};
      const hash = await bcrypt.hash(value.password, 10);
      if (photo) {
        let upload: UploadApiResponse | UploadApiErrorResponse;
        upload = await this.cloudinary.uploadImage(photo).catch(() => {
          throw new BadRequestException('Tipo de arquivo inválido');
        });
        companyForCreate = {
          email: value.email,
          password: hash,
          description: value.description,
          name: value.name,
          photo: upload.url,
          city: value.city,
          state: value.state,
        };
      } else {
        companyForCreate = {
          email: value.email,
          password: hash,
          description: value.description,
          name: value.name,
          city: value.city,
          state: value.state,
        };
      }

      const data = await this.companyRepository.create(companyForCreate);

      return {
        message: 'Empresa cadastrada com sucesso',
        id: data.id,
      };
    } catch (e) {
      throw e;
    }
  }

  async deleteCompany(
    @Res() response: Response,
    @Req() request: Request,
  ): Promise<void> {
    try {
      const id = Number(request.cookies['companyId']);

      if (!id) {
        throw new UnauthorizedException(
          'Você precisa esta autenticado para isso',
        );
      }

      const existingCompany = await this.companyRepository.findByPk(id);

      if (!existingCompany) {
        throw new BadRequestException('Empresa não existe');
      }

      await this.companyRepository.destroy({
        where: {
          id,
        },
      });

      response.clearCookie('token');
      response.clearCookie('companyId');

      response.status(200).json({
        message: 'Empresa excluída com sucesso',
      });
    } catch (e) {
      throw e;
    }
  }

  async updateCompany(
    value: UpdateCompanyDTO,
    photo: Express.Multer.File,
    @Req() request: Request,
  ): Promise<object> {
    try {
      const id = Number(request.cookies['companyId']);

      if (!id) {
        throw new UnauthorizedException(
          'Você precisa esta autenticado para isso',
        );
      }

      const existingCompany = await this.companyRepository.findByPk(id);

      if (!existingCompany) {
        throw new BadRequestException('Empresa não existe');
      }

      if (value.password) {
        const hash = await bcrypt.hash(value.password, 10);
        value.password = hash;
      }

      let companyForUpdate = {};
      if (photo) {
        let upload: UploadApiResponse | UploadApiErrorResponse;
        upload = await this.cloudinary.uploadImage(photo).catch(() => {
          throw new BadRequestException('Tipo de arquivo inválido');
        });
        companyForUpdate = {
          email: value.email,
          password: value.password,
          description: value.description,
          name: value.name,
          photo: upload.url,
          state: value.state,
          city: value.city,
        };
      } else {
        companyForUpdate = {
          email: value.email,
          password: value.password,
          description: value.description,
          name: value.name,
          city: value.city,
          state: value.state,
        };
      }

      await this.companyRepository.update(companyForUpdate, {
        where: {
          id,
        },
      });

      return {
        message: 'Empresa atualizada com sucesso',
      };
    } catch (e) {
      throw e;
    }
  }

  async loginCompany(
    value: LoginCompanyDTO,
    @Res() response: Response,
    @Req() request: Request,
  ): Promise<void> {
    try {
      const company = await this.companyRepository.findOne({
        where: {
          email: value.email,
        },
      });

      if (!company) {
        throw new BadRequestException('E-mail não cadastrado');
      }

      const isMatch = await bcrypt.compare(value.password, company.password);
      if (!isMatch) {
        throw new BadRequestException('Senha incorreta');
      }

      const token = await this.jwtService.signAsync({ sub: company.id });

      const expires = new Date();
      expires.setDate(expires.getDate() + 7);

      response.cookie('token', token, {
        expires: expires,
        httpOnly: true,
        sameSite: 'none',
      });

      response.status(200).json({
        message: 'Usuário logado com sucesso',
      });
    } catch (e) {
      throw e;
    }
  }

  async verifyToken(@Req() request: Request): Promise<object> {
    try {
      await this.jwtService.verify(request.cookies['token'], {
        secret: process.env.JWT_COMPANY,
      });
      return {
        message: 'Token válido',
      };
    } catch {
      throw new UnauthorizedException();
    }
  }

  async logoutCompany(@Res() response: Response) {
    try {
      response.clearCookie('token');

      response.status(200).json({
        message: 'Usuário deslogado com sucesso',
      });
    } catch (e) {
      throw e;
    }
  }
}
