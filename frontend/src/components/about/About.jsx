import React from "react";
import { aboutData } from "./aboutData";
import AboutUs from "./AboutUs";

const About = () => {
  const abouts = aboutData.map((about) => (
    <AboutUs key={about.id} {...about} />
  ));
  return (
    <div className="row">
      {abouts}
    </div>
  );
};

export default About;
