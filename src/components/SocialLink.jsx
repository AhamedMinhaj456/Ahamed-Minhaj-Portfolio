import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ahamed-minhaj-24697a215/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ahamedminhaj456",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ahamedminhaj456@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Ahamed_Minhaj_Software.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed">
      <ul className="lg:hidden bg-gray-800 p-4 overflow-y-auto">
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-full h-14 px-4 mb-2 bg-gray-500 hover:bg-gray-600 rounded-md duration-300 ${link.style}`}
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
      <ul className="hidden lg:flex lg:flex-col">
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 ${link.style}`}
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
