import React, { useState } from "react";
import MotorbikeReservation from "../assets/Projects/Motorbike1.png";
import MotorbikeRenting from "../assets/Projects/Motorbike.png";
import mobile from "../assets/Projects/mobile.jpeg";
import medicalCost from "../assets/Projects/medicalCost.png";
import flowerHeader from "../assets/Projects/flowerheader.jpg";
import GUIgroup from "../assets/Projects/GUIgroup.png";
import GUIindividual from "../assets/Projects/GUIindividual.png";

import { FaTimes } from "react-icons/fa";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [selectedProjects1, setSelectedProjects1] = useState(null);
  const [selectedProjects2, setSelectedProjects2] = useState(null);
  const [selectedProjects3, setSelectedProjects3] = useState(null);
  const [selectedProjects4, setSelectedProjects4] = useState(null);

  const WebProjects = [
    {
      id: 1,
      src: MotorbikeReservation,
      title: "Motorbike Reservation System",
      description:
        "An ongoing Motorbike reservation system project developed by a group of four members. I am responsible for backend. It focus on Web Application for a motorbike reservation system facilitates bookings across multiple shops. It allows shops to register and offer their services. The system includes three user roles: admin (website owner), shop owner, and customer. Admin manages the overall platform, shop owners control their respective shops, and customers can make reservations through the app or website. The mobile Application for customers, it provide real-time update about customer's ongoing services.",
      tech: ["React.js", "Spring Boot", "MySQL", "Flutter", "Firebase"],
      code: "https://github.com/AhamedMinhaj456/Motorbike_Service_Station_Reservation_System.git"
    },
    {
      id: 2,
      src: MotorbikeRenting,
      title: "Motorbike Renting & Selling",
      description:
        "Fourth Semester Web Application project Using MERN stack, It developed for a shop, where motorbikes are renting and selling. This Projects mainly focused on CRUD applications using MERN stack",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      code: "https://github.com/AhamedMinhaj456/Motorbike-Renting-and-Selling-System.git"
    }
  ];

  const MLProjects = [
    {
      id: 1,
      src: flowerHeader,
      title: "Flower Recognition System",
      description:
        "A ongoing group project in sixth semester Artificail Intelligence(AI-Deep Learning) module. This End to End application reconise when inserting photo of flower or capturing a flower using camera. this project devoloping by using RNN and react.js for frondend.",
      tech: ["RNN", "React.js", "Deep Learning", "Image Recognition"],
      code: "https://github.com/AhamedMinhaj456/Flower-recognition-system.git"
    },
    {
      id: 2,
      src: medicalCost,
      title: "Medical Cost Prediction",
      description:
        "A group project in fifth semester Machine Learning module. This system predict the medical cost of the person when inserting the features of age, Sex, BMI, children, smokers and region. It developed using Linear Regression and Decision trees algorithms.",
      tech: ["Linear Regression", "Decision Trees", "Python", "Scikit-learn"],
      code: "https://github.com/AhamedMinhaj456/Personal_medical_Cost_prediction_ML_Project.git"
    }
  ];

  const MobileProjects = [
    {
      id: 1,
      src: mobile,
      title: "Taxi Booking App",
      description:
        "A taxi booking app enables users to easily request and schedule rides from their smartphones. Features typically include GPS tracking, fare estimation, driver ratings. As a part of its user interface, it often includes profiles for customers, as well as a history of past rides.",
      tech: ["Flutter", "Firebase", "GPS Tracking", "Real-time Updates"],
      code: "https://github.com/AhamedMinhaj456/Taxi_Booking-App_Flutter.git"
    }
  ];

  const GUIProjects = [
    {
      id: 1,
      src: GUIgroup,
      title: "Hospital Patient Registration",
      description:
        "A group project in third semester GUI Programming module. Developed a patient registration system for hospital using C#, XAML, WPF and MVVM architecture, integrated with SQLite for efficient data management. Implemented features for administrators, doctors, nurses and pharmasist to manage patient registration, medicine management, write description, and supply medicines securely.",
      tech: ["C#", "XAML", "WPF", "MVVM", "SQLite"],
      code: "https://github.com/AhamedMinhaj456/GUI-Programming.git"
    },
    {
      id: 2,
      src: GUIindividual,
      title: "School Management System",
      description:
        "A third semester GUI Programming module project. Developed a student registration system for a school using C#, XAML, WPF and MVVM architecture. Implemented features for administrators, teachers and students to manage enrollment, grading and save students personal information securely.",
      tech: ["C#", "XAML", "WPF", "MVVM", "Data Management"],
      code: "https://github.com/AhamedMinhaj456/Individual-project.git"
    }
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

  const handleClose1 = (e) => {
    e.stopPropagation();
    setSelectedProjects1(null);
  };

  const handleClose2 = (e) => {
    e.stopPropagation();
    setSelectedProjects2(null);
  };

  const handleClose3 = (e) => {
    e.stopPropagation();
    setSelectedProjects3(null);
  };

  const handleClose4 = (e) => {
    e.stopPropagation();
    setSelectedProjects4(null);
  };

  const handleCodeClick = (code, e) => {
    e.stopPropagation();
    if (code) {
      window.open(code, "_blank");
    }
  };

  const ProjectCard = ({ project, isSelected, onCardClick, onClose, onCodeClick }) => (
    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Project Image/Description Toggle */}
      <div
        className="relative h-64 cursor-pointer overflow-hidden"
        onClick={() => onCardClick(project.id)}
      >
        {isSelected ? (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95 p-6 flex flex-col backdrop-blur-sm animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg z-10"
              onClick={onClose}
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-gray-200 text-sm leading-relaxed">
                {project.description}
              </p>
              {project.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-600/30 to-purple-600/30 ring-1 ring-white/10 text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
            <img
              src={project.src}
              alt={project.title || "Project"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-gray-300 text-xs">Click to view details</p>
            </div>
          </>
        )}
      </div>

      {/* GitHub Button */}
      <div className="p-4 bg-gray-900/30 border-t border-gray-700/50">
        <button
          onClick={(e) => onCodeClick(project.code, e)}
          className="w-full px-4 py-2.5 bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-gray-600/60 hover:to-gray-700/60 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 text-sm font-medium border border-gray-600/30 hover:border-gray-500/50"
        >
          <FaGithub className="w-5 h-5" />
          View on GitHub
          <FaExternalLinkAlt className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

  const ProjectSection = ({ title, projects, selectedProject, onCardClick, onClose, onCodeClick, icon }) => (
    <div className="mb-16">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center gap-3">
          {icon && <span className="text-4xl">{icon}</span>}
          {title}
        </h3>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedProject === project.id}
            onCardClick={onCardClick}
            onClose={onClose}
            onCodeClick={onCodeClick}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full min-h-screen py-20 relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-left">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
              Projects 🚀
            </span>
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            A showcase of my work across different domains
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mt-4"></div>
        </div>

        {/* Project Sections */}
        <ProjectSection
          title="Web Development"
          icon="🌐"
          projects={WebProjects}
          selectedProject={selectedProjects1}
          onCardClick={handleClick1}
          onClose={handleClose1}
          onCodeClick={handleCodeClick}
        />

        <ProjectSection
          title="Machine Learning"
          icon="🤖"
          projects={MLProjects}
          selectedProject={selectedProjects2}
          onCardClick={handleClick2}
          onClose={handleClose2}
          onCodeClick={handleCodeClick}
        />

        <ProjectSection
          title="Mobile Application"
          icon="📱"
          projects={MobileProjects}
          selectedProject={selectedProjects3}
          onCardClick={handleClick3}
          onClose={handleClose3}
          onCodeClick={handleCodeClick}
        />

        <ProjectSection
          title="GUI Programming"
          icon="🖥️"
          projects={GUIProjects}
          selectedProject={selectedProjects4}
          onCardClick={handleClick4}
          onClose={handleClose4}
          onCodeClick={handleCodeClick}
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Projects;