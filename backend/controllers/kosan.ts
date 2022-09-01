import { RumahKos } from '../models/rumahKosModel';
import { Request, Response } from 'express';

export const getRumahKos = async(req:Request, res:Response) => {
  try {
    const rumahkos = await RumahKos.findAll();
    res.json(rumahkos)
  } catch (error) {
    console.log(error)
  }
}

export const inputRumahKos = async (req:Request, res:Response) => {

}

export const updateRumahKos = async (req:Request, res:Response) => {

}

export const deleteRumahKos = async (req:Request, res:Response) => {

}
