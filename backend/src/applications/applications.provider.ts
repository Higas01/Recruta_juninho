import { Applications } from './applications.entity';

export const ApplicationProviders = [
  {
    provide: 'APPLICATIONS_REPOSITORY',
    useValue: Applications,
  },
];
