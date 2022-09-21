import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';

const Kosan = () => {
  const [rumahKos, setRumahKos] = useState<any[]>([])

  useEffect(()=> {
    getRumahKos()
  },[])
 
  const getRumahKos = async () => {
    const response = await axios.get("http://localhost:4000/api/kosan")
    setRumahKos(response.data)
  } 

  return (
    <div className='grid grid-cols-3 mt-10 justify-items-center gap-y-10'>
      {rumahKos && rumahKos.map((list) => (
          <Link to={`/kosan/${list.namakos}`}>
             <Card className='items-center pt-10 w-96'>
              <CardHeader className='w-80'>
                <Typography>
                  <img src={list.image}/>
                </Typography>
              </CardHeader>
              <CardBody className='text-center'>
                <Typography>
                  <label className="font-rubik font-black text-lg">{list.namakos}</label>
                </Typography>
                <Typography>
                  <label className="font-rubik">{list.alamatkos}</label>
                </Typography>
              </CardBody>
             </Card>
          </Link>
      ))} 
    </div>
  )
}

export default Kosan