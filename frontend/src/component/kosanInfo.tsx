import { useParams, Link } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";

const KosanInfo = () => {
  let { namakos } = useParams()
  const [address, setAddress] = useState("")
  const [detail, setDetail] = useState("")
  const [image, setImage] = useState("")
  const [msg, setMsg] = useState("")

  useEffect(()=> {
    getRumahKosInfo()
  },[])

  const getRumahKosInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/kosan/${namakos}`)
      setAddress(response.data.address)
      setDetail(response.data.detail)
      setImage(response.data.image)
    } catch(error: any) {
      if(error.response) {
        setMsg(error.response.data.message)
      }
    }
  }
  if(msg) {
    return (
      <h1 className="container text-center text-3xl text-red-500">KOSAN TIDAK ADA!</h1>
    )
  }

  return (
    <div className="container grid grid-cols-10 border-4 p-4 mt-10">
      <div className="col-start-2 col-span-1 font-rubik text-lg">
        <p>Nama Kos</p>
        <p>Alamat Kos</p>
        <p>Fasilitas</p>
      </div>
      <div className="col-start-3 col-span-9 font-rubik text-lg">
        <p>: {namakos}</p>
        <p>: {address}</p>
        <p>: {detail}</p>
      </div>
      <div className="col-start-2 col-span-8 border-4 border-black">
        <img src={image}/>
      </div>
      <div className="col-start-2 col-span-9 pt-14">
        <p>List Kamar :</p>
      </div>
      <div className="container justify-items-center col-start-2 col-span-8">
        <table>
          <tbody>
            <tr>
              <td className="border-2 border-gray-500 px-4">1</td>
              <td className="border-2 border-gray-500 px-4">Kamar 01</td>
              <td className="border-2 border-gray-500 px-4 py-1">
                <Link to={`/kosan/${namakos}/Kamar 01`}>
                  <Button>Cek Kamar</Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default KosanInfo