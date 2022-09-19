import image1 from '../../assets/images/image-1.png'
import logo from '../../assets/images/Logo-Vertical.png'
import { Button } from '@material-tailwind/react'


const HomePage = () => {
  return (
    <div className='flex place-items-center justify-center bg-background w-full h-screen bg-cover bg-center'>
      <div className='grid mt-48 w-11/12 justify-items-center'>
        <div className='w-7/12'>
          <img src={logo}/>
        </div>
        <div className='text-white text-4xl pb-12 -mt-12'>
          <h2>Eleven House Kosan Nyaman dan Murah</h2>
        </div>
        <div>
          <a href="/home"><Button className='text-lg' size='lg' variant='gradient'>Klik Disini Untuk ke Halaman Utama</Button></a>
        </div>
      </div>
      <div className='md:w-3/4 mr-20 items-center mb-40 text-white'>
        <img className='rounded-xl border-4' src={image1}/>
      </div>
    </div>
  )
}

export default HomePage
