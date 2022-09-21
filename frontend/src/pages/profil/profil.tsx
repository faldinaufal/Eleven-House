import { NavAdmin, NavbarLogin, UserProfile } from '../../component'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState("")
  useEffect(() => {
    refreshToken()
    Auth()
  })

  const refreshToken = async() => {
    try {
      await axios.get('http://localhost:4000/api/token')
    } catch (error:any) {
      if (error.response) {
        navigate('/home')
      }
    }
  }

  const Auth = async () => {
    try {
      const auth = await axios.get('http://localhost:4000/api/auth', {withCredentials: true})
      setRole(auth.data.role)
    } catch (error:any) {
      console.log(error)
    }
  }

  if(role === "ADMIN") {
    return (
      <div>
        <NavAdmin/>
        <UserProfile/>
      </div>
    )
  }

  return (
    <div>
      <NavbarLogin/>
      <UserProfile/>
    </div>
  )
}

export default Profil