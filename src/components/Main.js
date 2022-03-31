import React from "react";
import { Link } from "react-router-dom";
import Google from "../images/download-google.svg";
import Apple from "../images/download-apple.svg";

const Greetings = () => {
  return (
    <div className="container">
      <h1 className="greeting--home">Home</h1>
      <p className="greeting--hello">Hello, Maria</p>
    </div>
  );
};

const UserImage = () => {
  return (
    <div className="container">
      <div className="card-text d-flex">
        <img
          className="user--img w-100 img-fluid"
          src="./Images/custmer-img.svg"
          alt=""
        />
      </div>
    </div>
  );
};

const Income = () => {
  return (
    <div className="container">
      <div className="home--income card">
        <div style={{ padding: "10px 10px" }}>
          <img
            style={{ color: "#41dc65" }}
            src="./Images/web-backarrow.svg"
            alt=""
          />
        </div>
        <p style={{ marginLeft: "10px", color: "#1d2025" }}>Income</p>
        <h5
          style={{
            padding: "0px 10px 10px",
            marginTop: "-15px",
            color: "#41dc65",
          }}
        >
          $6,593.75
        </h5>
      </div>
    </div>
  );
};

const Expense = () => {
  return (
    <div className="container">
      <div className="card home--income">
        <div style={{ padding: "10px 10px" }}>
          <img src="./Images/webforwardarrow.svg" alt="" />
        </div>
        <p style={{ marginLeft: "20px", color: "#1d2025" }}>Expense</p>
        <h5
          style={{
            padding: "0px 10px 10px",
            marginTop: "-15px",
            color: "#ff5460",
          }}
        >
          $2,645.50
        </h5>
      </div>
    </div>
  );
};

const Balance = () => {
  return (
    <div className="home--balance card p-3">
      <div className="d-inline-flex">
        <span>
          <h6 className="balance">My Balance</h6>

          <h4 className="balance--value">$25,520</h4>
        </span>

        <span style={{ marginLeft: "auto" }}>
          <img
            className="balance--calender"
            src="./images/calender.svg"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="col card border-0">
      <div className="card-body">
        <button className="activities--button card-title">
          View recent activities
        </button>

        <h5 className="card-subtitle mt-4">
          RECENT ACTIVITIES
          <Link to="/">
            <img
              style={{ marginLeft: "150px" }}
              src="./Images/dots-icon.svg"
              alt=""
            />
          </Link>
        </h5>

        <div className="card-text mt-3">
          <table className="w-100 h-100">
            <tbody className="mb-5">
              <tr>
                <td>
                  <img src="./images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Gaurthier Grewitt <br />
                  Friday, 11:08 PM
                </td>
                <td className="fw-bold text-success">$340.00</td>
              </tr>
              <tr>
                <td>
                  <img src="./Images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Sukhbirpal Dhalan <br />
                  Thursday, 01:00 AM
                </td>
                <td className="fw-bold text-success">$328.22</td>
              </tr>
              <tr>
                <td>
                  <img src="./Images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Lia Castro <br />
                  Tuesday, 07:12 AM
                </td>
                <td className="fw-bold text-danger">$2561.34</td>
              </tr>
              <tr>
                <td>
                  <img src="./Images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Xu Xuefeng <br />
                  Tuesday, 10:34 PM
                </td>
                <td className="fw-bold text-success">$931.12</td>
              </tr>
              <tr>
                <td>
                  <img src="./Images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Lia Castro <br />
                  Sunday, 05:40 PM
                </td>
                <td className="fw-bold text-success">$128.43</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Downloads = () => {
  return (
    <div className="container">
      <h4 className="card-title">Download the mobile App</h4>
      <div>
        <Link to="/">
          <img src={Google} alt="google-playstore" />
        </Link>{" "}
        <Link to="/">
          <img src={Apple} alt="Apple-store" />
        </Link>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="container">
      <h5 className="card-subtitle mt-4">
        Total Categories
        <span style={{ marginLeft: "110px" }}>
          <Link to="/">See all</Link>
        </span>
      </h5>

      <div className="card-text">
        <table className="w-100">
          <tbody>
            <tr>
              <td>
                <img src="./Images/grocery.svg" alt="" />
              </td>
              <td>
                Grocery <br />
                15 Aug, 2020
              </td>
              <td className="fw-bold">-$243.00</td>
            </tr>
            <tr>
              <td>
                <img src="./Images/Ipadpro.svg" alt="" />
              </td>
              <td>
                ipad Pro 2020 <br />
                10 Aug, 2020
              </td>
              <td className="fw-bold">-$799.00</td>
            </tr>
            <tr>
              <td>
                <img
                  style={{ width: "30px", height: "30px" }}
                  src="./Images/Uber.svg"
                  alt=""
                />
              </td>
              <td>
                Uber <br />5 Mar 2020
              </td>
              <td className="fw-bold">+$50.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <div className="">
        <div className="d-flex-xs card home-card pt-2 px-2 pe-2 mt-4 mb-5">
          <div className="d-flex justify-content-between px-1 pb-1">
            <div className="text-light">
              <Greetings />
            </div>
            <div>
              <UserImage />
            </div>
          </div>

          <div className="row g-2 justify-between">
            <div className="col-md-4 d-none d-md-flex">
              <div>
                <Income />
              </div>
              <div>
                <Expense />
              </div>
            </div>
            <div className="col-md-6">
              <Balance />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="d-none d-sm-none d-md-block d-lg-block col-md-6 col-lg-6 mb-0">
            <Activities />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 card border-0 mb-0 pb-0">
            <div className="card-body">
              <Downloads />

              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
