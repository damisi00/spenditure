import React from "react";
import Feature from "./Feature";
import "./features.css";
import { cards } from "./data";

const Features = () => {
  const card = cards.map((feature) => (
    <Feature key={feature.id} feature={feature} />
  ));

  return <div className="spenditure__features section__padding">{card}</div>;
};

export default Features;
