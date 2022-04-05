import React from "react";

const Feature = (props) => {
  return (
    <div className="spenditure__feature">
      <div className="spenditure__feature-card">
        <div className="spenditure__feature-img-container">
          <img
            src={props.feature.CardImg}
            className="card-img"
            alt="feature-card"
          />
        </div>
        <div className="spenditure__feature-content">
          <h1>{props.feature.header}</h1>
          <p>{props.feature.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
