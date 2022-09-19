import { InfoKos, Navbar, NavbarLogin } from "../../component"
import { useState, useEffect } from 'react';
import axios from 'axios';

const KosanPage = () => {
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
        <InfoKos/>
      </div>
    )
  }

  if(role === "USER") {
    return (
      <div>
        <NavbarLogin/>
        <InfoKos/>
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      <InfoKos/>
    </div>
  )
}

export default KosanPage