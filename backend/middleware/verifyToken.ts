import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const verifyToken = (req:any, res:any, next:any) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN!, (err:any, decoded:any) => {
    if(err) return res.status(403).json({message: "Anda Tidak Login. Login Terlebih Dahulu"})
    req.email = decoded.email
    next()
  })
}