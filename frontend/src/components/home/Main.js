import React from "react";
import { Link } from "react-router-dom";
import Google from "../../images/download-google.svg";
import Apple from "../../images/download-apple.svg";
import User from "../../images/custmer-img.svg";
import MobileNav from "./MobileNavMenu";
import Grocery from "../../images/grocery.svg";
import Ipad from "../../images/Ipadpro.svg";
import Uber from "../../images/uber1.svg";
import Medicine from "../../images/medicine-icon.svg";

const Greetings = () => {
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning!";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon!";
  } else {
    timeOfDay = "evening!";
  }

  return (
    <div className="container">
      <h1 className="greeting--home">Home</h1>
      <p className="greeting--hello">Good {timeOfDay} Maria.</p>
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

export const Income = () => {
  return (
    <div className="container g-0">
      <Link to="/income" className="home--income card">
        <div style={{ padding: "10px 10px" }}>
          <img
            style={{ color: "#41dc65" }}
            src="./Images/web-backarrow.svg"
            alt=""
          />
        </div>
        <p className="income-title">Income</p>
        <h5 className="income-value">$6,593.75</h5>
      </Link>
    </div>
  );
};

export const Expense = () => {
  return (
    <div className="container g-0">
      <Link to="/expense" className="card home--income">
        <div style={{ padding: "10px 10px" }}>
          <img src="./Images/webforwardarrow.svg" alt="" />
        </div>
        <p className="expense-title">Expense</p>
        <h5 className="expense-value">$2,645.50</h5>
      </Link>
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

const Items = ({ img, item, price, date }) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="w-50">
          <p>
            {item} <br /> <span>{date}</span>
          </p>
        </div>
        <div>
          <b>{price}</b>
        </div>
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

        <div className="mt-4">
          <Items
            img={Medicine}
            item="Gaurthier Grewitt"
            date="Friday, 11:08 PM"
            price="$340.00"
          />
          <Items
            img={Medicine}
            item="Sukhbirpal Dhalan"
            date="Thursday, 01:00 AM"
            price="$328.22"
          />
          <Items
            img={Medicine}
            item="Lia Castro"
            date="Tuesday, 07:12 AM"
            price="$2561.34"
          />
          <Items
            img={Medicine}
            item="Xu Xuefeng"
            date="Tuesday, 10:34 PM"
            price="$931.12"
          />
          <Items
            img={Medicine}
            item="Lia Castro"
            date="Sunday, 05:40 PM"
            price="$128.43"
          />
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
      <div className="total mb-4">
        <span className="total-categories card-subtitle mt-4">
          Total Categories
        </span>
        <span className="see-all">
          <Link to="/">See all</Link>
        </span>
      </div>

      <div>
        <Items
          img={Grocery}
          item="Grocery"
          date="15, Aug. 2020"
          price="-$243.00"
        />
        <Items
          img={Ipad}
          item="Ipad pro 2020"
          date="10, Aug. 2020"
          price="-$799.00"
        />
        <Items img={Uber} item="Uber" date="5, Mar. 2020" price="+$50.00" />
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
              <div>
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
