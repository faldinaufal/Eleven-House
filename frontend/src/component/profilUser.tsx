import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserProfile = () => {
  let { nama } = useParams()
  const [email, setEmail] = useState("")
  const [noHP, setNoHP] = useState("")
  const [msg, setMsg] = useState("")

  useEffect(() => {
    getUserProfile()
  })

  const getUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/users/${nama}`)
      setEmail(response.data.email)
      setNoHP(response.data.nohandphone)
    } catch(error: any) {
      if(error) {
        setMsg(error.response.data.message)
      }
    }
  }
  return (
    <div className='container grid grid-cols-10 border-2 p-4 mt-8 font-rubik bg-white'>
      <h1 className='text-3xl col-span-4'>Profil Saya </h1>
      <div className='col-start-1 col-span-2 text-xl pt-3'>
        <p className='pt-2'>Nama</p>
        <p className='pt-2'>Email</p>
        <p className='pt-2'>No. Handphone</p>
      </div>
      <div className='col-start-3 col-span-8 text-xl pt-3'>
        <p className='pt-2'>: {nama}</p>
        <p className='pt-2'>: {email}</p>
        <p className='pt-2'>: {noHP}</p>
      </div>
    </div>
  )
}

export default UserProfile