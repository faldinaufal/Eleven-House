import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany, PrimaryKey, HasOne } from "sequelize-typescript";
import { Users } from "./UsersModel";

@Table({
  timestamps: false,
  tableName: "rumahkos",
})
export class RumahKos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  namakos!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  alamatkos!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  deskripsikos!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image!: string;

  @HasMany (() => KamarKos)
  kamarkos!: KamarKos[]
}

@Table({
  timestamps: false,
  tableName: "kamarkos",
})

export class KamarKos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  namakamar!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  deskripsikamar!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  harga!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  status!: string;

  @ForeignKey(() => RumahKos)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  kosanId!: number;

  @BelongsTo(() => RumahKos)
  rumah! : RumahKos

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    unique: true
  })
  userId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  namauser!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  namakosan!: string
}