import { RumahKos } from '../models/rumahKosModel';
import { Request, Response } from 'express';
import multer, {FileFilterCallback} from 'multer';
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
      path.parse(file.originalname).name + "-" + path.extname(file.originalname)
    )
  }
})


export const getRumahKos = async(req:Request, res:Response) => {
  try {
    const rumahkos = await RumahKos.findAll();
    res.json(rumahkos)
  } catch (error:any) {
    console.log(error.message)
  }
}

export const inputRumahKos = async (req:Request, res:Response) => {
  let finalImageURL = req.protocol + '://' + req.get('host') + '/images/KosanImages/' + req.file?.filename
  res.json({message: "succes", image: finalImageURL})
}

export const updateRumahKos = async (req:Request, res:Response) => {

}

export const deleteRumahKos = async (req:Request, res:Response) => {

}
