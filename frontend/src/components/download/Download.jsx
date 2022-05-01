import React from "react";
import AppleStore from "../../images/store-apple.png";
import GoogleStore from "../../images/store-google.png";

import "./download.css";

const Download = () => {
  return (
    <div className="spenditure__download section__padding">
      <div className="spenditure__download-container">
        <div className="spenditure__download-content-header">
          <h1>Download the free app</h1>
        </div>
        <div className="spenditure__download-content-p">
          <p>Spend less and secure the future with spenditure</p>
        </div>
        <div className="spenditure__download-content-btn">
          <div>
            <img className="img" src={AppleStore} alt="" />
          </div>
          <div>
            <img className="img" src={GoogleStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
