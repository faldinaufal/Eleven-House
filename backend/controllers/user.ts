import { Users } from '../models/UsersModel';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
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
      nohandphone: nohandphone,
      role: "USER"
    })
    res.json({message: "Anda Berhasil Mendaftar"})
  } catch (error:any) {
    return res.status(409).json({message: error.message})
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
    if(!match) return res.status(400).json({message: "Email atau Password Salah"})
    const userId = user[0].id
    const name = user[0].nama
    const email = user[0].email   
    const role = user[0].role
    const accessToken = jwt.sign({userId, name, email},process.env.ACCESS_TOKEN!, {
      expiresIn: '15s'
    })
    const refreshToken = jwt.sign({userId, name, email},process.env.REFRESH_TOKEN!, {
      expiresIn: '1d'
    })
    await Users.update({refreshToken:refreshToken},{
      where: {
        id: userId
      }
    })
    res.cookie('refreshToken',refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax"
    })
    res.json({name, email, role, accessToken})
  } catch(error:any) {
    res.status(404).json({message: error.message})
  }
}


export const Logout = async (req:Request, res:Response) => {
  const refreshToken = req.cookies.refreshToken
  console.log(req)
  if(!refreshToken) return res.sendStatus(204)
  const user = await Users.findAll({
    where: {
      refreshToken: refreshToken
    }
  })
  if(!user) return res.sendStatus(204)

  const userId = user[0].id
  await Users.update({refreshToken: null}, {
    where: {
      id: userId
    }
  })
  res.clearCookie('refreshToken')
  return res.sendStatus(200)
}

export const update = async (req:Request, res:Response) => {
  const user = await Users.findOne({
    where: {
      email : req.params.email
    }
  })
  if(!user) return res.status(404).json({message: "User tidak ditemukan"})
  const { nama, email, password, confPassword, nohandphone, role } = req.body;
  let hashPassword
  if(password === '' || password === null){
    hashPassword = user.password
  } else {
    const salt = await bcrypt.genSalt();
    hashPassword = await bcrypt.hash(password, salt)
  }
  if (password != confPassword) return res.status(400).json({message: "Password Tidak Sama"})
  try {
    await Users.update({
      nama: nama,
      email: email,
      password: hashPassword,
      nohandphone: nohandphone,
      role: role
    }, {
      where: {
        email: user.email
      }
    })
    res.json({message: "Anda Berhasil Mengganti Password"})
  } catch (error:any) {
    return res.status(409).json({message: error.message})
  }
}