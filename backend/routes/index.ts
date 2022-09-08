import express from "express";
import { getRumahKos, inputRumahKos } from '../controllers/kosan';
import { Register, getUsers, Login, Logout } from '../controllers/user';
import { verifyToken, RefreshToken } from "../middleware/verifyToken";

const router = express.Router()

router.get("/kosan", getRumahKos)
router.post("/kosan", inputRumahKos)
router.get("/users", verifyToken, getUsers)
router.post("/register", Register)
router.post("/login", Login)
router.get("/token", RefreshToken)
router.delete("/logout", Logout)


// router.post("/test", getUsersByEmail)



export default router