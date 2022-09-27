import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavAdmin } from '../../component';
import { Button } from '@material-tailwind/react';

const Submit = () => {
  const [msg, setMsg] = useState("")
  const [room, setRoom] = useState<any[]>([])

  useEffect(()=> {
    getKamarKos()
  },[])

  const getKamarKos = async () => {
    try {
      await axios.get(`http://localhost:4000/api/room/status/booked`).then((res)=> {
        setRoom(res.data)
      })
    } catch(error: any) {
      if(error.response) {
        setMsg(error.response.data.message)
      }
    }
  }
  
  const Submit = async(e:any) => {
    try {
      await axios.patch(`http://localhost:4000/api/room/${e}`, { status: 'Berpenghuni'}).then((res) => {
        console.log(res)
      })
      window.location.reload();
    } catch (error:any) {
      setMsg(error.response.data.message)
    }
  }

  const Cancel = async(e:any) => {
    try {
      await axios.patch(`http://localhost:4000/api/room/${e}`, { status: 'Tersedia', userId : null, namauser: null, namakosan: null}).then((res) => {
        console.log(res)
      })
      window.location.reload();
    } catch (error:any) {
      setMsg(error.response.data.message)
    }
  }
  return (
    <div>
      <NavAdmin/>
      <div className='container grid justify-items-center'>
        <div className='pt-10'>
          <table className='bg-white text-center'> 
            <thead className="border-2 border-gray-500">
              <th className="border-2 border-gray-500 px-4">No</th>
              <th className="border-2 border-gray-500 px-4">Nama Kamar</th>
              <th className="border-2 border-gray-500 px-4">Nama Kos</th>
              <th className="border-2 border-gray-500 px-4">Status</th>
              <th className="border-2 border-gray-500 px-4">Penghuni</th>
              <th className="border-2 border-gray-500 px-4"></th>
            </thead>
            <tbody> 
              {room && room.map((list, index) => (
                <tr>
                <td className="border-2 border-gray-500 px-4">{index+1}</td>
                  <td className="border-2 border-gray-500 px-4">{list.namakamar}</td>
                  <td className="border-2 border-gray-500 px-4">{list.namakosan}</td>
                  <td className="border-2 border-gray-500 px-4">{list.status}</td>
                  <td className="border-2 border-gray-500 px-4">{list.namauser}</td>
                  <td className="border-2 border-gray-500 px-4 py-1">
                      <Button onClick={()=>Submit(list.id)}>Setuju</Button>
                  </td>
                  <td className="border-2 border-gray-500 px-4 py-1">
                      <Button onClick={()=>Cancel(list.id)}  color="red">Tolak</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Submit