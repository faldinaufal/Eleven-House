import { Navbar, NavbarLogin, ViewKosan } from '../../component'
import { Button } from '@material-tailwind/react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [role, setRole] = useState("")

  useEffect(() => {
    Auth()
  })

  const Auth = async () => {
    try {
      const auth = await axios.get('http://localhost:4000/auth', {withCredentials: true})
      setRole(auth.data.role)
    } catch (error:any) {
      console.log(error)
    }
  }
  if(role === "ADMIN" ) {
    return (
      <div>
        <NavbarLogin/>
        <div className='container'>
          <ViewKosan/>
        </div>
        <div className='container relative'>
          <div className='absolute right-0 -bottom-10'>
            <a href="/inputKos">
              <Button color='green'>Tambah Rumah Kos</Button>
            </a>
          </div>
        </div>
      </div>
    )
  }

  if(role === "USER" ) {
    return (
      <div>
        <NavbarLogin/>
        <div className='container'>
          <ViewKosan/>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <ViewKosan/>
      </div>
    </div>
  )
}

export default Dashboard