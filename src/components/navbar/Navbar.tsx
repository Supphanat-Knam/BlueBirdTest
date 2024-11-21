import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import BlueBirdLogo from "../../assets/logoBlueBird.png";
import { useNavigate } from "react-router-dom";
import "./style.css";
import AboveNav from "./AboveNav";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navbarWrapper = useRef<HTMLDivElement>(null);
  const aboveNavbar = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // เก็บความสูงของ navbar
    if (navbarWrapper.current) {
      let currentHeight = navbarWrapper.current.offsetHeight;
      setNavbarHeight(currentHeight);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > navbarHeight) {
        navbarWrapper.current?.classList.add("navbar-hide");
        navbarWrapper.current?.classList.remove("navbar-show");
      } else {
        navbarWrapper.current?.classList.remove("navbar-hide");
        navbarWrapper.current?.classList.add("navbar-show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  return (
    <React.Fragment>
      <div className="navbar-wrapper" ref={navbarWrapper}>
        <div ref={aboveNavbar}>
          <AboveNav />
        </div>
        <div className="navbar bg-white shadow-md px-4 md:px-14 py-0 justify-between md:justify-between ">
          {/* Logo Section */}
          <div className="flex items-center w-[12rem] gap-3">
            <img src={BlueBirdLogo} alt="" />
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                <span className="text-[#014aea]">Blue</span>Bird
              </h1>
              <p className="text-sm font-semibold text-gray-500">IT Consult</p>
            </div>
          </div>

          {/* Hamburger Menu Icon (Visible only on small screens) */}
          <div className="md:hidden flex flex-grow justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <HiOutlineMenuAlt3 size={24} />
            </button>
          </div>

          {/* Menu Items (Static for md+ and Sliding for <md) */}
          <div>
            <ul className="menu-wrapper flex space-x-6">
              {mainMenu.map((item, index) => (
                <li
                  key={index}
                  className="relative h-full flex items-center group"
                >
                  <a
                    onClick={() => navigate(item.link)}
                    className="font-semibold !bg-white group-hover:text-blue-500 transition duration-300"
                  >
                    {item.name}
                  </a>

                  <div className="absolute h-[2px] w-full bottom-0 bg-blue-500 left-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
                </li>
              ))}
            </ul>

            {/* Sliding menu for smaller screens */}
            <div
              className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <HiOutlineX size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="menu menu-vertical px-4 space-y-4 mt-10">
                <li>
                  <a className="flex items-center justify-between">
                    Home <span className="text-gray-400">&gt;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* สร้าง offset ป้องกันการกระโดนของหน้าจอ */}
      <div style={{ height: navbarHeight ? `${navbarHeight}px` : "0"}}></div>
    </React.Fragment>
  );
};

export default Navbar;
