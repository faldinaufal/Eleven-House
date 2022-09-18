import express from "express";
import { getRumahKos, inputRumahKos, storage } from '../controllers/kosan';
import { Register, getUsers, Login, Logout } from '../controllers/user';
import { getKamarKos, peyimpanan, inputKamarKos } from '../controllers/kamarkos';
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
router.get("/kosan", getRumahKos)
router.post("/kosan", upload.single('image'), verifyToken, inputRumahKos)
router.get("/kamar", getKamarKos)
router.post("/kamar", uploadKamar.single('image'), verifyToken, inputKamarKos)

///User
router.get("/users", verifyToken, getUsers)
router.post("/register", Register)

//authentication
router.post("/login", Login)
router.delete("/logout", Logout)
router.get("/token", RefreshToken)
router.get("/auth", authentication)

// router.post("/test", getUsersByEmail)



export default router