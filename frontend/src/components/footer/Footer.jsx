import React from "react";
import Logo from "../../images/footer-logo.svg";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Linkedin from "../../images/linkedin.svg";
import Arrow from "../../images/submit-arrow.svg";

import "./footer.css";

const CompanyMenu = () => (
  <div className="menu-content">
    <h4>Company</h4>
    <div className="d-flex flex-column">
      <div className="pt-2 footer-menu">
        <a href="/about"> About Us </a>
      </div>
      <div className="footer-menu">
        <a href="/contact"> Contact Us </a>
      </div>
      <div className="footer-menu">
        <a href="/security"> Security </a>
      </div>
      <div className="footer-menu">
        <a href="/goals"> Goals </a>
      </div>
      <div className="footer-menu">
        <a href="/terms"> Our Terms </a>
      </div>
      <div className="footer-menu">
        <a href="/terms"> Terms of Service </a>
      </div>
    </div>
  </div>
);
const FeatureMenu = () => (
  <div className="menu-content">
    <h4>Features</h4>
    <div className="d-flex flex-column">
      <div className="pt-2 footer-menu">
        <a href="/budget"> Budgeting </a>
      </div>
      <div className="footer-menu">
        <a href="/save"> Save with Friends </a>
      </div>
      <div className="footer-menu">
        <a href="/tracker"> Tracker </a>
      </div>
      <div className="footer-menu">
        <a href="/mobile"> Mobile App </a>
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
      <div className="pt-1 footer-menu">
        <a href="/help">Spenditure Help</a>
      </div>
      <div className="footer-menu">
        <a href="/faq"> FAQs </a>
      </div>
      <div className="footer-menu">
        <a href="/privacy"> Privacy </a>
      </div>
      <div className="footer-menu">
        <a href="/terms"> Terms </a>
      </div>
      <div className="footer-menu">
        <a href="/account"> Account Management </a>
      </div>
      <div className="footer-menu">
        <a href="/accounts"> Accounts & Transactions </a>
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
  <div className="menu-content">
    <h4>Stay up to date</h4>
    <p className="mt-2">Subscribe To Our Newsletter</p>

    <form action="" className="position-relative pt-3 w-100">
      <input
        type="text"
        className="footer-input pe-5 w-100"
        placeholder="Email"
      />
      <button className="input-arrow position-absolute border-0">
        <img src={Arrow} alt="arrow" />
      </button>
    </form>
  </div>
);

const Footer = () => {
  let today = new Date();
  let thisYear = today.getFullYear();

  return (
    <div className="spenditure__footer p-3 pt-5">
      <div className="spenditure__footer-container pt-5 mb-5">
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
          <div className="spenditure__footer-mobile">
            <div className="first-row">
              <CompanyMenu />
              <div className="mt-4">
                <HelpMenu />
              </div>
            </div>
            <div className="second-row">
              <FeatureMenu />
              <div className="mt-5">
                <ContactMenu />
              </div>
            </div>
          </div>
          <div>
            <NewsletterMenu />
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
