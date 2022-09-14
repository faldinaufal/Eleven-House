import { Navbar, ViewKosan } from '../../component'
import { useState, useEffect } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
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
  //     console.log(decoded)
  //   } catch (error:any) {
  //     if (error.response) {
  //       navigate('/')
  //     }
  //   }
  // }
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <ViewKosan/>
      </div>
    </div>
  )
}

export default Dashboard