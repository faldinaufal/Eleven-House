import { InputKos, NavbarLogin } from '../../component'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Inputkosan = () => {
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
  if(role === "ADMIN") {
    return (
      <div>
        <NavbarLogin/>
        <InputKos/>
      </div>
    )
  }
  return(
    <Navigate to="/home"/>

  )
}
export default Inputkosan