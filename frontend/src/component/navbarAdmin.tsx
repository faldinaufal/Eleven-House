import { Navbar, Typography } from "@material-tailwind/react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/Logo1x1.png'

const NavAdmin = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")

  useEffect(() => {
    Auth()
  })

  const Auth = async () => {
    try {
      const auth = await axios.get('http://localhost:4000/api/auth', {withCredentials: true})
      setName(auth.data.name)
    } catch (error:any) {
      console.log(error)
    }
  }

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:4000/api/logout')
      navigate('/home')
      window.location.reload();
    } catch (error:any) { 
      console.log(error)
    }
  }
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        color="white"
        className="p-1 font-normal"
      >
        <Link to={"/admin/konfirmasi"}>
          <button className="flex items-center text-sm leading-4">
            Konfirmasi Kamar
          </button>
        </Link>
      </Typography>
      <Typography
        color="white"
        className="p-1 font-normal"
      >
        <Link to={`/${name}`}>
          <button className="flex items-center text-lg">
            Profil
          </button>
        </Link>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <button onClick={Logout} className="flex items-center text-lg">
          Logout
        </button>
      </Typography>
    </ul>
  );

  return (
    <div>
    <Navbar className="mx-auto w-auto py-1 px-4 lg:px-8 lg:py-1 bg-black">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="/home"
          className="mr-2 flex items-center cursor-pointer py-1.5 font-pacifico"
        >
          <div className="w-1/12">
            <img className="w-9/12" src={logo} alt=""/>
          </div>
          <div>
            <span className="text-lg">Eleven House</span>
          </div>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
      </div>
    </Navbar>
  </div>
  )
}

export default NavAdmin