import express from "express";
import getRumahKos from "../controllers/kosan"
import { Register, getUsers, Login, Logout } from '../controllers/user';
import { verifyToken } from "../middleware/verifyToken";
import { RefreshToken } from "../controllers/refreshToken";

const router = express.Router()

router.get("/kosan", verifyToken, getRumahKos)
router.get("/users", verifyToken, getUsers)
router.post("/users", Register)
router.post("/login", Login)
router.get("/token", RefreshToken)
router.delete("/logout", Logout)


// router.post("/test", getUsersByEmail)



export default router