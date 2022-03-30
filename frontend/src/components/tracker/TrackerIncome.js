import React from "react";
import ExportShare from "./ExportShare";
import Back from "../../images/back.svg";
import { Link } from "react-router-dom";
import TransIcon from "../../images/transicon.svg";

const IncomeTransaction = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div>
          <div>
            <img src={TransIcon} alt="" />
          </div>
          <div>
            <p>Sukhbirpal Dhalan</p>
            <p>progress bar</p>
          </div>
          <div>
            <h1>$340.40</h1>
            <small>65%</small>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div>
          <div>
            <img src={TransIcon} alt="" />
          </div>
          <div>
            <p>Sukhbirpal Dhalan</p>
            <p>progress bar</p>
          </div>
          <div>
            <h1>$340.40</h1>
            <small>65%</small>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div>
          <div>
            <img src={TransIcon} alt="" />
          </div>
          <div>
            <p>Sukhbirpal Dhalan</p>
            <p>progress bar</p>
          </div>
          <div>
            <h1>$340.40</h1>
            <small>65%</small>
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
              <img className="me-4" src={Back} alt="" />
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
      <IncomeTransaction />

      <ExportShare />
    </div>
  );
};
export default TrackerIncome;
