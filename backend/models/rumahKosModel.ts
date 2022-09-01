import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "rumahkos",
})
export class RumahKos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
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
  image!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imageUrl!: string;
}

@Table({
  timestamps: false,
  tableName: "kamarkos",
})

export class KamarKos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
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
  image!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imageUrl!: string;
}