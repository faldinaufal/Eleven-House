import { KamarKos } from "../models/rumahKosModel";
import { Request, Response } from 'express';
import multer from 'multer';
import path from "path"

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

export const peyimpanan = multer.diskStorage({
  destination: (
    request: Request,
    file: Express.Multer.File,
    callback: DestinationCallback
): void => {
    // ...Do your stuff here.
    callback(null, "./public/images/RoomImages")
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

export const getKamarKos = async(req:Request, res:Response) => {
  try {
    const rumahkos = await KamarKos.findAll({
      attributes: ['namakamar', 'deskripsikamar', "image"]
    });
    res.json(rumahkos)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const inputKamarKos = async (req:Request, res:Response) => {
  const {namakamar, deskripsikamar  } = req.body
  
  let finalImageURL = req.protocol + '://' + req.get('host') + '/images/RoomImages/' + req.file?.filename 
  try {
    await KamarKos.create({
      namakamar : namakamar,
      deskripsikamar : deskripsikamar,  
      image : finalImageURL
    })
    res.json({message: "Berhasil Menambahkan Kamar Kos"})
  } catch (error:any) {
    return res.send(error)
  }
}