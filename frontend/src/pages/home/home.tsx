import React, { useState, useEffect } from 'react'
import image1 from '../../assets/images/image-1.png'
import { Button } from '@material-tailwind/react'

const HomePage = () => {
  // const [nama, setNama] = useState('')
  // const [token, setToken] = useState('')
  // const [image, setImage] = useState('')
  // const navigate = useNavigate()

  // useEffect(() => {
  //   refreshToken()
  // },[])

  // axios.post('http://localhost:4000/kosan', {
  //   image: image
  // })

  
  // const refreshToken = async() => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/token', {withCredentials: true})
  //     setToken(response.data.accessToken)
  //     const decoded = jwtDecode(response.data.accessToken)
  //     console.log(response)
  //   } catch (error:any) {
  //     if (error.response) {
  //       navigate('/')
  //     }
  //   }
  // }

  return (
    <div className='flex place-items-center justify-center bg-background w-full h-screen bg-cover bg-center'>
      <div className='mt-96 pt-60 w-11/12 text-center'>
        <h2 className='text-white text-4xl pb-12'>Eleven House Hunian Nyaman dan Murah</h2>
        <a href="/home"><Button className='text-lg' size='lg' variant='gradient'>Klik Disini Untuk ke Halaman Utama</Button></a>
      </div>
      <div className='md:w-3/4 mr-20 items-center text-white'>
        <img className='rounded-xl border-4 mb-60' src={image1}/>
      </div>
    </div>
  )
}

export default HomePage
