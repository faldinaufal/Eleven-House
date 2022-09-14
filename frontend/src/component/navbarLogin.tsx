import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-1 font-normal"
      >
        <a href="/profil" className="flex items-center text-lg">
          Profil
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-1 font-normal"
      >
        <a href="/home" className="flex items-center text-lg">
          Logout
        </a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="mx-auto w-auto py-2 px-4 lg:px-8 lg:py-4 bg-black">
        <div className="container mx-auto flex items-center justify-between text-white">
          <Typography
            as="a"
            href="home"
            variant="large"
            className="mr-4 cursor-pointer py-1.5 font-pacifico"
          >
            <span className="text-lg">Eleven House</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
        </div>
      </Navbar>
    </div>
  )
}

export default Nav