import React, { useEffect } from "react";
import Navbar from "./homepage-comps/Navbar";
import Home from "./homepage-comps/Home";
import About from "./homepage-comps/About";
import Techs from "./homepage-comps/Techs";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Techs />
    </>
  );
};

export default HomePage;
