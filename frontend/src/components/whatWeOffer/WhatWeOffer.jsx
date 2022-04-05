import React from "react";
import "./whatWeOffer.css";
import { offers } from "./data";
import Offers from "./Offers";
import Fade from "react-reveal";

const WhatWeOffer = () => {
  const offer = offers.map((weOffer) => (
    <Offers key={weOffer.id} {...weOffer} />
  ));
  return (
    <div
      className="spenditure__whatweoffer section__padding"
      id="what-we-offer"
    >
      <Fade left cascade={true}>
        <div className="spenditure__whatweoffer-header">
          <h1> What We Offer</h1>
        </div>
      </Fade>
      {offer}
    </div>
  );
};

export default WhatWeOffer;
