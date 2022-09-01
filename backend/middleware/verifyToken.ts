import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { Request, Response } from 'express';
import { Users } from '../models/UsersModel';


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

export const RefreshToken = async (req:Request, res:Response) => {
  try {
    const refreshToken = req.cookies.refreshToken
    console.log(req.cookies)
    if(!refreshToken) return res.sendStatus(401)
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken
      }
    })
    if(!user[0]) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN!, (err:any, decoded:any) => {
      if(err) res.sendStatus(403)
      const userId = user[0].id
      const name = user[0].nama
      const email = user[0].email

      const accessToken = jwt.sign({userId,name,email}, process.env.ACCESS_TOKEN!, {
        expiresIn: '30s'
      })
      res.json({accessToken})
    })
  } catch (error) {
    console.log(error)
  }
}