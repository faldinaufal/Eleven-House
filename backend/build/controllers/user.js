"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.Logout = exports.Login = exports.Register = exports.getSingleUsers = exports.getUsers = void 0;
const UsersModel_1 = require("../models/UsersModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UsersModel_1.Users.findAll({
            attributes: ['nama', 'email', "nohandphone"]
        });
        res.json(users);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUsers = getUsers;
const getSingleUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UsersModel_1.Users.findOne({
        where: {
            nama: req.params.nama
        }
    });
    if (!user)
        return res.status(404).json({ message: "User tidak ditemukan" });
    const nama = user.nama;
    const email = user.email;
    const nohandphone = user.nohandphone;
    res.json({ nama, email, nohandphone });
});
exports.getSingleUsers = getSingleUsers;
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nama, email, password, confPassword, nohandphone } = req.body;
    if (password != confPassword)
        return res.status(400).json({ message: "Password Tidak Sama" });
    const salt = yield bcrypt_1.default.genSalt();
    const hashPassword = yield bcrypt_1.default.hash(password, salt);
    try {
        yield UsersModel_1.Users.create({
            nama: nama,
            email: email,
            password: hashPassword,
            nohandphone: nohandphone,
            role: "USER"
        });
        res.json({ message: "Anda Berhasil Mendaftar" });
    }
    catch (error) {
        return res.status(409).json({ message: error.message });
    }
});
exports.Register = Register;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UsersModel_1.Users.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = yield bcrypt_1.default.compare(req.body.password, user[0].password);
        if (!match)
            return res.status(400).json({ message: "Email atau Password Salah" });
        const userId = user[0].id;
        const name = user[0].nama;
        const email = user[0].email;
        const role = user[0].role;
        const accessToken = jsonwebtoken_1.default.sign({ userId, name, email }, process.env.ACCESS_TOKEN, {
            expiresIn: '15s'
        });
        const refreshToken = jsonwebtoken_1.default.sign({ userId, name, email }, process.env.REFRESH_TOKEN, {
            expiresIn: '1d'
        });
        yield UsersModel_1.Users.update({ refreshToken: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "lax"
        });
        res.json({ name, email, role, accessToken });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.Login = Login;
const Logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.cookies.refreshToken;
    console.log(req);
    if (!refreshToken)
        return res.sendStatus(204);
    const user = yield UsersModel_1.Users.findAll({
        where: {
            refreshToken: refreshToken
        }
    });
    if (!user)
        return res.sendStatus(204);
    const userId = user[0].id;
    yield UsersModel_1.Users.update({ refreshToken: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
});
exports.Logout = Logout;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UsersModel_1.Users.findOne({
        where: {
            email: req.params.email
        }
    });
    if (!user)
        return res.status(404).json({ message: "User tidak ditemukan" });
    const { nama, email, password, confPassword, nohandphone, role } = req.body;
    let hashPassword;
    if (password === '' || password === null) {
        hashPassword = user.password;
    }
    else {
        const salt = yield bcrypt_1.default.genSalt();
        hashPassword = yield bcrypt_1.default.hash(password, salt);
    }
    if (password != confPassword)
        return res.status(400).json({ message: "Password Tidak Sama" });
    try {
        yield UsersModel_1.Users.update({
            nama: nama,
            email: email,
            password: hashPassword,
            nohandphone: nohandphone,
            role: role
        }, {
            where: {
                email: user.email
            }
        });
        res.json({ message: "Anda Berhasil Mengganti Password" });
    }
    catch (error) {
        return res.status(409).json({ message: error.message });
    }
});
exports.update = update;
