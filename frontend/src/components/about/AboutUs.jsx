import React from "react";

const AboutUs = ({ title, desc }) => {
  return (
    <div className="col d-flex justify-content-center">
      <div>
        <h2 className="card-title">{title}</h2>
        <div className="about--believe card-body  text-start shadow-lg">
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
