import React from "react";
import { Link } from "react-router-dom";
import ShareIcon from "../../images/shareicon.svg"
import ExportIcon from "../../images/exporticon.svg"

const Export = () => {
  return <div className="">
      <Link to="/income" className="export--share card">
        <div style={{ padding: "10px 10px" }}>
          <img
            style={{ color: "#41dc65" }}
            src={ExportIcon}
            alt=""
          />
        </div>
        <h5 className="income-value">Export</h5>
      </Link>
  </div>;
};

const Share = () => {
  return <div className="">
      <Link to="/income" className="export--share card">
        <div style={{ padding: "10px 10px" }}>
          <img
            src={ShareIcon}
            alt=""
          />
        </div>
        <h5 className="income-value">Share</h5>
      </Link>
  </div>;
};

const ExportShare = () => {
  return (
    <div className="d-flex justify-content-between">
      <Export />
      <Share />
    </div>
  );
};

export default ExportShare;
