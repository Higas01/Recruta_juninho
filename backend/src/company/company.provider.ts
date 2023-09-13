import { Company } from './company.entity';

export const companyProviders = [
  {
    provide: 'COMPANYS_REPOSITORY',
    useValue: Company,
  },
];
