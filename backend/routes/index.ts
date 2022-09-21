import express from "express";
import { getKosanInfo, getRumahKos, inputRumahKos, storage } from '../controllers/kosan';
import { Register, getUsers, Login, Logout, getSingleUsers } from '../controllers/user';
import { getKamarKos, peyimpanan, inputKamarKos, getKamarKosByKosID, getKamarByID, UpdateKamar, getKamarByStatus } from '../controllers/kamarkos';
import multer from "multer";
import { verifyToken} from '../middleware/verifyToken';
import { RefreshToken } from "../controllers/refreshToken";
import { authentication } from "../middleware/authentication";

const upload = multer({storage})
const uploadKamar = multer({
  storage : peyimpanan
})
const router = express.Router()

//kosan
router.get("/api/kosan", getRumahKos)
router.get("/api/kosan/:namakos", getKosanInfo)
router.post("/api/kosan", upload.single('image'), verifyToken, inputRumahKos)
router.get("/api/kamar/:kosanId", getKamarKosByKosID)
router.get("/api/room/:id", getKamarByID)
router.get("/api/room/status/:status", getKamarByStatus)
router.get("/api/kamar", getKamarKos)
router.patch("/api/room/:id", UpdateKamar)
router.post("/api/kamar", uploadKamar.single('image'), verifyToken, inputKamarKos)

///User
router.get("/api/users", verifyToken, getUsers)
router.get("/api/users/:nama", getSingleUsers)
router.post("/api/register", Register)

//authentication
router.post("/api/login", Login)
router.delete("/api/logout", Logout)
router.get("/api/token", RefreshToken)
router.get("/api/auth", authentication)

// router.post("/test", getUsersByEmail)



export default router