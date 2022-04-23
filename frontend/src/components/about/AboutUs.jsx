import React from "react";

const AboutUs = ({ title, desc }) => {
  return (
    <div className="col-sm-4 col-md-4 col-lg-4 mt-5 px-5">
      <div className="card border-0 h-100">
        <h2 className="card-title">{title}</h2>
        <div className="about--believe card-body  text-start shadow-lg">
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
