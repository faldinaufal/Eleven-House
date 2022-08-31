import { Users } from '../models/UsersModel';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import { Request, Response } from 'express';



dotenv.config()

export const getUsers = async (req:any,res:any) => {
  try {
    const users = await Users.findAll({
      attributes: ['nama', 'email', "nohandphone"]
    })
    res.json(users)
  } catch (error) {
    console.log(error)
  }
}

export const Register = async (req:any, res:any) => {
  const { nama, email, password, confPassword, nohandphone } = req.body;
  if (password != confPassword) return res.status(400).json({message: "Password Tidak Sama"})
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt)
  try {
    await Users.create({
      nama: nama,
      email: email,
      password: hashPassword,
      nohandphone: nohandphone
    })
    res.json({message: "Anda Berhasil Mendaftar"})
  } catch (error) {
    console.log(error)
  }
}

export const Login = async (req:Request, res:Response) => {
  try {
    const user = await Users.findAll({
      where:{
        email: req.body.email
      }
    })
    const match = await bcrypt.compare(req.body.password, user[0].password)
    if(!match) return res.status(400).json({message: "Password Salah"})
    const userId = user[0].id
    const name = user[0].nama
    const email = user[0].email
    const accessToken = jwt.sign({userId, name, email},process.env.ACCESS_TOKEN!, {
      expiresIn: '30s'
    })
    const refreshToken = jwt.sign({userId, name, email},process.env.REFRESH_TOKEN!, {
      expiresIn: '1d'
    })
    await Users.update({refresh_token:refreshToken},{
      where: {
        id: userId
      }
    })
    res.cookie('refreshToken',refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    })
    res.json({accessToken})
  } catch(error) {
    res.status(404).json({message: "Email tidak ditemukan"})
  }
}

export const Logout = async (req:Request, res:Response) => {
  const refreshToken = req.cookies.refreshToken
  if(!refreshToken) return res.sendStatus(204)
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken
    }
  })
  if(!user[0]) return res.sendStatus(204)

  const userId = user[0].id
  await Users.update({refresh_token: null}, {
    where: {
      id: userId
    }
  })
  res.clearCookie('refreshToken')
  return res.sendStatus(200)
}

// export const getUsersByEmail = async (req:any,res:any) => {
//   try {
//     const user = await Users.findAll({
//       where:{
//         email: req.body.email
//       }
//     })
//     res.json(user[0])
//   } catch (error) {
//     console.log(error)
//   }
// }