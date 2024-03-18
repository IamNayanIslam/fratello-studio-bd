import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex justify-between items-center md:max-w-screen-2xl mx-auto py-6">
        <div className="logo">
          <Link to="/">
            <img
              src="./fs-logo.jpg"
              className="h-[64px] w-[64px] rounded-full"
              alt="Fratello Studios Logo"
            />
          </Link>
        </div>
        <ul className="hidden md:flex justify-between space-x-8">
          <li className="text-bold text-white text-xl">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-bold text-white text-xl">
            <Link to="/team">Team</Link>
          </li>
          <li className="text-bold text-white text-xl">
            <Link to="contacts">Contacts</Link>
          </li>
          <li className="text-bold text-white text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="text-bold text-white text-xl">
            <Link to="career">Career</Link>
          </li>
        </ul>

        {/* mobile navbar icon open and close  */}

        <div className="nav-icon md:hidden text-xl text-white cursor-pointer">
          {!nav ? (
            <FaBars onClick={handleNav} />
          ) : (
            <MdOutlineClose onClick={handleNav} />
          )}
        </div>

        {/* mobile nav bar  */}

        <div
          className={
            nav
              ? "mobile-nav fixed md:hidden bg-black w-[60%] h-screen top-0 left-0 px-4 pt-6 ease-in-out duration-500 border-r border-r-gray-900"
              : "mobile-nav fixed md:hidden bg-black w-[60%] h-screen top-0 left-[-100%] px-4 pt-6 ease-in-out duration-500"
          }
        >
          <div className="logo">
            <Link to="/">
              <img
                src="./fs-logo.jpg"
                className="h-[64px] w-[64px] rounded-full"
                alt="Fratello Studios Logo"
              />
            </Link>
          </div>
          <ul className="flex flex-col justify-between space-y-4 mt-10">
            <li className="text-bold text-white text-xl border-b border-gray-600 py-2 px-4 hover:bg-gray-600">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="text-bold text-white text-xl border-b border-gray-600 py-2 px-4 hover:bg-gray-600">
              <Link to="/team">Team</Link>
            </li>
            <li className="text-bold text-white text-xl border-b border-gray-600 py-2 px-4 hover:bg-gray-600">
              <Link to="contacts">Contacts</Link>
            </li>
            <li className="text-bold text-white text-xl border-b border-gray-600 py-2 px-4 hover:bg-gray-600">
              <Link to="/about">About</Link>
            </li>
            <li className="text-bold text-white text-xl py-2 px-4 hover:bg-gray-600">
              <Link to="career">Career</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
