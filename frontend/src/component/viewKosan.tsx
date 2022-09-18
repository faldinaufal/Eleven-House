import image1 from "../media/images/image-1.png"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { list } from "postcss";
import { Link } from "react-router-dom";

const Kosan = () => {
  const [rumahKos, setRumahKos] = useState<any[]>([])
  const [name, setName] = useState('')

  useEffect(()=> {
    getRumahKos()
  },[])

  const getRumahKos = async () => {
    const response = await axios.get("http://localhost:4000/kosan")
    setRumahKos(response.data)
  }

  return (
    <div>
      <div className="md:grid grid-cols-3 gap-x-20 pt-12 pb-10 gap-y-6  ">
          {rumahKos && rumahKos.map((list) => (
            <Link to={`/kosan/${list.namakos}`}>
              <div className='box border-4 rounded-xl w-96 p-2 text-center'>
                <img src={list.image} alt="" />
                <div className="pt-2">
                  <label className="font-rubik font-bold">{list.namakos}</label>
                </div>
              </div>
            </Link>
          ))} 
      </div>
    </div>
  )
}

export default Kosan