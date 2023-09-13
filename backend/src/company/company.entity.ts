import { DataTypes } from 'sequelize';
import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Company extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
  })
  id: number;
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataTypes.TEXT,
  })
  photo: string;
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
  })
  description: string;
  @Column({
    allowNull: false,
  })
  state: string;
  @Column({
    allowNull: false,
  })
  city: string;
}
