"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const kosan_1 = require("../controllers/kosan");
const user_1 = require("../controllers/user");
const kamarkos_1 = require("../controllers/kamarkos");
const multer_1 = __importDefault(require("multer"));
const verifyToken_1 = require("../middleware/verifyToken");
const refreshToken_1 = require("../controllers/refreshToken");
const authentication_1 = require("../middleware/authentication");
const upload = (0, multer_1.default)({ storage: kosan_1.storage });
const uploadKamar = (0, multer_1.default)({
    storage: kamarkos_1.peyimpanan
});
const router = express_1.default.Router();
//kosan
router.get("/api/kosan", kosan_1.getRumahKos);
router.get("/api/kosan/:namakos", kosan_1.getKosanInfo);
router.post("/api/kosan", upload.single('image'), verifyToken_1.verifyToken, kosan_1.inputRumahKos);
router.get("/api/kamar/:kosanId", kamarkos_1.getKamarKosByKosID);
router.get("/api/room/:id", kamarkos_1.getKamarByID);
router.get("/api/room/status/:status", kamarkos_1.getKamarByStatus);
router.get("/api/kamar", kamarkos_1.getKamarKos);
router.patch("/api/room/:id", kamarkos_1.UpdateKamar);
router.post("/api/kamar", uploadKamar.single('image'), verifyToken_1.verifyToken, kamarkos_1.inputKamarKos);
///User
router.get("/api/users", verifyToken_1.verifyToken, user_1.getUsers);
router.get("/api/users/:nama", user_1.getSingleUsers);
router.post("/api/register", user_1.Register);
//authentication
router.post("/api/login", user_1.Login);
router.delete("/api/logout", user_1.Logout);
router.get("/api/token", refreshToken_1.RefreshToken);
router.get("/api/auth", authentication_1.authentication);
// router.post("/test", getUsersByEmail)
exports.default = router;
