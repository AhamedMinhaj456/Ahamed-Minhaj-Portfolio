import React, { useState } from "react";
import MotorbikeReservation from "../assets/Projects/Motorbike1.png";
import MotorbikeRenting from "../assets/Projects/Motorbike.png";
import mobile from "../assets/Projects/mobile.jpeg";
import medicalCost from "../assets/Projects/medicalCost.png";
import flowerHeader from "../assets/Projects/flowerheader.jpg";
import GUIgroup from "../assets/Projects/GUIgroup.png";
import GUIindividual from "../assets/Projects/GUIindividual.png";

import { FaTimes } from "react-icons/fa";


const Projects = () => {
  const [selectedProjects1, setSelectedProjects1] = useState(null);
  const [selectedProjects2, setSelectedProjects2] = useState(null);
  const [selectedProjects3, setSelectedProjects3] = useState(null);
  const [selectedProjects4, setSelectedProjects4] = useState(null);

  const WebProjects = [
    {
      id: 1,
      src: MotorbikeReservation,
      description: "An ongoing Motorbike reservation system project developed by a group of four members. I am responsible for backend. It focus on Web Application for a motorbike reservation system facilitates bookings across multiple shops. It allows shops to register and offer their services. The system includes three user roles: admin (website owner), shop owner, and customer. Admin manages the overall platform, shop owners control their respective shops, and customers can make reservations through the app or website. The mobile Application for customers, it provide real-time update about customer’s ongoing services. Technologies : React.js , Spring-boot, MySQL, Flutter and Firebase",
      code: "https://github.com/AhamedMinhaj456/Motorbike_Service_Station_Reservation_System.git"
    },
    {
      id: 2,
      src: MotorbikeRenting,
      description: "Fourth Semester Web Application project Using MERN stack, It developed for a shop, where motorbikes are renting and selling. This Projects mainly focused on CRUD applications using MERN stack",
      code: "https://github.com/AhamedMinhaj456/Motorbike-Renting-and-Selling-System.git"
    },
    
    
  ];
  const MLProjects = [
    {
      id: 1,
      src: flowerHeader,
      description: "A ongoing group project in sixth semester Artificail Intelligence(AI-Deep Learning)  module.  This End to End application reconise when inserting photo of flower or capturing a flower using camera. this project devoloping by using RNN and react.js for frondend.",
      code: "https://github.com/AhamedMinhaj456/Flower-recognition-system.git"
    },
    
    {
      id: 2,
      src: medicalCost,
      description: "A group project in fifth semester Machine Learning module.  This system predict the medical cost of the person when inserting the features of age, Sex, BMI, children, smokers and region. It developed using Linear  Regression and Decision trees algorithms.",
      code: "https://github.com/AhamedMinhaj456/Personal_medical_Cost_prediction_ML_Project.git"
    },
    
  ];
  const MobileProjects = [
    {
      id: 1,
      src: mobile,
      description: "A taxi booking app enables users to easily request and schedule rides from their smartphones. Features typically include GPS tracking, fare estimation, driver ratings. As a part of its user interface, it often includes profiles for customers, as well as a history of past rides. Technologies : Flutter, Firebase",
      code: "https://github.com/AhamedMinhaj456/Taxi_Booking-App_Flutter.git"
    },
    
  ];
  const GUIProjects = [
    {
      id: 1,
      src: GUIgroup,
      description: "A group project in third semester GUI Programming module. Developed a patient registration system for hospital using C#, XAML, WPF and MVVM architecture, integrated with SQLite for efficient data management. Implemented features for administrators, doctors, nurses and pharmasist to manage patient registration, medicine management, write description, and supply medicines securely.",
      code: "https://github.com/AhamedMinhaj456/GUI-Programming.git"
    },
    {
      id: 2,
      src: GUIindividual,
      description: "A third semester GUI Programming module project. Developed a student registration system for a school using C#, XAML, WPF and MVVM architecture. Implemented features for administrators, teachers and students to manage enrollment, grading and save students personal information securely.",
      code: "https://github.com/AhamedMinhaj456/Individual-project.git"
    },
    
  ];

  const handleClick1 = (id) => {
    setSelectedProjects1(selectedProjects1 === id ? null : id);
  };

  const handleClick2 = (id) => {
    setSelectedProjects2(selectedProjects2 === id ? null : id);
  };

  const handleClick3 = (id) => {
    setSelectedProjects3(selectedProjects3 === id ? null : id);
  };

  const handleClick4 = (id) => {
    setSelectedProjects4(selectedProjects4 === id ? null : id);
  };

  const handleClose1 = () => {
    setSelectedProjects1(null);
  };
  const handleClose2 = () => {
    setSelectedProjects2(null);
  };
  const handleClose3 = () => {
    setSelectedProjects3(null);
  };
  const handleClose4 = () => {
    setSelectedProjects4(null);
  };

  

  const handleCodeClick = (code) => {
    if (code) {
      window.open(code, "_blank");
    }
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-white-100 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
         </div>
       
         <div >
        <div className="pb-8">
         <p className="py-6">Web Development</p>
        </div>
        
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {WebProjects.map((Projects) => {
            return (
              <div
                key={Projects.id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <div 
                  className=" rounded-md duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => handleClick1(Projects.id)}
                >
                  {selectedProjects1 === Projects.id ? (
                    <div className="w-full h-full bg-gray-800 bg-opacity-90 p-4 flex flex-col items-center justify-center">
                      <button
                        className="absolute top-2 right-2 text-white"
                        onClick={handleClose1}
                      >
                        <FaTimes />
                      </button>
                      <p className="text-white">{Projects.description}</p>
                    </div>
                  ) : (
                    <img src={Projects.src} alt="" className="rounded-md" />
                  )}
                </div>
                               
                <div className="flex items-center justify-center">
                 <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleCodeClick(Projects.code)}
                  >
                    Github
                  </button>
                  
                </div >
               
              </div>
            );
          })}
        </div>
        </div>
        

        <div >
        <div className="pb-8">
         <p className="py-6">Machine Learning</p>
        </div>
        
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {MLProjects.map((Projects) => {
            return (
              <div
                key={Projects.id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <div 
                  className=" rounded-md duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => handleClick2(Projects.id)}
                >
                  {selectedProjects2 === Projects.id ? (
                    <div className="w-full h-full bg-gray-800 bg-opacity-90 p-4 flex flex-col items-center justify-center">
                      <button
                        className="absolute top-2 right-2 text-white"
                        onClick={handleClose2}
                      >
                        <FaTimes />
                      </button>
                      <p className="text-white">{Projects.description}</p>
                    </div>
                  ) : (
                    <img src={Projects.src} alt="" className="rounded-md" />
                  )}
                </div>
                

               
                <div className="flex items-center justify-center">
                 <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleCodeClick(Projects.code)}
                  >
                    Github
                  </button>
                  
                </div >
               
              </div>
            );
          })}
        </div>
        </div>

        <div >
        <div className="pb-8">
         <h3 className="py-6">Mobile Application</h3>
        </div>
        
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {MobileProjects.map((Projects) => {
            return (
              <div
                key={Projects.id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <div 
                  className=" rounded-md duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => handleClick3(Projects.id)}
                >
                  {selectedProjects3 === Projects.id ? (
                    <div className="w-full h-full bg-gray-800 bg-opacity-90 p-4 flex flex-col items-center justify-center">
                      <button
                        className="absolute top-2 right-2 text-white"
                        onClick={handleClose3}
                      >
                        <FaTimes />
                      </button>
                      <p className="text-white">{Projects.description}</p>
                    </div>
                  ) : (
                    <img src={Projects.src} alt="" className="rounded-md" />
                  )}
                </div>
                

               
                <div className="flex items-center justify-center">
                 <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleCodeClick(Projects.code)}
                  >
                    Github
                  </button>
                  
                </div >
               
              </div>
            );
          })}
        </div>
        </div>
        
        <div >
        <div className="pb-8">
         <h3 className="py-6">GUI Programming</h3>
        </div>
        
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {GUIProjects.map((Projects) => {
            return (
              <div
                key={Projects.id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <div 
                  className=" rounded-md duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => handleClick4(Projects.id)}
                >
                  {selectedProjects4 === Projects.id ? (
                    <div className="w-full h-full bg-gray-800 bg-opacity-90 p-4 flex flex-col items-center justify-center">
                      <button
                        className="absolute top-2 right-2 text-white"
                        onClick={handleClose4}
                      >
                        <FaTimes />
                      </button>
                      <p className="text-white">{Projects.description}</p>
                    </div>
                  ) : (
                    <img src={Projects.src} alt="" className="rounded-md" />
                  )}
                </div>
                

               
                <div className="flex items-center justify-center">
                 <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleCodeClick(Projects.code)}
                  >
                    Github
                  </button>
                  
                </div >
               
              </div>
            );
          })}
        </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
