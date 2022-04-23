import React from "react";
import Navbar from "../navbar/Navbar";
import ABOUTIMG1 from "../../images/aboutus1.png";
import ABOUTIMG2 from "../../images/aboutus2.png";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Linkedin from "../../images/linkedin.svg";
import Footer from "../footer/Footer";
import Updates from "../Updates";
import About from "./About";

const AboutPage = () => {
  return (
    <div>
      <div className=" fixed-top navbarScroll bg-light shadow-sm">
        <Navbar />
      </div>

      <section
        className="container text-center d-flex flex-column justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <div className="mt-5">
          <img src={ABOUTIMG1} alt="aboutus1" className="img-fluid" />
        </div>

        <div className="text-center card mt-5 border-0">
          <div className="card-body w-100 h-100">
            <h1 className="card-title">Our Mission</h1>
            <p className="about--mission card-text mt-4">
              To help you keep track of your finances through smart budgeting
              wise investments and savings as well as to help you reach your
              goals faster through consistent tracking.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="card border-0 h-100">
            <div className="card-body h-100 w-100">
              <h1 className="card-title">About Us</h1>
              <p className="about--about card-text mt-4">
                Spenditure is a finance app built by a team of intellectuals to
                help its users perform periodic financial activities without
                constrictions or complications. Research has it that Nigeria has
                over 200 million people and over 40% of the population are poor.
                Spenditure aims to make at least 50% of the populace financially
                independent. Spenditure helps users set short and long term
                financial goals, track budget(s) efficiently and also encourage
                users by giving rewards after meeting targeted goals. Spenditure
                affords you the opportunity to save conveniently. It deducts 10%
                of your income and divert it to your savings. <br />
                “Save and invest more, spend less and secure the future”
              </p>
            </div>
          </div>
        </div>
        <div>
          <About />
        </div>
        <div className="mt-5 row g-0">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <img className="img-fluid" src={ABOUTIMG2} alt="aboutus2" />
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column text-start align-items-center justify-content-center">
              <h1>Contact Us</h1>
              <p>Email: Spenditure@gmail.com</p>
              <p>Call: +2349000000000</p>
            </div>

            <div className="d-flex align-self-center">
              <a
                href="https://www.facebook.com/Spenditure-101039145805966/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer-icon" src={Facebook} alt="facebook" />
              </a>
              <a
                href="https://instagram.com/spenditure_"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer-icon" src={Instagram} alt="instagram" />
              </a>{" "}
              <a
                href="https://www.linkedin.com/company/spenditure/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer-icon" src={Linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <Updates />
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
