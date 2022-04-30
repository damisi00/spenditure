import React from "react";
import "./LandingPage.css";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Security from "../security/Security";
import GetFinance from "../getFinance/GetFinance";
import WhatWeOffer from "../whatWeOffer/WhatWeOffer";
import Features from "../features/Features";
// import Testimonials from "../testimonials/Testimonials";
import Download from "../download/Download";
import Footer from "../footer/Footer";
import { Routes, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="App">
      <div className="fixed-top bg-light shadow-sm">
        <Routes>
          <Route exact path="/*" element={<Navbar />}></Route>
        </Routes>
      </div>
      <div className="gradient-bg" style={{marginTop: '100px'}}>
        <Header />
      </div>
      <Security />
      <GetFinance />
      <WhatWeOffer />
      <Features />
      {/* <Testimonials /> */}
      <Download />
      <Footer />{" "}
    </div>
  );
};

export default LandingPage;
