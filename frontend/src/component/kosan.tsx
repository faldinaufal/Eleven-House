import { Input, Button } from '@material-tailwind/react'
import axios from 'axios';
import { useState } from 'react';

const Kosan = () => {
  const [image, setImage] = useState("https://fakeimg.pl/600x450/")
  const [saveImage, setSaveImage] = useState(null)

  const uploadImage = async(event:any) => {
    let uploaded = event.target.files[0]
    setImage(URL.createObjectURL(uploaded))
    setSaveImage(uploaded)
  }
  
  const imageUpload = async () => {
    if(!saveImage) {
      alert("Upload Gambar Terlebih Dahulu")
    } else {
      let formData = new FormData()
      formData.append("photo", saveImage)
      axios.post('http://localhost:4000', {formData: formData}).then((res:any) => res.json()).then((data:any) => {
        window.location.href = data.image
      })
    }
  }

  return (
    <div>
      <div className='md:container md:max-w-2xl bg-gradient-to-br from-gray-200 via-white to-gray-300 items-center text-center mt-28 rounded-2xl'>
        <div className='grid place-content-center'>
          <div className='mt-6 mx-3'>
            <img src={image} alt=""/>
          </div>
          <div className='mt-8 mx-3'>
            <Input variant='static' label='Nama Kosan'/>
          </div>
          <div className='mt-8 mx-3'>
            <Input variant='static' label='Alamat Kosan'/>
          </div>
          <div className='mt-6 mx-8'>
            <input type="file" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
              onChange={uploadImage}
            />
          </div>
          <div className='mt-6 mb-8'>
            <Button variant='gradient' color='light-green' className='px-10 py-1.5 text-lg' onClick={imageUpload}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kosan