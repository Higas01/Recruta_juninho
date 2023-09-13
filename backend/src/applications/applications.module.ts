import { Module } from '@nestjs/common';
import { ApplicationProviders } from './applications.provider';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [...ApplicationProviders, ApplicationsService],
  controllers: [ApplicationsController],
  exports: [...ApplicationProviders],
})
export class ApplicationsModule {}
