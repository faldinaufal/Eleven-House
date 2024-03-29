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
  const [price, setPrice] = useState('')
  const [kosId, setKosId] = useState()
  const navigate = useNavigate()
  let {namakos} = useParams()

  useEffect(() => {
    refreshToken()
  })

  useEffect(() => {
    getKosan()
  })

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:4000/api/token')
      setToken(response.data.accessToken)
    } catch (error:any) {
      if (error.response) {
        navigate('/home')
      }
    }
  }

  const getKosan = async() => {
    try {
      const response = await axios.get(`http://localhost:4000/api/kosan/${namakos}`,)
      setKosId(response.data.kosId)
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

  // const addRoom = () => {
  //   let formData = new FormData();
  //   formData.append("nama", name)
  //   formData.append("harga", price)
  //   formData.append("detail", detail)
  //   formData.append("image", image)
  //   formData.append("kosId", kosId!)

  //   axios({
  //     method: "post",
  //     url: "http://localhost:4000/api/kamar",
  //     data : formData,
  //     headers: { 
  //       "Content-Type": "multipart/form-data",
  //       "Authorization" : `Bearer ${token}`
  //     }
  //   }).then((res:any) =>{
  //     setMsg(res.data.message)
  //   }).catch((error:any) => {
  //     setMsg(error.response.data.message)
  //   })
  // }
  const tambahKamar = () => {
    let formData = new FormData();
    formData.append("name", name)
    formData.append("harga", price)
    formData.append("detail", detail)
    formData.append("image", image)
    formData.append("kosId", kosId!)

    axios({
      method: "post",
      url: "http://localhost:4000/api/kamar",
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
      <div className='text-center text-2xl border-2 p-10 rounded-2xl bg-white'>
        <h1 className='-mt-3 pb-4'>Tambah Kamar di Kos {namakos}</h1>
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
            label='Harga'
            onChange={(e) => {
              setPrice(e.target.value)
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
      <div className='pt-6'>
          <Button onClick={tambahKamar}>Tambahkan</Button>
      </div>
      <div className='text-center pt-6 text-red-600 text-lg font font-medium'>
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default AddRoom