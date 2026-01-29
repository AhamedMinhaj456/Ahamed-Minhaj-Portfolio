import React from "react";
import HeroImage from "../assets/dp.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Chip = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 ring-1 ring-white/10 backdrop-blur">
    {children}
  </span>
);

const Home = () => {
  return (
    <div
      name="home"
      className="relative min-h-screen w-full text-white overflow-hidden"
    >
      {/* --- Background: subtle grid + aurora spots --- */}
      <div className="absolute inset-0 -z-20 opacity-20 [background:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(244,114,182,0.16),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(99,102,241,0.16),transparent_35%)]" />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 inline-flex items-center gap-2 text-xs sm:text-sm text-white/80">
              <span className="px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10">
                🚀 Open to opportunities
              </span>
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300">
                Ahamed Minhaj
              </span>
            </h1>

            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">
              Associate Software Engineer <span className="text-white/50">@</span> HighTechX
            </h2>

            <h3 className="mt-1 text-base sm:text-lg text-gray-300">
              BSc (Hons) in Computer Engineering — Faculty of Engineering, University of Ruhuna
            </h3>

            <p className="text-gray-300 py-5 max-w-xl leading-relaxed">
              A Computer Engineering graduate with 2 years of experience in FullStack. Who building modern <strong>web apps</strong> with
              <strong> React (TypeScript)</strong>, <strong>Spring Boot</strong>, and <strong>MySQL</strong>.
              Experienced with <strong>JasperReports</strong> (ported from Crystal Reports) and migrating
              <strong> T-SQL</strong> procedures to <strong>MySQL</strong>. I love learning fast, crafting clean UIs, and shipping reliable APIs.
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2">
              <Chip>⚛️ React (TS)</Chip>
              <Chip>🌱 Spring Boot</Chip>
              <Chip>🗄️ MySQL</Chip>
              <Chip>📊 Jasper / Crystal</Chip>
              <Chip>🧩 Agile • Jira</Chip>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="experience"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg shadow-cyan-900/30"
              >
                Experience
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={24} className="ml-1" />
                </span>
              </Link>

              {/* Optional: update hrefs */}
              <a
                href= "/Ahamed_Minhaj.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Download CV
              </a>

              <div className="flex items-center gap-3 ml-1">
                <a
                  href= "https://github.com/ahamedminhaj456" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href= "https://www.linkedin.com/in/ahamed-minhaj-24697a215/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Photo & floating chips */}
          <div className="relative flex items-center justify-center">
            {/* Gradient border glow */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-indigo-500 opacity-70 blur-xl" />
            <img
              src={HeroImage}
              alt="Profile of Ahamed Minhaj"
              className="relative rounded-[2rem] w-64 sm:w-80 md:w-[26rem] object-cover ring-1 ring-white/10 shadow-2xl"
            />

            {/* Floating chips */}
            <div className="hidden md:block absolute -left-6 top-8">
              <Chip>🧠 Quick Learner</Chip>
            </div>
            <div className="hidden md:block absolute right-0 -top-4">
              <Chip>🤝 Team Player</Chip>
            </div>
            <div className="hidden md:block absolute -right-4 bottom-10">
              <Chip>🔧 Problem Solver</Chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
