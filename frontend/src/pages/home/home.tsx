import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwtDecode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  // const [nama, setNama] = useState('')
  const [token, setToken] = useState('')
  const [image, setImage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    refreshToken()
  },[])

  // axios.post('http://localhost:4000/kosan', {
  //   image: image
  // })

  
  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:4000/token', {withCredentials: true})
      setToken(response.data.accessToken)
      const decoded = jwtDecode(response.data.accessToken)
      console.log(response)
    } catch (error:any) {
      if (error.response) {
        navigate('/')
      }
    }
  }

  return (
    <div>
      <input type="file" value={image} onChange={(event) => setImage(event.target.value)} />
    </div>
  )
}

export default HomePage
