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
exports.deleteRumahKos = exports.getKosanInfo = exports.inputRumahKos = exports.getRumahKos = exports.storage = void 0;
const rumahKosModel_1 = require("../models/rumahKosModel");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.storage = multer_1.default.diskStorage({
    destination: (request, file, callback) => {
        // ...Do your stuff here.
        callback(null, "./public/images/KosanImages");
    },
    filename: (req, file, callback) => {
        // ...Do your stuff here.
        callback(null, path_1.default.parse(file.originalname).name + '-' + Date.now() + path_1.default.extname(file.originalname));
    }
});
const getRumahKos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rumahkos = yield rumahKosModel_1.RumahKos.findAll({
            attributes: ['namakos', 'alamatkos', 'deskripsikos', 'image', 'id']
        });
        res.json(rumahkos);
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.getRumahKos = getRumahKos;
const inputRumahKos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const namakos = req.body.name;
    const alamatkos = req.body.address;
    const deskripsikos = req.body.detail;
    let finalImageURL = req.protocol + '://' + req.get('host') + '/images/KosanImages/' + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename);
    try {
        yield rumahKosModel_1.RumahKos.create({
            namakos: namakos,
            alamatkos: alamatkos,
            deskripsikos: deskripsikos,
            image: finalImageURL
        });
        return res.status(201).json({ message: "Berhasil Menambahkan Rumah Kos" });
    }
    catch (error) {
        return res.status(409).json({ message: "Nama Kosan Telah Digunakan" });
    }
});
exports.inputRumahKos = inputRumahKos;
const getKosanInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kosan = yield rumahKosModel_1.RumahKos.findOne({
        where: {
            namakos: req.params.namakos
        }
    });
    if (!kosan)
        return res.status(404).json({ message: "Kosan tidak ada" });
    const kosId = kosan.id;
    const name = kosan.namakos;
    const address = kosan.alamatkos;
    const detail = kosan.deskripsikos;
    const image = kosan.image;
    res.json({ kosId, name, address, detail, image });
});
exports.getKosanInfo = getKosanInfo;
const deleteRumahKos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteRumahKos = deleteRumahKos;
