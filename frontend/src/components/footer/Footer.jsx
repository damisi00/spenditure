import React from "react";
import Logo from "../../images/footer-logo.svg";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Linkedin from "../../images/linkedin.svg";
import { NewsLetterForm } from "../Updates";

import "./footer.css";

const CompanyMenu = () => (
  <div className="menu-content">
    <h4>Company</h4>
    <div className="d-flex flex-column">
      <div className="footer-menu">
        <a href="/about"> About Us </a>
      </div>
      <div className="footer-menu">
        <a href="/contact"> FAQs </a>
      </div>
      <div className="footer-menu">
        <a href="http://blog.spenditure.com.ng/"> Blog </a>
      </div>
    </div>
  </div>
);
const FeatureMenu = () => (
  <div className="menu-content">
    <h4>Features</h4>
    <div className="d-flex flex-column">
      <div className="footer-menu">
        <a href="/budget"> Budgeting </a>
      </div>
      <div className="footer-menu">
        <a href="/save"> Save with Friends </a>
      </div>
      <div className="footer-menu">
        <a href="/tracker"> Tracker </a>
      </div>
      <div className="footer-menu">
        <a href="/credit"> Credit Score </a>
      </div>
    </div>
  </div>
);

const HelpMenu = () => (
  <div className="menu-content">
    <h4>Help Center</h4>
    <div className="d-flex flex-column">
      <div className="footer-menu">
        <a href="/privacy"> Privacy </a>
      </div>
      <div className="footer-menu">
        <a href="/terms"> Terms </a>
      </div>
      <div className="footer-menu">
        <a href="/account"> Security </a>
      </div>
    </div>
  </div>
);
const ContactMenu = () => (
  <div className="menu-content">
    <h4>Contact Us</h4>
    <div className="d-flex flex-column">
      <p className="">spenditure01@gmail.com</p>
      <p className="">+2349032559169</p>
      <div className="contact-us-icons">
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
);
const NewsletterMenu = () => (
  <div className="menu-content newsletter">
    <h4>Stay up to date</h4>
    <p className="mt-2">Subscribe To Our Newsletter</p>

    <NewsLetterForm />
  </div>
);

const Footer = () => {
  let today = new Date();
  let thisYear = today.getFullYear();

  return (
    <div className="spenditure__footer p-3">
      <div className="spenditure__footer-container">
        <div className="spenditure__footer-menu">
          {" "}
          <div className="row g-0 mb-5">
            <div className="col-sm-1">
              <div className="footer-logo-container mt-auto mb-auto w-100">
                <img className="footer-logo img-fluid" src={Logo} alt="logo" />
              </div>
            </div>
            <div className="col-sm-2">
              <CompanyMenu />
            </div>
            <div className="col-sm-2">
              <FeatureMenu />
            </div>
            <div className="col-sm-2">
              <HelpMenu />
            </div>
            <div className="col-sm-2">
              <ContactMenu />
            </div>
            <div className="col-sm-3 w-25">
              <NewsletterMenu />{" "}
            </div>
          </div>
        </div>
        <div className="spenditure__footer-mobile-container">
          <div className="">
            <NewsletterMenu />
          </div>
          <div className="spenditure__footer-mobile mt-4">
            <div className="d-flex">
              <CompanyMenu />
              <HelpMenu />
            </div>
            <div className="d-flex mt-5">
              <FeatureMenu />
              <ContactMenu />
            </div>
          </div>
          <div className="footer-logo-container-mobile">
            <img className="footer-logo" src={Logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>
          &copy; Copyright Spenditure <br /> {thisYear}
        </p>
      </div>
    </div>
  );
};

export default Footer;
