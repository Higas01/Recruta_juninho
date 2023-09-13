import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataTypes.INTEGER,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  age: number;

  @Column({
    allowNull: false,
  })
  email: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column({
    allowNull: false,
    type: DataTypes.TEXT,
  })
  description: string;

  @Column({
    allowNull: false,
  })
  level: string;

  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
  habilitys: string[];

  @Column({
    allowNull: false,
  })
  tel: string;

  @Column({
    allowNull: false,
  })
  state: string;
  @Column({
    allowNull: false,
  })
  city: string;
}
