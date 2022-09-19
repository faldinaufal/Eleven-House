import { NavbarLogin, UserProfile } from '../../component'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
  // const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    refreshToken()
  })

  const refreshToken = async() => {
    try {
      await axios.get('http://localhost:4000/token')
    } catch (error:any) {
      if (error.response) {
        navigate('/home')
      }
    }
  }
  return (
    <div>
      <NavbarLogin/>
      <UserProfile/>
    </div>
  )
}

export default Profil