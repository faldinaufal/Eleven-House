import { Table, Model, Column, DataType, PrimaryKey, IsUUID } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: "users",
})
export class Users extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    
  })
  nama!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  email!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nohandphone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  role!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  refreshToken!: string;
}