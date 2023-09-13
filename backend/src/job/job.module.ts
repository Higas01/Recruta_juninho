import { Module } from '@nestjs/common';
import { jobProviders } from './job.providers';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { CompanyModule } from 'src/company/company.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [CompanyModule, JwtModule],
  providers: [...jobProviders, JobService],
  controllers: [JobController],
  exports: [JobService],
})
export class JobModule {}
