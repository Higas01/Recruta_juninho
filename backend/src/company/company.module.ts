import { Module } from '@nestjs/common';
import { companyProviders } from './company.provider';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CloudinaryModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_COMPANY,
        signOptions: {
          expiresIn: '7d',
        },
      })
    }),
  ],
  providers: [...companyProviders, CompanyService],
  controllers: [CompanyController],
  exports: [CompanyService, ...companyProviders],
})
export class CompanyModule {}
