import { Navbar, Typography } from "@material-tailwind/react";

const Nav = () => {

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-1 font-normal"
      >
        <a href="/login" className="flex items-center text-lg">
          Login
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-1 font-normal"
      >
        <a href="/register" className="flex items-center text-lg">
          Register
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