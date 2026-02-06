import React, { useState } from "react";
import MotorbikeReservation from "../assets/Projects/Motorbike1.png";
import MotorbikeRenting from "../assets/Projects/Motorbike.png";
import mobile from "../assets/Projects/mobile.jpeg";
import medicalCost from "../assets/Projects/medicalCost.png";
import flowerHeader from "../assets/Projects/flowerheader.jpg";
import GUIgroup from "../assets/Projects/GUIgroup.png";
import GUIindividual from "../assets/Projects/GUIindividual.png";
import EmployeeDatabaseManagement from "../assets/Projects/loading.jpg";
import SmartAutoPartsOrdering from "../assets/Projects/loading.jpg";
import MotorbikeRentingSelling from "../assets/Projects/loading.jpg";
import NYTSentimentAnalysis from "../assets/Projects/loading.jpg";
import SecureChatApplication from "../assets/Projects/loading.jpg";
import MarketHub from "../assets/Projects/loading.jpg";
import TrafficCongestionDetection from "../assets/Projects/Traffic_monitor.png";
import CustomerSupportChatbot from "../assets/Projects/loading.jpg";
import ERPWebApplication from "../assets/Projects/loading.jpg";
import RuleBasedMovieRecommendation from "../assets/Projects/functional.png";
import LookTrackVision from "../assets/Projects/looktrackvision.png";
import GazeTrackingMobileApp from "../assets/Projects/lookTrackMobile.jpg";
import BookFairReservationSystem from "../assets/Projects/bookfair.jpg";

import { FaGithub, FaRocket } from "react-icons/fa";

