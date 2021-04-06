import React from "react";

import Header from "../containers/Header/Header";
import Hero from "../containers/Hero/Hero";
import Features from "../containers/Features/Features";
import Prototypes from "../containers/Prototypes/Prototypes";
import About from "../containers/About/About";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Prototypes />
      <About />
    </main>
  );
};

export default HomePage;
