import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";
import Technologies from "./components/Technologies";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-800">
     
      <NavBar />
      <Home  />
      <SocialLink />
      <About  />
      <Experience />
      <Projects />
      <Certificates />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
