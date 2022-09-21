import { KamarInfo, NavAdmin, Navbar, NavbarLogin } from "../../component"
import { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const KamarPage = () => {
  let { id } = useParams()
  let { namakos } = useParams()
  const [role, setRole] = useState("")
  const [userId, setUserId] = useState("")
  const [username, setUsername] = useState("")
  const [msg, setMsg] = useState("")
  useEffect(() => {
    Auth()
  })

  console.log(username)

  const Submit = async() => {
    try {
      await axios.patch(`http://localhost:4000/api/room/${id}`, { status: 'Booked', userId : userId, namauser: username, namakosan: namakos }).then((res) => {
        console.log(res)
      })
    } catch (error:any) {
      setMsg(error.response.data.message)
    }
  }

  const Auth = async () => {
    try {
      const auth = await axios.get('http://localhost:4000/api/auth', {withCredentials: true})
      setUsername(auth.data.name)
      setUserId(auth.data.userId)
      setRole(auth.data.role)
    } catch (error:any) {
      setMsg(error.response.data.message)
    }
  }

  if(role === "ADMIN") {
    return (
      <div>
        <NavAdmin/>
        <KamarInfo/>
      </div>
    )
  }

  if(role === "USER") {
    return (
      <div>
        <NavbarLogin/>
        <KamarInfo/>
        <h1 className="container text-center mt-8 text-2xl text-red-600">{msg}</h1>
        <div className='container relative'>
          <div className='absolute right-0 -bottom-24 pb-10'>
            <Button onClick={Submit} color='green'>Pilih Kamar</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      <KamarInfo/>
    </div>
  )
}

export default KamarPage