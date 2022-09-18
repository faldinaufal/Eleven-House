  import { Users } from '../models/UsersModel';
  import jwt from "jsonwebtoken"
  import { Request, Response } from 'express';

  export const RefreshToken = async (req:Request, res:Response) => {
    try {
      const refreshToken = req.cookies.refreshToken
      if(!refreshToken) return res.sendStatus(401)
      const user = await Users.findAll({
        where: {
          refreshToken: refreshToken
        }
      })
      if(!user[0]) return res.sendStatus(403)
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN!, (err:any) => {
        if(err) res.sendStatus(403)
        const userId = user[0].id
        const name = user[0].nama
        const email = user[0].email
        const nohandphone = user[0].nohandphone

        const accessToken = jwt.sign({userId,name,email,nohandphone}, process.env.ACCESS_TOKEN!, {
          expiresIn: '15s'
        })
        res.json({accessToken})
      })
    } catch (error) {
      console.log(error)
    }
  }