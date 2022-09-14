import image1 from "../media/images/image-1.png"

const Kosan = () => {
  return (
    <div>
      <div className="md:grid grid-cols-3 gap-x-20 gap-y-6 pt-12">
        <div>
          <a href="/elevenhouse1">
            <div className='box border-4 rounded-xl w-96 p-2 text-center'>
              <img src={image1} alt="" />
              <div className="pt-2">
                <label className="font-rubik font-bold">Eleven House 1</label>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="/elevenhouse2">
            <div className='box border-4 rounded-xl w-96 p-2 text-center'>
              <img src={image1} alt="" />
              <div className="pt-2">
                <label className="font-rubik font-bold">Eleven House 2</label>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="/elevenhouse3">
            <div className='box border-4 rounded-xl w-96 p-2 text-center'>
              <img src={image1} alt="" />
              <div className="pt-2">
                <label className="font-rubik font-bold">Eleven House 3</label>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="/elevenhouse4">
            <div className='box border-4 rounded-xl w-96 p-2 text-center'>
              <img src={image1} alt="" />
              <div className="pt-2">
                <label className="font-rubik font-bold">Eleven House 4</label>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Kosan