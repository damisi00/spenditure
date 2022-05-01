import React from "react";
import peopleImg from "../../images/header-img.png";
import headerDots from "../../images/header-dots.png";
import AppleStore from "../../images/store-apple.png";
import GoogleStore from "../../images/store-google.png";
import "./header.css";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="spenditure__header section__padding">
      <div className="spenditure__header-content">
        <Fade left cascade={true}>
          <h1 className="spenditure__header-text">
            A simplified way to take charge and <br />
            <span className="green-text">control of your finances</span>
          </h1>
          <p>
            Create custom budgets, track financial expenditures and discover
            investment opportunities{" "}
          </p>
          <div className="d-flex justify-content-center spenditure__header-content-button">
            <Link className="text-decoration-none" to="/signup">
              <button className="signup__">
                Sign up for Spenditure
              </button>
            </Link>
          </div>
          <div className="spenditure__header-download">
            <div className="app-store">
              <img src={AppleStore} alt="applelogo"/>
            </div>
            <div className="google-pay">
              <img src={GoogleStore} alt="playStore logo"/>
            </div>
          </div>
        </Fade>
      </div>
      <div className="spenditure__header-images">
        <Fade right cascade={true}>
          <div className="img-people">
            <img src={peopleImg} className="header-img" alt="header-people" />
          </div>
          <div className="img-dots">
            <img src={headerDots} className="header-img" alt="dots" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
