import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <ThemeToggle />

      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <Contact />

      {/* Admin CRUD */}
      <Admin />

      <Footer />
    </div>
  );
}

export default App;