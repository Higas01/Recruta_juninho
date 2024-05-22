import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_USER,
        signOptions: {
          expiresIn: '7d',
        },
      })
    }),
  ],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [UserService, ...userProviders],
})
export class UserModule {}
