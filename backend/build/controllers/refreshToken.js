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
exports.RefreshToken = void 0;
const UsersModel_1 = require("../models/UsersModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const RefreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken)
            return res.sendStatus(401);
        const user = yield UsersModel_1.Users.findAll({
            where: {
                refreshToken: refreshToken
            }
        });
        if (!user[0])
            return res.sendStatus(403);
        jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN, (err) => {
            if (err)
                res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].nama;
            const email = user[0].email;
            const nohandphone = user[0].nohandphone;
            const accessToken = jsonwebtoken_1.default.sign({ userId, name, email, nohandphone }, process.env.ACCESS_TOKEN, {
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.RefreshToken = RefreshToken;
