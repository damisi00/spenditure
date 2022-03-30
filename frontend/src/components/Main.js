import React from "react";
import { Link } from "react-router-dom";
import Google from "../images/download-google.svg";
import Apple from "../images/download-apple.svg";
import User from "../images/custmer-img.svg";
import MobileNav from "./MobileNavMenu";

const Greetings = () => {
  return (
    <div className="container">
      <h1 className="greeting--home">Home</h1>
      <p className="greeting--hello">Hello, Maria</p>
    </div>
  );
};

const Bell = () => {
  return (
    <div className="container">
      <div
        style={{ padding: "20px" }}
        className="d-block d-sm-block d-md-none d-lg-none position-relative"
      >
        <span
          style={{ right: "-3px", top: "18px" }}
          className="position-absolute translate-middle badge rounded-pill bg-danger"
        >
          3
        </span>
        <a href="/notification">
          <img src="./Images/bell.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

const UserImage = () => {
  return (
    <div className="container">
      <div className="card-text d-flex">
        <img className="user--img img-fluid" src={User} alt="" />
      </div>
    </div>
  );
};

const Income = () => {
  return (
    <div className="container g-0">
      <div className="home--income card">
        <div style={{ padding: "10px 10px" }}>
          <img
            style={{ color: "#41dc65" }}
            src="./Images/web-backarrow.svg"
            alt=""
          />
        </div>
        <p
          className="income-title"
          style={{ marginLeft: "10px", color: "#1d2025" }}
        >
          Income
        </p>
        <h5 className="income-value">$6,593.75</h5>
      </div>
    </div>
  );
};

const Expense = () => {
  return (
    <div className="container g-0">
      <div className="card home--income">
        <div style={{ padding: "10px 10px" }}>
          <img src="./Images/webforwardarrow.svg" alt="" />
        </div>
        <p className="expense-title">Expense</p>
        <h5 className="expense-value">$2,645.50</h5>
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
    <div className="total container">
      <span className="total-categories card-subtitle mt-4">
        Total Categories
      </span>
      <span className="see-all" style={{ marginLeft: "110px" }}>
        <Link to="/">See all</Link>
      </span>

      <div className="card-text">
        <table className="" style={{ width: "118%" }}>
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
              <div className="bell--compo">
                <Bell />
              </div>

              <UserImage />
            </div>
          </div>

          <div className="row justify-between">
            <div className="col-md-4 d-none d-md-flex">
              <div className="px-3">
                <Income />
              </div>
              <div className="px-1">
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

          <div className="col-sm-12 col-md-6 col-lg-6 card border-0 mb-0 px-0">
            <div className="card-body px-0">
              <div className="d-none d-sm-none d-md-flex d-lg-flex">
                <Downloads />
              </div>
              <div className="container">
                <Categories />
              </div>
              <div className=" d-flex d-sm-flex d-md-none d-lg-none pt-3 px-3 mb-5">
                <div className="px-1">
                  <Income />
                </div>
                <div className="px-1">
                  <Expense />
                </div>
              </div>
              <div className="mobile--nav nav d-flex d-md-none d-lg-none justify-content-center flex-row nav-tabs mt-0 bg-light h-25 w-100 me-auto ms-auto">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
