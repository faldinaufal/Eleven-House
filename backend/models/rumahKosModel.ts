import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "rumahkos",
})
export class RumahKos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  namakos!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  alamatkos!: string;
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
}