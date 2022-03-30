import React from "react";
import MobileNav from "../home/MobileNavMenu";
import Add from "../../images/add.svg";
import Search from "../../images/search.svg";
import { Link } from "react-router-dom";

const Budget = () => {
  return (
    <div>
      <div className="budget-header container-fluid text-dark p-3">
        <div className="d-flex flex-row justify-content-between ">
          <h1>Budget</h1>
          <div>
            <Link to="/newbudget">
              <img className="me-4" src={Add} alt="" />
            </Link>

            <img className="img-fluid me-3" src={Search} alt="search" />
          </div>
        </div>
        <div className="budget--calender d-flex justify-content-around mt-1 text-center text-dark">
          <div className="col-sm-2">
            <p>2018</p>
            <button className="btn">Jan</button>
          </div>
          <div className="col-sm-2">
            <p>2018</p>
            <button className="btn">Jan</button>
          </div>
          <div className="col-sm-2">
            <p>2018</p>
            <button className="btn">Jan</button>
          </div>
          <div className="col-sm-2">
            <p>2018</p>
            <button className="btn">Jan</button>
          </div>
          <div className="col-sm-2">
            <p>2018</p>
            <button className="btn">Jan</button>
          </div>
          <div className="col-sm-2">
            <p>2018</p>
            <button className="btn">Jan</button>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="p-3 bdgt-card mb-3">
          <p className="text-start bdgt-fs mb-1">Budget name</p>
          <div className="budget-no d-flex justify-content-between align-items-end">
            <h3 className="fw-bold mb-0">
              $2440.90 <span className="bdgt-fs ps-1">50%</span>
            </h3>
            <p className="bdgt-fs  align-self-end mb-0">$5000.00</p>
          </div>
          <div className="bdgt-progress progress mt-3">
            <div
              className="progress-bar  bdgt-bar  w-50"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="p-3 bdgt-card mb-3">
          <p className="text-start bdgt-fs mb-1 ">Budget name</p>
          <div className="budget-no d-flex justify-content-between align-items-end">
            <h3 className="fw-bold mb-0">
              $2440.90 <span className=" bdgt-fs ps-1">79%</span>
            </h3>
            <p className="bdgt-fs  align-self-end mb-0">$5000.00</p>
          </div>
          <div className="bdgt-progress progress mt-3">
            <div
              className="progress-bar  bdgt-bar-two  w-75"
              role="progressbar"
              aria-valuenow="79"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="p-3 bdgt-card">
          <p className="text-start bdgt-fs mb-1">Budget name</p>
          <div className="budget-no d-flex justify-content-between align-items-end">
            <h3 className="fw-bold mb-0">
              $2440.90 <span className=" bdgt-fs ps-1">42%</span>
            </h3>
            <p className="bdgt-fs  align-self-end mb-0">$5000.00</p>
          </div>
          <div className="bdgt-progress progress mt-3">
            <div
              className="progress-bar  bdgt-bar  w-43"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default Budget;
