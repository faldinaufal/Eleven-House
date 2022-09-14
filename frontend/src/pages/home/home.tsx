import image1 from '../../assets/images/image-1.png'
import { Button } from '@material-tailwind/react'


const HomePage = () => {
  return (
    <div className='flex place-items-center justify-center bg-background w-full h-screen bg-cover bg-center'>
      <div className='mt-96 pt-60 w-11/12 text-center'>
        <h2 className='text-white text-4xl pb-12'>Eleven House Kosan Nyaman dan Murah</h2>
        <a href="/home"><Button className='text-lg' size='lg' variant='gradient'>Klik Disini Untuk ke Halaman Utama</Button></a>
      </div>
      <div className='md:w-3/4 mr-20 items-center mb-40 text-white'>
        <img className='rounded-xl border-4' src={image1}/>
      </div>
    </div>
  )
}

export default HomePage
