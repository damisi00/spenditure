import React from "react";
import { Income } from "../home/Main";
import { Expense } from "../home/Main";
import MobileNav from "../home/MobileNavMenu";

const Tracker = () => {
  return (
    <div classNameName="container">
      <section className="tracker">
        <div className="tracker-header container-fluid text-dark p-3">
          <div className="d-flex flex-row justify-content-between ">
            <h1>Tracker</h1>

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

        <div className="p-5">
          <div className="bg-light p-4 rounded">
            <h3>time</h3>
            <h2>$2446.90</h2>
            <canvas
              id="myChart"
              style={{ width: "100%", maxWidth: "600px" }}
            ></canvas>
          </div>
        </div>

        <div className="p-3 mb-5">
          <div className="income-expenses d-block d-sm-block d-md-none d-lg-none mb-5">
            <div className="d-flex justify-content-between mb-5">
              <Income />
              <Expense />
            </div>
          </div>
        </div>
      </section>
      <MobileNav />
    </div>
  );
};
export default Tracker;
