import { useState } from 'react'
import axios from 'axios'
import { Button, Input } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  const Authentication = async(event:any) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:4000/api/login', {
        email: email,
        password: password,
      }, {withCredentials:true})
      navigate('/home')
    } catch (error:any) {
      if(error.response) {
        setMsg(error.response.data.message)
      }
    }
  }

  return (
    <div>
      <div className='md:container md:max-w-lg bg-white border-4 items-center text-center rounded-tl-3xl rounded-br-3xl mt-52 '>
        <div className='pt-8 pb-6'>
          <h2 className='font-pacifico text-5xl'>Eleven House</h2>
        </div>
        <div className='grid sm:mx-20 pb-4'>
          <div className='mt-1'>
          <Input  variant='outlined' label='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
          </div>
        </div>
        <div className='grid sm:mx-20'>
          <div className='mt-1'>
            <Input type="password" variant='outlined' label='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
          </div>
        </div>
        <Button onClick={Authentication} className='mt-5'>Login</Button>
        <p className='text-red-600 font-semibold font-sourcecodepro mt-4'>{msg}</p>
        <div className='px-16 pb-12 items-center mt-12'>
          <div className='my-3 font-breeserif text-md'>
            <p>Silahkan Klik Tombol Register Untuk Mendaftar</p>
          </div>
          <div>
            <a href="/register">
              <Button className='bg-blue-gray-200 text-black'>Register</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent