import React, { useState} from 'react'
import { Input, Button } from '@material-tailwind/react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [nohandphone, setNohandphone] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  const Registration = async(event:any) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:4000/register', {
        nama: nama,
        email: email,
        password: password,
        confPassword: confPassword,
        nohandphone: nohandphone
      })
      navigate('/')
    } catch (error:any) {
      if(error.response) {
        setMsg(error.response.data.message)
      }
    }
  }

  return (
    <div className='md:container md:max-w-lg bg-gradient-to-br from-white to-cyan-200 items-center text-center rounded-tl-3xl rounded-br-3xl mt-28'>
      <div className='py-10 font-pacifico text-4xl'>
        <h2>Eleven House</h2>
      </div>
      <div className="sm:mx-20 pb-16">
          <div>
            <label className='flex font-breeserif pb-4'>Form Registrasi</label>
          </div>
          <div className='text-left font-sourcecodepro py-1'>
            <label>Nama Lengkap</label>
            <div className='pt-1'>
              <Input label="Nama Lengkap" value={nama} onChange={(event) => setNama(event.target.value)}/>
            </div>
          </div>
          <div className='text-left font-sourcecodepro py-1'>
            <label>Email</label>
            <div className='pt-1'>
              <Input label="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
          </div>
          <div className='text-left font-sourcecodepro py-1'>
            <label>Password</label>
            <div className='pt-1'>
              <Input type="password" label="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
          </div>
          <div className='text-left font-sourcecodepro py-1'>
            <label>Konfirmasi Password</label>
            <div className='pt-1'>
              <Input type="password" label="Password" value={confPassword} onChange={(event) => setConfPassword(event.target.value)}/>
            </div>
          </div>
          <div className='text-left font-sourcecodepro py-1'>
            <label>Nomor Handphone</label>
            <div className='pt-1'>
              <Input label="No. Handphone" value={nohandphone} onChange={(event) => setNohandphone(event.target.value)}/>
            </div>
          </div>
          <div className='pt-4'>
            <Button onClick={Registration} className='text-md'>Register</Button>
          </div>
          <p className='text-red-600 font-semibold font-sourcecodepro mt-4'>{msg}</p>
      </div>
    </div>  
  )
}

export default Register