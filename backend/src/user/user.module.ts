import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret:
        'dsalçgjzxbxz,mbxzn,21k4h12io421lkçjdsçaldçzx.,mcxzlczxkhcakhyckfjhsfhafioasyfasfyasufiysaiu4y1u2iy421ui4',
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [UserService, ...userProviders],
})
export class UserModule {}
