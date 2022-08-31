import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwtDecode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  const [nama, setNama] = useState('')
  const [token, setToken] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    refreshToken()
  },[])

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:4000/token')
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
      WELCOME
    </div>
  )
}

export default HomePage
