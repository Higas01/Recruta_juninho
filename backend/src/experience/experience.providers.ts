import { Experience } from './experience.entity';

export const experienceProviders = [
  {
    provide: 'EXPERIENCES_REPOSITORY',
    useValue: Experience,
  },
];
