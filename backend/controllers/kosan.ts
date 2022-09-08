import { RumahKos } from '../models/rumahKosModel';
import { Request, Response } from 'express';
import path from "path"

export const getRumahKos = async(req:Request, res:Response) => {
  try {
    const rumahkos = await RumahKos.findAll();
    res.json(rumahkos)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const inputRumahKos = async (req:any, res:any) => {

}

export const updateRumahKos = async (req:Request, res:Response) => {

}

export const deleteRumahKos = async (req:Request, res:Response) => {

}
