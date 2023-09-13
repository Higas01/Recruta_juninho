import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { Company } from '../company/company.entity';
import { Applications } from '../applications/applications.entity';
import { Experience } from '../experience/experience.entity';
import { Job } from '../job/job.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(process.env.DATABASE_URL);
      sequelize.addModels([User, Company, Applications, Experience, Job]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
