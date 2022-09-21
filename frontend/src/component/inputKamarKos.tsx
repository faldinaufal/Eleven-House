import { Input, Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddRoom = () => {
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [image, setImage] = useState("")
  const [msg, setMsg] = useState("")
  const [token, setToken] = useState('')
  const navigate = useNavigate()
  let {namakos} = useParams()

  useEffect(() => {
    refreshToken()
  })

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:4000/kamar')
      setToken(response.data.accessToken)
    } catch (error:any) {
      if (error.response) {
        navigate('/home')
      }
    }
  }

  const handleImage = (event:any) => {
    let uploaded = event.target.files[0]
    setImage(uploaded)
  }

  const addRoom = () => {
    let formData = new FormData();
    formData.append("name", name)
    formData.append("detail", detail)
    formData.append("image", image)

    axios({
      method: "post",
      url: "http://localhost:4000/kosan",
      data : formData,
      headers: { 
        "Content-Type": "multipart/form-data",
        "Authorization" : `Bearer ${token}`
      }
    }).then((res:any) =>{
      setMsg(res.data.message)
    }).catch((error:any) => {
      setMsg(error.response.data.message)
    })
  }

  return (
    <div className='container pt-8 md:max-w-screen-sm'>
      <div className='text-center text-2xl'>
        <h1>Tambah Kamar di Kos {namakos}</h1>
        <div className='pb-4'>
          <Input 
            label='Nama Kamar'
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className='pb-4'>
          <Input 
            type={'form'}
            label='Keterangan'
            onChange={(e) => {
              setDetail(e.target.value)
            }}
          />
        </div>
        <div className='pb-4'>
          <Input 
            type="file"
            onChange={handleImage}
          />
        </div>
      </div>
      <div>
          <Button onClick={addRoom}>Tambahkan</Button>
      </div>
      <div className='text-center pt-6 text-red-600 text-lg font font-medium'>
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default AddRoom