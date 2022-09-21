"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const rumahKosModel_1 = require("../models/rumahKosModel");
const UsersModel_1 = require("../models/UsersModel");
require("dotenv").config();
const KosanDB = new sequelize_typescript_1.Sequelize({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASES,
    host: process.env.HOST,
    dialect: "mysql",
    models: [rumahKosModel_1.RumahKos, rumahKosModel_1.KamarKos, UsersModel_1.Users]
});
exports.default = KosanDB;
