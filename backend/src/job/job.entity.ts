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
import { Company } from '../company/company.entity';

@Table
export class Job extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Company)
  @Column({
    allowNull: false,
  })
  companyId: number;

  @BelongsTo(() => Company, 'companyId')
  company: Company;

  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  level: string;

  @Column({
    allowNull: false,
  })
  type_of_contract: string;

  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  })
  habilitys: string[];

  @Column({
    allowNull: false,
  })
  sallary: string;

  @Column({
    allowNull: false,
  })
  remote: boolean;

  @Column({
    allowNull: false,
    type: DataTypes.TEXT,
  })
  requirements: string;
  @Column({
    allowNull: false,
    type: DataTypes.TEXT,
  })
  responsibilities: string;
}
