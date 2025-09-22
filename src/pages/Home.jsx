import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Introduction from "../components/Home/Introduction";
import Benefits from "../components/Home/Benefits";
import Outcomes from "../components/Home/Outcomes";
import KeyThemes from "../components/Home/KeyThemes";
import ProposedFormat from "../components/Home/ProposedFormat";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <Benefits />
      <Outcomes />
      <KeyThemes />
      <ProposedFormat />
      <Contact />
    </div>
  );
};

export default Home;
