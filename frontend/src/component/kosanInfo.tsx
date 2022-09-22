import { useParams, Link } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";

const KosanInfo = () => {
  let { namakos } = useParams()
  const [address, setAddress] = useState("")
  const [detail, setDetail] = useState("")
  const [image, setImage] = useState("")
  const [kosId, setKosId] = useState()
  const [msg, setMsg] = useState("")
  const [room, setRoom] = useState<any[]>([])

  useEffect(()=> {
    getRumahKosInfo()
    getKamarKos() 
  },[kosId])

  const getRumahKosInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/kosan/${namakos}`)
      setAddress(response.data.address)
      setDetail(response.data.detail)
      setImage(response.data.image)
      setKosId(response.data.kosId)
    } catch(error: any) {
      if(error.response) {
        setMsg(error.response.data.message)
      }
    }
  }
  
  const getKamarKos = () => {
    axios.get(`http://localhost:4000/api/kamar/${kosId}`).then((res) => {
      console.log(res.data)
      setRoom(res.data)
    })
  }

  if(msg) {
    return (
      <h1 className="container text-center text-3xl text-red-500 pt-10">{msg}</h1>
    )
  }

  return (
    <div className="container grid grid-cols-10 border-4 p-4 mt-10 bg-white rounded-3xl border-gray-600">
      <div className="col-start-2 col-span-2 font-rubik text-lg">
        <p>Nama Kos</p>
        <p>Alamat Kos</p>
        <p>Fasilitas</p>
      </div>
      <div className="col-start-4 col-span-5 font-rubik text-lg">
        <p>: {namakos}</p>
        <p>: {address}</p>
        <p>: {detail}</p>
      </div>
      <div className="col-start-2 col-span-8 border-4 mt-6 border-black">
        <img src={image}/> 
      </div>
      <div className="col-start-2 col-span-9 pt-8">
        <p>List Kamar :</p>
      </div>
      <div className="container justify-items-center col-start-2 col-span-8">
        <table> 
          <thead className="border-2 border-gray-500">
            <th className="border-2 border-gray-500 px-4">No</th>
            <th className="border-2 border-gray-500 px-4">Nama Kamar</th>
            <th className="border-2 border-gray-500 px-4">Status</th>
            <th className="border-2 border-gray-500 px-4">Penghuni</th>
            <th className="border-2 border-gray-500 px-4"></th>
          </thead>
          <tbody>
            {room && room.map((list, index) => (
              <tr>
              <td className="border-2 border-gray-500 px-4">{index+1}</td>
                <td className="border-2 border-gray-500 px-4">{list.namakamar}</td>
                <td className="border-2 border-gray-500 px-4">{list.status}</td>
                <td className="border-2 border-gray-500 px-4">{list.namauser}</td>
                <td className="border-2 border-gray-500 px-4 py-1">
                  {
                    list.status === 'Tersedia'  &&
                    <Link to={`/kosan/${namakos}/kamar/${list.id}`}>
                      <Button>Cek Kamar</Button>
                    </Link>
                  }
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default KosanInfo