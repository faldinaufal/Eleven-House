import { Sequelize } from "sequelize-typescript";
import { KamarKos, RumahKos } from "../models/rumahKosModel";
import { Users } from "../models/UsersModel";

require("dotenv").config()

const KosanDB = new Sequelize({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASES,
  host: process.env.HOST,
  dialect: "mysql",
  models : [RumahKos, KamarKos, Users]
})

export default KosanDB