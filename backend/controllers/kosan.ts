import { RumahKos } from '../models/rumahKosModel';

const getRumahKos = async(req:any,res:any) => {
  try {
    const rumahkos = await RumahKos.findAll();
    res.json(rumahkos)
  } catch (error) {
    console.log(error)
  }
}

export default getRumahKos