import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { Job } from '../job/job.entity';
@Table
export class Applications extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    onDelete: 'CASCADE',
  })
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @ForeignKey(() => Job)
  @Column({
    allowNull: false,
    onDelete: 'CASCADE',
  })
  jobId: number;

  @BelongsTo(() => Job, 'jobId')
  job: Job;
}
