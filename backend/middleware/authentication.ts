import { Users } from '../models/UsersModel';
import { Request, Response } from 'express';

export const authentication = async (req:Request, res:Response) => {
  try {
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken) return res.sendStatus(401)
    const user = await Users.findAll({
      where: {
        refreshToken: refreshToken
      }
    })
    if(!user[0]) return res.sendStatus(403)
    const name = user[0].nama
    const email = user[0].email
    const nohandphone = user[0].nohandphone
    const role = user[0].role
    const token = user[0].refreshToken
    
    res.json({name, email,nohandphone,role,token})
  } catch (error) {
    console.log(error)
  }
}