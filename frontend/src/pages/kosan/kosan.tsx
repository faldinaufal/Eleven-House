import { InfoKos, Navbar, NavbarLogin, NavAdmin } from "../../component"
import { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const KosanPage = () => {
  const [role, setRole] = useState("")
  let { namakos } = useParams()

  useEffect(() => {
    Auth()
  })

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
        <InfoKos/>
        <div className='container relative'>
          <div className='absolute right-0 -bottom-24 pb-10'>
            <Link to={`/kosan/${namakos}/inputkamarkos`}>
              <Button color='green'>Tambah Kamar Kos</Button>
            </Link>
          </div>
        </div>
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