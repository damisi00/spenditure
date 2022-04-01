import React from "react";
import ExportShare from "./ExportShare";
import Back from "../../images/back.svg";
import { Link } from "react-router-dom";
import TransIcon from "../../images/transicon.svg";

const IncomeCard = () => {
  return (
    <div>
      <div className="income--card p-4 mb-3">
        <p>May</p>
        <h2>$1675.50</h2>
        <div className="border-bottom border-dark"></div>
      </div>
    </div>
  );
};

const IncomeTransaction = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="d-flex justify-content-between w-100">
          <div className="p-">
            <img src={TransIcon} alt="" />
          </div>
          <div className="d-flex justify-content-between w-75 border-dark border-bottom mb-3">
            <div className="p-">
              <p className="income--username">Sukhbirpal Dhalan</p>
              <p>progress bar</p>
            </div>
            <div className="p- d-flex flex-column">
              <h5 className="income--fig">$340.40</h5>
              <small className="align-self-end">65%</small>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex justify-content-between w-100">
          <div className="p-">
            <img src={TransIcon} alt="" />
          </div>
          <div className="d-flex justify-content-between w-75 border-dark border-bottom mb-3">
            <div className="p-">
              <p className="income--username">Sukhbirpal Dhalan</p>
              <p>progress bar</p>
            </div>
            <div className="p- d-flex flex-column">
              <h5 className="income--fig">$340.40</h5>
              <small className="align-self-end">65%</small>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex justify-content-between w-100">
          <div className="p-">
            <img src={TransIcon} alt="" />
          </div>
          <div className="d-flex justify-content-between w-75 border-dark border-bottom mb-3">
            <div className="p-">
              <p className="income--username">Sukhbirpal Dhalan</p>
              <p>progress bar</p>
            </div>
            <div className="p- d-flex flex-column">
              <h5 className="income--fig">$340.40</h5>
              <small className="align-self-end">65%</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrackerIncome = () => {
  return (
    <div className="container">
      <div className="tracker-header container-fluid text-dark p-3">
        <div className="d-flex flex-row justify-content-between ">
          <div className="d-flex">
            <Link to="/tracker">
              <img className="me-4 mt-2" src={Back} alt="" />
            </Link>

            <h1>Income</h1>
          </div>

          <img
            className="img-fluid"
            src="./Images/Search-icon.svg"
            alt="search"
          />
        </div>
        <div className="d-flex justify-content-around mt-3 text-center text-dark">
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
      <IncomeCard />
      <IncomeTransaction />

      <ExportShare />
    </div>
  );
};
export default TrackerIncome;
