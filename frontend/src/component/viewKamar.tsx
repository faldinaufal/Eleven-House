import { useParams, Link } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';

const KamarInfo = () => {
  let { id } = useParams()
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [detail, setDetail] = useState("")
  const [image, setImage] = useState("")
  const [msg, setMsg] = useState("")

  useEffect(() => {
    getKamarKos()
  })
  
  const getKamarKos = async () => {
    await axios.get(`http://localhost:4000/api/room/${id}`).then((res) => {
      setName(res.data.namakamar)
      setPrice(res.data.harga)
      setDetail(res.data.deskripsikamar)
      setImage(res.data.image)
    })
  } 

  if(msg) {
    return (
      <h1 className="container text-center text-3xl text-red-500">{msg}</h1>
    )
  }

  return (
    <div className="container grid grid-cols-10 border-4 p-4 mt-10 bg-white rounded-3xl">
      <div className="col-start-2 col-span-2 font-rubik text-lg">
        <p>Nama Kamar</p>
        <p>Harga</p>
        <p>Fasilitas</p>
      </div>
      <div className="col-start-4 col-span-6 font-rubik text-lg">
        <p>: {name}</p>
        <p>: {price}</p>
        <p>: {detail}</p>
      </div>
      <div className="col-start-2 col-span-8 border-4 border-black">
        <img src={image}/>
      </div>
    </div>
  )
}

export default KamarInfo