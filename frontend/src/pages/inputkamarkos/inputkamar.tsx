import { AddRoom, NavAdmin, NavbarLogin } from '../../component'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const AddKamarKos = () => {
  const [role, setRole] = useState("")
  useEffect(() => {
    Auth()
  })

  const Auth = async () => {
    try {
      const auth = await axios.get('http://localhost:4000/api/auth')
      setRole(auth.data.role)
    } catch (error:any) {
      console.log(error)
    }
  }
  if(role === "USER") {
    return (
      <Navigate to="/home"/>
    )
  }

  return(
    <div>
      <NavAdmin/>
      <AddRoom/>
    </div>
  )
}
export default AddKamarKos