const Projects = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const WebProjects = [
    {
      id: 1,
      src: ERPWebApplication,
      title: "ERP Web Application – Hightechx",
      description:
        "Contributed to a production-grade full-stack ERP web application at HighTechX Software Solutions, delivering core business modules using React (TypeScript), Spring Boot, and MySQL. Implemented REST APIs, reusable UI components, and database workflows, integrated JasperReports with dynamic React-based parameter screens, and migrated legacy Crystal Reports and SQL Server stored procedures to MySQL within an Agile, Jira-driven development environment.",
      tech: [
        "Spring Boot",
        "React.js",
        "TypeScript",
        "MySQL",
        "JasperReports",
        "MS SQL Server",
        "Crystal Reports",
        "Agile",
        "Jira"
      ],
      code: "",
      demo: "",
      category: "Enterprise"
    },
    {
      id: 2,
      src: MotorbikeReservation,
      title: "Motorbike Service and Reservation System",
      description:
        "Developed a comprehensive web and mobile application for motorbike reservation system facilitating bookings across multiple shops. Features three user roles: admin, shop owner, and customer with real-time service updates.",
      tech: ["React.js", "Spring Boot", "MySQL", "Flutter", "Firebase"],
      code: "https://github.com/AhamedMinhaj456/Motorbike_Service_Station_Reservation_System.git",
      demo: "",
      category: "Full Stack"
    },
    {
      id: 3,
      src: MotorbikeRenting,
      title: "Motorbike Renting & Selling",
      description:
        "Full-stack MERN application for a motorbike rental and sales shop. Focused on CRUD operations with modern web technologies and responsive design.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      code: "https://github.com/AhamedMinhaj456/Motorbike-Renting-and-Selling-System.git",
      demo: "",
      category: "MERN Stack"
    },
    {
      id: 4,
      src: SecureChatApplication,
      title: "Secure Chat Application",
      description:
        "Developed a secure peer-to-peer chat application in Java demonstrating real-world cryptography and concurrent system design. Implemented end-to-end encrypted messaging using AES, secure Diffie-Hellman key exchange, HMAC-based message integrity verification, and replay attack prevention, delivered through a multi-threaded client–server architecture with a Java Swing GUI.",
      tech: [
        "Java",
        "Cryptography",
        "AES",
        "Diffie-Hellman",
        "HMAC-SHA256",
        "SHA-256",
        "Multi-threading",
        "Java Swing"
      ],
      code: "https://github.com/AhamedMinhaj456/Secure-Chat-Application-using-Authentication-and-Encryption",
      demo: "",
      category: "Security"
    }
  ];

  const MLProjects = [
    {
      id: 1,
      src: LookTrackVision,
      title: "Look Track Vision – Gaze Tracking Desktop Application",
      description:
        "Developed a computer vision–based desktop application enabling hands-free cursor control using eye gaze tracking. Designed to assist individuals with physical disabilities by providing accurate, real-time interaction through a CNN-based gaze estimation model, blink detection, and head-pose stabilization via webcam.",
      tech: ["Python", "OpenCV", "Deep Learning", "CNN", "Tkinter", "AI"],
      code: "",
      demo: "https://looktrackvision.vercel.app/",
      category: "AI/Desktop"
    },
    {
      id: 2,
      src: CustomerSupportChatbot,
      title: "Customer Support Chatbot (RAG-Powered AI Assistant)",
      description:
        "Designed and built a Retrieval-Augmented Generation (RAG)–based customer support chatbot for document Q&A, intelligent assistance, and AI-generated FAQs. Implemented a LangChain-powered RAG pipeline with semantic search over documents, delivered through a FastAPI backend and an interactive Streamlit frontend, enabling accurate, context-aware responses grounded in uploaded data.",
      tech: [
        "Python",
        "FastAPI",
        "LangChain",
        "Pinecone",
        "Streamlit",
        "OpenAI GPT",
        "RAG"
      ],
      code: "https://github.com/MoraisMNS/Chatbot-RAG-Application",
      demo: "",
      category: "AI/NLP"
    },
    {
      id: 3,
      src: flowerHeader,
      title: "Flower Recognition System",
      description:
        "End-to-end deep learning application for flower species recognition through photo upload or camera capture. Built using RNN architecture with a React frontend for seamless user experience.",
      tech: ["RNN", "React.js", "Deep Learning", "Image Recognition"],
      code: "https://github.com/AhamedMinhaj456/Flower-recognition-system.git",
      demo: "",
      category: "AI/ML"
    },
    {
      id: 4,
      src: medicalCost,
      title: "Medical Cost Prediction",
      description:
        "Machine learning system predicting personal medical costs based on demographic and health factors using Linear Regression and Decision Tree algorithms.",
      tech: ["Linear Regression", "Decision Trees", "Python", "Scikit-learn"],
      code: "https://github.com/AhamedMinhaj456/Personal_medical_Cost_prediction_ML_Project.git",
      demo: "",
      category: "ML"
    }
  ];

  const MobileProjects = [
    {
      id: 1,
      src: GazeTrackingMobileApp,
      title: "Gaze Tracking Mobile Application",
      description:
        "Developed an accessibility-focused mobile application enabling hands-free interaction using eye gaze tracking. Designed to support individuals with physical disabilities by allowing touch-free control through camera-based gaze, blink detection, and head-pose stabilization.",
      tech: ["Flutter", "Dart", "OpenCV", "Deep Learning", "CNN", "Android"],
      code: "https://github.com/AhamedMinhaj456/Gaze-Tracking-Mobile-App",
      demo: "",
      category: "Mobile"
    },
    {
      id: 2,
      src: mobile,
      title: "Taxi Booking App",
      description:
        "Feature-rich taxi booking mobile application with GPS tracking, fare estimation, driver ratings, and comprehensive ride history. Built with Flutter for cross-platform compatibility.",
      tech: ["Flutter", "Firebase", "GPS Tracking", "Real-time Updates"],
      code: "https://github.com/AhamedMinhaj456/Taxi_Booking-App_Flutter.git",
      demo: "",
      category: "Mobile"
    }
  ];

  const GUIProjects = [
    {
      id: 1,
      src: GUIgroup,
      title: "Hospital Patient Registration",
      description:
        "Comprehensive patient registration system with role-based access for administrators, doctors, nurses, and pharmacists. Features patient management, medicine tracking, and prescription handling.",
      tech: ["C#", "XAML", "WPF", "MVVM", "SQLite"],
      code: "https://github.com/AhamedMinhaj456/GUI-Programming.git",
      demo: null,
      category: "Desktop"
    },
    {
      id: 2,
      src: GUIindividual,
      title: "School Management System",
      description:
        "Student registration and management system for educational institutions. Enables enrollment management, grading, and secure storage of student information.",
      tech: ["C#", "XAML", "WPF", "MVVM"],
      code: "https://github.com/AhamedMinhaj456/Individual-project.git",
      demo: null,
      category: "Desktop"
    }
  ];

  const CloudProjects = [
    {
      id: 1,
      src: BookFairReservationSystem,
      title: "Book Fair Reservation System",
      description:
        "Designed and developed a web-based reservation system to manage book fair stall bookings and visitor registrations. Implemented reservation workflows, backend logic for availability management, and a structured, user-friendly interface, demonstrating practical full-stack web application development with database-driven design.",
      tech: [
        "Java",
        "Spring Boot",
        "MySQL",
        "REST APIs",
        "Web Application Development",
        "Database Design"
      ],
      code: "", // Add GitHub link if available
      demo: "", // Add demo link if available
      category: "Full Stack"
    },

    {
      id: 2,
      src: MarketHub,
      title: "MarketHub – Cloud-Native Webstore Platform",
      description:
        "Designed and developed a cloud-native e-commerce platform to demonstrate real-world microservices architecture and cloud engineering best practices. Built independently deployable backend services with event-driven communication using Apache Kafka, centralized authentication with Keycloak, and full observability via Prometheus and Grafana.",
      tech: [
        "Spring Boot",
        "Microservices",
        "Docker",
        "Kubernetes",
        "Kafka",
        "Keycloak",
        "Angular"
      ],
      code: "https://github.com/AhamedMinhaj456/MarketHub-cloud-native-webstore-architecture",
      demo: "https://book-fair-reservation-system-book-fair-reservation.nqmggx.easypanel.host/",
      category: "Cloud-Native"
    },
    {
      id: 3,
      src: MotorbikeRentingSelling,
      title: "Motorbike Renting & Selling Platform",
      description:
        "Designed and developed a full-stack web application to manage motorbike renting and selling operations. Implemented RESTful backend services and containerized the entire application using Docker and Docker Compose.",
      tech: [
        "Java",
        "Spring Boot",
        "MySQL",
        "Docker",
        "Docker Compose",
        "REST APIs"
      ],
      code: "https://github.com/AhamedMinhaj456/Motorbike-Renting-And-Selling-with-Docker",
      demo: "",
      category: "DevOps"
    }
  ];

  const FunctionalProjects = [
    {
      id: 1,
      src: RuleBasedMovieRecommendation,
      title: "Rule-Based Movie Recommendation System",
      description:
        "Built an explainable, rule-based movie recommendation system using pure Functional Programming in Haskell. Implemented a deterministic recommendation engine with clear filtering, scoring, and ranking logic, exposed via a REST API and consumed by a React frontend.",
      tech: [
        "Haskell",
        "Scotty",
        "Functional Programming",
        "REST APIs",
        "React.js",
        "TypeScript"
      ],
      code: "https://github.com/AhamedMinhaj456/Rule-Based-Movie-Recommendation-System-using-Haskell",
      demo: "",
      category: "Full Stack"
    },
    {
      id: 2,
      src: NYTSentimentAnalysis,
      title: "Sentiment & Engagement Analysis on NYT Comments",
      description:
        "Built a large-scale sentiment and engagement analysis system using Hadoop MapReduce to process over 2 million New York Times user comments. Implemented custom Java Mapper and Reducer logic for lexicon-based sentiment classification and visualized results using Python.",
      tech: ["Hadoop", "MapReduce", "HDFS", "Java", "Python", "Big Data"],
      code: "https://github.com/AhamedMinhaj456/Sentiment-and-Engagement-Analysis-on-New-York-Times-Comments-with-Hadoop-MapReduce",
      demo: "",
      category: "Big Data"
    }
  ];

  const DatabaseProjects = [
    {
      id: 1,
      src: SmartAutoPartsOrdering,
      title: "Smart Auto Parts Ordering System",
      description:
        "Designed and developed a relational database for a smart auto parts ordering system using MySQL. Modeled core entities and relationships to support parts inventory, orders, and suppliers.",
      tech: [
        "MySQL",
        "Database Design",
        "MySQL Workbench",
        "Relational Databases"
      ],
      code: "https://github.com/AhamedMinhaj456/Smart-auto-parts-ordering-system",
      demo: "",
      category: "Database"
    },
    {
      id: 2,
      src: EmployeeDatabaseManagement,
      title: "Employee Database Management System",
      description:
        "Developed a C++–based employee database management system to manage employee records, working hours, and salary calculations. Implemented using linked lists and fundamental data structures.",
      tech: ["C++", "Data Structures", "Linked Lists", "System Design"],
      code: "https://github.com/AhamedMinhaj456/Employee-Database-Management-System",
      demo: "",
      category: "Systems"
    }
  ];

  const ComputerVisionProjects = [
    {
      id: 1,
      src: TrafficCongestionDetection,
      title: "Traffic Congestion Detection System",
      description:
        "Developed a computer vision–based traffic congestion detection system using real-time video analysis. Implemented YOLOv8 for vehicle detection and OpenCV-based processing to estimate traffic density and congestion levels.",
      tech: ["Python", "YOLOv8", "OpenCV", "Computer Vision", "Streamlit"],
      code: "https://github.com/MoraisMNS/traffic-congestion-detection-computer-vision",
      demo: "",
      category: "Computer Vision"
    }
  ];

  const handleCodeClick = (e, code) => {
    e.stopPropagation();
    if (code) window.open(code, "_blank");
  };

  const handleDemoClick = (e, demo) => {
    e.stopPropagation();
    if (demo) window.open(demo, "_blank");
  };

  const handleCardClick = (projectId) => {
    setExpandedProjectId((prev) => (prev === projectId ? null : projectId));
  };

  const ProjectCard = ({ project }) => {
    const isExpanded = expandedProjectId === project.id;

    return (
      <div
        onClick={() => handleCardClick(project.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleCardClick(project.id);
        }}
        className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer"
      >
        {/* Image Preview - Compact */}
        <div className="relative overflow-hidden bg-gray-900/50 h-36">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category Badge */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="px-2 py-0.5 bg-gray-900/90 backdrop-blur-md text-cyan-300 text-xs font-medium rounded border border-cyan-500/30">
              {project.category}
            </span>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content - Compact */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            {/* Title - Smaller */}
            <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description - Toggle full on click */}
            <p
              className={`text-gray-400 text-xs leading-relaxed mb-3 ${
                isExpanded ? "" : "line-clamp-2"
              }`}
            >
              {project.description}
            </p>

            {/* Tech Stack - Compact - Show max 4, show all on expand */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {(isExpanded ? project.tech : project.tech.slice(0, 4)).map(
                (tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-gray-700/30 text-gray-400 text-xs rounded border border-gray-600/20 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
              {!isExpanded && project.tech.length > 4 && (
                <span className="px-2 py-0.5 text-gray-500 text-xs font-medium">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons - Compact */}
          <div className="flex gap-2 mt-auto">
            {project.code && (
              <button
                onClick={(e) => handleCodeClick(e, project.code)}
                className="flex-1 px-3 py-1.5 bg-gray-700/30 hover:bg-gray-600/40 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-1.5 text-xs font-medium border border-gray-600/20 hover:border-gray-500/40 group/btn"
              >
                <FaGithub className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
                Code
              </button>
            )}

            {project.demo && (
              <button
                onClick={(e) => handleDemoClick(e, project.demo)}
                className="flex-1 px-3 py-1.5 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 hover:from-cyan-600/30 hover:to-purple-600/30 text-cyan-300 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-1.5 text-xs font-medium border border-cyan-500/20 hover:border-cyan-500/40 group/btn"
              >
                <FaRocket className="w-3 h-3 group-hover/btn:translate-y-[-2px] transition-transform" />
                Demo
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ProjectSection = ({ title, projects, icon, gradient }) => (
    <div className="mb-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{icon}</span>
          <h3
            className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
          >
            {title}
          </h3>
        </div>
        <div
          className={`h-0.5 w-24 bg-gradient-to-r ${gradient} rounded-full`}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full min-h-screen py-16 relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base max-w-2xl">
            A showcase of my technical expertise across various domains
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mt-4"></div>
        </div>

        {/* Project Sections */}
        <ProjectSection
          title="Web Development"
          icon="🌐"
          gradient="from-cyan-400 to-blue-500"
          projects={WebProjects}
        />
        <ProjectSection
          title="Cloud"
          icon="☁️"
          gradient="from-blue-400 to-indigo-500"
          projects={CloudProjects}
        />
        <ProjectSection
          title="AI & ML"
          icon="🤖"
          gradient="from-purple-400 to-pink-500"
          projects={MLProjects}
        />
        <ProjectSection
          title="Mobile Application"
          icon="📱"
          gradient="from-green-400 to-cyan-500"
          projects={MobileProjects}
        />
        <ProjectSection
          title="Database Management Systems"
          icon="🗄️"
          gradient="from-yellow-400 to-orange-500"
          projects={DatabaseProjects}
        />
        <ProjectSection
          title="Functional Programming"
          icon="🧩"
          gradient="from-indigo-400 to-purple-500"
          projects={FunctionalProjects}
        />
        <ProjectSection
          title="Computer Vision"
          icon="👁️"
          gradient="from-pink-400 to-red-500"
          projects={ComputerVisionProjects}
        />
        <ProjectSection
          title="GUI Programming"
          icon="🖥️"
          gradient="from-orange-400 to-red-500"
          projects={GUIProjects}
        />
      </div>
    </div>
  );
};

export default Projects;
