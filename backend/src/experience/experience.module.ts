import { Module } from '@nestjs/common';
import { experienceProviders } from './experience.providers';
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, JwtModule],
  providers: [...experienceProviders, ExperienceService],
  controllers: [ExperienceController],
  exports: [ExperienceService],
})
export class ExperienceModule {}
