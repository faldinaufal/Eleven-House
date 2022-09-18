import { RumahKos } from '../models/rumahKosModel';
import { Request, Response } from 'express';
import multer from 'multer';
import path from "path"

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

export const storage = multer.diskStorage({
  destination: (
    request: Request,
    file: Express.Multer.File,
    callback: DestinationCallback
): void => {
    // ...Do your stuff here.
    callback(null, "./public/images/KosanImages")
},

filename: (
    req: Request, 
    file: Express.Multer.File, 
    callback: FileNameCallback
): void => {
    // ...Do your stuff here.
    callback(
      null,
      path.parse(file.originalname).name + '-' + Date.now() + path.extname(file.originalname)
    )
  }
})

export const getRumahKos = async(req:Request, res:Response) => {
  try {
    const rumahkos = await RumahKos.findAll({
      attributes: ['namakos', 'alamatkos', 'deskripsikos' ,'image']
    });
    res.json(rumahkos)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const inputRumahKos = async (req:Request, res:Response) => {
  const namakos = req.body.name
  const alamatkos = req.body.address
  const deskripsikos = req.body.detail
  
  let finalImageURL = req.protocol + '://' + req.get('host') + '/images/KosanImages/' + req.file?.filename 
  try {
    await RumahKos.create({
      namakos : namakos,
      alamatkos : alamatkos,
      deskripsikos : deskripsikos,  
      image : finalImageURL
    })
    return res.status(201).json({message: "Berhasil Menambahkan Rumah Kos"})
  } catch (error:any) {
    return res.status(409).json({message:"Nama Kosan Telah Digunakan"})
  }
}

export const updateRumahKos = async (req:Request, res:Response) => {

}

export const deleteRumahKos = async (req:Request, res:Response) => {

}
