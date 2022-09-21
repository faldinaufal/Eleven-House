import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react"
import img1 from "../assets/images/logo-wa.png"

const WaPopUp = () => {
  return (
    <div className="absolute right-6">
      <Popover placement="left">
        <PopoverHandler>
          <img className="w-16" src={img1} alt="" />
        </PopoverHandler>
        <PopoverContent className="text-center">
          <a href="https://wa.me/+6282283028840">
            <p>Klik Disini</p>
            <p>Akun WA Pemilik Kosan</p>
          </a>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default WaPopUp