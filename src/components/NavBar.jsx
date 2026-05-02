import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <header className="bg-(--color-primary) lg:px-12 px-5 flex py-2 justify-between items-center sticky  h-16 top-0 z-99 ">
        <div className="logo">
          <img src="header-logo.png" alt="haeder-logo" className="h-14" />
        </div>
        <div className="flex gap-2 items-center">
          <Link
            to="/login"
            className="text-white text-md hover:outline rounded px-3 py-1.5 btn"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white px-3 py-1 rounded-sm text-(--color-primary) hover:outline hover:bg-transparent hover:text-white text-md"
          >
            Register
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
