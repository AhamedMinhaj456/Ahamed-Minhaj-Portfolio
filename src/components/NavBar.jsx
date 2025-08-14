import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "projects" },
    { id: 5, link: "Technologies" },
    { id: 6, link: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <nav className="flex justify-between items-center w-full h-20 px-4 text-white">
        {/* Brand */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer"
        >
          <h1
            className="text-2xl sm:text-3xl font-bold tracking-wide"
            style={{ fontFamily: "'Homemade Apple', cursive" }}  
          >
            Ahamed Minhaj
          </h1>  
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-white hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500} offset={-80}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setNav((v) => !v)}
          className="cursor-pointer pr-2 text-gray-300 md:hidden"
          aria-label={nav ? "Close menu" : "Open menu"}
        >
          {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

        {/* Mobile menu */}
        {nav && (
          <ul className="fixed inset-0 z-40 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-300 md:hidden">
            {links.map(({ id, link }) => (
              <li key={id} className="py-6 text-3xl">
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
