import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';

@Table
export class Experience extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataTypes.INTEGER,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    onDelete: 'CASCADE',
  })
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @Column({
    allowNull: false,
  })
  project_name: string;

  @Column({
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  })
  habilitys: string[];

  @Column
  function: string;
}
