import {
  Injectable,
  Inject,
  BadRequestException,
  UnauthorizedException,
  Res,
  Req,
} from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDTO } from 'src/dto/create.user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDTO } from 'src/dto/login.user.dto';
import { Response, Request } from 'express';
@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  async createUser(value: CreateUserDTO): Promise<object> {
    try {
      const existingUser = await this.userRepository.findOne({
        where: { email: value.email },
      });

      if (existingUser) {
        throw new BadRequestException('Usuário já existente');
      }

      const hash = await bcrypt.hash(value.password, 10);
      const userForCreate = {
        name: value.name,
        age: value.age,
        email: value.email,
        password: hash,
        description: value.description,
        level: value.level,
        habilitys: value.habilitys,
        tel: value.tel,
        state: value.state,
        city: value.city,
      };

      await this.userRepository.create(userForCreate);

      return {
        message: 'Usuário criado com sucesso',
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(
    @Res() response: Response,
    @Req() request: Request,
  ): Promise<void> {
    try {
      const id = Number(request.cookies['userId']);
      if (!id) {
        throw new UnauthorizedException(
          'Você precisa esta autenticado para isso',
        );
      }
      const existingUser = await this.userRepository.findByPk(id);

      if (!existingUser) {
        throw new BadRequestException('Usuário não existe');
      }

      await this.userRepository.destroy({
        where: {
          id,
        },
      });
      response.clearCookie('userId');
      response.clearCookie('token');
      response.status(200).json({
        message: 'Usuário deletado com sucesso',
      });
    } catch (e) {
      throw e;
    }
  }

  async loginUser(
    value: LoginUserDTO,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: value.email,
        },
      });

      if (!user) {
        throw new BadRequestException('E-mail não cadastrado');
      }

      const isMatch = await bcrypt.compare(value.password, user.password);
      if (!isMatch) {
        throw new BadRequestException('Senha incorreta');
      }

      const token = await this.jwtService.signAsync({ sub: user.id });

      const expires = new Date();
      expires.setDate(expires.getDate() + 7);

      response.cookie('token', token, {
        expires: expires,
        httpOnly: true,
      });

      response.status(200).json({
        message: 'Usuário autenticado com sucesso',
      });
    } catch (e) {
      throw e;
    }
  }

  async verifyToken(@Req() request: Request): Promise<object> {
    try {
      await this.jwtService.verify(request.cookies['token'], {
        secret: process.env.JWT_USER,
      });
      return {
        message: 'Token válido',
      };
    } catch {
      throw new UnauthorizedException();
    }
  }

  async logoutUser(@Res() response: Response): Promise<void> {
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
