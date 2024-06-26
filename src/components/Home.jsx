import React from "react";
import HeroImage from "../assets/dp.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4x1 sm:text-5xl font-bold text-white">
          Computer Engineer (UG) 
          <br/>                  
            </h2>
          <h2 className="text-4xl sm:text-3xl font-bold text-white">
            <br/>Fullstack Developer 
            <br/>Mobile Application Developer 
            <br/>Machine Learning Enthusiast
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hey there! 👋 I'm <b>Ahamed Minhaj</b>, A Computer Engineering Undergraduate
            from Faculty of Engineering, university of Ruhuna. I love creating
            Web application, Mobile Application and Machine Learning Enthusiast. I love coding and
            learning new technologies.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
