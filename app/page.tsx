import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Services from "./services/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import Footer from "./footer/page";

function page() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default page;
