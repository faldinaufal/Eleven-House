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
exports.UpdateKamar = exports.inputKamarKos = exports.getKamarKos = exports.getKamarByStatus = exports.getKamarByID = exports.getKamarKosByKosID = exports.peyimpanan = void 0;
const rumahKosModel_1 = require("../models/rumahKosModel");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.peyimpanan = multer_1.default.diskStorage({
    destination: (request, file, callback) => {
        // ...Do your stuff here.
        callback(null, "./public/images/RoomImages");
    },
    filename: (req, file, callback) => {
        // ...Do your stuff here.
        callback(null, path_1.default.parse(file.originalname).name + '-' + Date.now() + path_1.default.extname(file.originalname));
    }
});
const getKamarKosByKosID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kamar = yield rumahKosModel_1.KamarKos.findAll({
        where: {
            kosanId: req.params.kosanId,
        }
    });
    res.json(kamar);
});
exports.getKamarKosByKosID = getKamarKosByKosID;
const getKamarByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kamar = yield rumahKosModel_1.KamarKos.findOne({
        where: {
            id: req.params.id,
        }
    });
    res.json(kamar);
});
exports.getKamarByID = getKamarByID;
const getKamarByStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kamar = yield rumahKosModel_1.KamarKos.findAll({
        where: {
            status: req.params.status,
        }
    });
    res.json(kamar);
});
exports.getKamarByStatus = getKamarByStatus;
const getKamarKos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rumahkos = yield rumahKosModel_1.KamarKos.findAll();
        res.json(rumahkos);
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.getKamarKos = getKamarKos;
const inputKamarKos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { nama, detail, harga, kosId } = req.body;
    let finalImageURL = req.protocol + '://' + req.get('host') + '/images/RoomImages/' + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename);
    try {
        yield rumahKosModel_1.KamarKos.create({
            namakamar: nama,
            deskripsikamar: detail,
            harga: harga,
            kosanId: kosId,
            status: "Tersedia",
            image: finalImageURL
        });
        res.json({ message: "Berhasil Menambahkan Kamar Kos" });
    }
    catch (error) {
        return res.send(error);
    }
});
exports.inputKamarKos = inputKamarKos;
const UpdateKamar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield rumahKosModel_1.KamarKos.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: "Anda Telah Memilih Kamar" });
    }
});
exports.UpdateKamar = UpdateKamar;
