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

export const getKamarKosByKosID = async(req:Request, res:Response) => {
  const kamar = await KamarKos.findAll({
    where : {
      kosanId : req.params.kosanId,
    }
  })
  res.json(kamar)
}

export const getKamarByID = async(req:Request, res:Response) => {
  const kamar = await KamarKos.findOne({
    where : {
      id : req.params.id, 
    }
  })
  res.json(kamar)
}

export const getKamarByStatus = async(req:Request, res:Response) => {
  const kamar = await KamarKos.findAll({
    where : {
      status : req.params.status, 
    }
  })
  res.json(kamar)
}

export const getKamarKos = async(req:Request, res:Response) => {
  try {
    const rumahkos = await KamarKos.findAll();
    res.json(rumahkos)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const inputKamarKos = async (req:Request, res:Response) => {
  const {nama, detail, harga, kosId  } = req.body
  
  let finalImageURL = req.protocol + '://' + req.get('host') + '/images/RoomImages/' + req.file?.filename 
  try {
    await KamarKos.create({
      namakamar : nama,
      deskripsikamar : detail,
      harga : harga,
      kosanId : kosId,
      status : "Tersedia",
      image : finalImageURL
    })
    res.json({message: "Berhasil Menambahkan Kamar Kos"})
  } catch (error:any) {
    return res.send(error)
  }
}

export const UpdateKamar = async (req:Request, res:Response) => {
  try {
    await KamarKos.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(200)
  } catch (error:any) {
    console.log(error.message)
    res.status(400).json({message: "Anda Telah Memilih Kamar"})
  }
}