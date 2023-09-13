import { Job } from './job.entity';

export const jobProviders = [
  {
    provide: 'JOBS_REPOSITORY',
    useValue: Job,
  },
];
