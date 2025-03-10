import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heading from "./components/heading";
import Search from "./components/Search";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Allprojects from "./Datas/Allprojects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Heading />
        <Search />
        <Introduction />
        <AboutMe />
        <Skills />
        <Allprojects />

        <Routes>
          {/* ✅ This prevents the "No routes matched location /" warning */}
          <Route path="/" element={<></>} />

          {/* Existing projects route */}
          <Route path="/projects" element={<Allprojects />} />
        </Routes>
        <Contact />
      </div>
    </Router>
    
  );
};

export default App;
