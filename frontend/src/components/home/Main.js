import React from "react";
import { Link } from "react-router-dom";
import User from "../../images/custmer-img.svg";
import MobileNav from "./MobileNavMenu";
import Grocery from "../../images/grocery.svg";
import Ipad from "../../images/Ipadpro.svg";
import Uber from "../../images/uber1.svg";
import Credited from "../../images/credited.png";
import Debited from "../../images/debited.png";
import Create from "../../images/create-icon.png";
import Card from "../../images/add-card.png";
import Security from "../../images/set-security.png";

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
    <div className="">
      {/* <h1 className="greeting--home">Home</h1> */}
      <p className="greeting--hello">Good {timeOfDay} Maria.</p>
    </div>
  );
};

const Bell = () => {
  return (
    <div className="">
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
    <div className="">
      <div className="">
        <img className="user--img img-fluid rounded-circle" src={User} alt="" />
      </div>
    </div>
  );
};

export const Income = () => {
  return (
    <div className="">
      <Link to="/income" className="home--income card">
        <div>
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
    <div className="">
      <Link to="/expense" className="card home--income">
        <div>
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
    <div className="home--balance p-3">
      <div className="row ">
        <div className="col">
          <h6 className="balance">My Balance</h6>

          <h4 className="balance--value">$25,520</h4>
        </div>
      </div>
    </div>
  );
};

export const Items = ({ img, item, price, date }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex gap-5">
        <div>
          <img src={img} alt="" />
        </div>
        <p>
          {item} <br /> {date}
        </p>
      </div>
      <strong className={img === Credited ? "text-success" : "text-danger"}>
        {price}
      </strong>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="recent col card border-0">
      <div className="card-body">
        <h5 className="card-subtitle mt-4 d-flex justify-content-between">
          RECENT ACTIVITIES
          <Link to="/">
            <img src="./Images/dots-icon.svg" alt="" />
          </Link>
        </h5>

        <div className="mt-4 d-flex flex-column">
          <Items
            img={Credited}
            item="Transportation category credited"
            date="Friday, 11:08 PM"
            price="$340.00"
          />
          <Items
            img={Credited}
            item="Business savings category credited"
            date="Thursday, 01:00 AM"
            price="$328.22"
          />
          <Items
            img={Debited}
            item="Emergency fund category debited"
            date="Tuesday, 07:12 AM"
            price="$2561.34"
          />
          <Items
            img={Credited}
            item="Rent savings category credited"
            date="Tuesday, 10:34 PM"
            price="$931.12"
          />
          <Items
            img={Debited}
            item="Airpods money category debited"
            date="Sunday, 05:40 PM"
            price="$128.43"
          />
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="">
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
      <div className="px-4 pb-5 home-card">
        <div className="d-flex justify-content-center row pt-2 px-2 mt-4 mb-5">
          <div className="d-flex justify-content-between px-1 pb-1">
            <div className="d-flex align-items-center gap-3">
              <div>
                <UserImage />
              </div>
              <div>
                <Greetings />
              </div>
            </div>
            <div>
              <div className="bell--compo">
                <Bell />
              </div>
            </div>
          </div>

          <div className="bal-inco-exp row justify-between mt-4">
            <div className="col">
              <Balance />
            </div>
            <div className="col d-none d-md-flex d-lg-flex gap-4">
              <div className="">
                <Income />
              </div>
              <div className="">
                <Expense />
              </div>
            </div>
          </div>
          <div>
            <ul className="d-flex justify-content-center gap-5 mt-5">
              <li>
                <a className="d-flex flex-column text-decoration-none" href="/">
                  <img
                    className="icon--img mx-auto"
                    src={Create}
                    alt="budget"
                  />
                  <small className="mt-2 text-black">Create a Budget</small>
                </a>
              </li>
              <li>
                <a className="d-flex flex-column text-decoration-none" href="/">
                  <img className="icon--img mx-auto" src={Card} alt="card" />
                  <small className="mt-2 text-black">Add Card</small>
                </a>
              </li>
              <li>
                <a className="d-flex flex-column text-decoration-none" href="/">
                  <img className="icon--img mx-auto" src={Security} alt="sec" />
                  <small className="mt-2 text-black">
                    Set Security Question
                  </small>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="d-none d-sm-none d-md-block d-lg-block col-md-12 col-lg-12 mb-0">
            <Activities />
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 card border-0 mb-0 px-0 d-flex d-sm-flex d-md-none d-lg-none">
            <div className="card-body px-0">
              <div className="container">
                <Categories />
              </div>
              <div className=" d-flex d-sm-flex d-md-none d-lg-none pt-3 mb-5 justify-content-center justify-content-evenly">
                <div className="">
                  <Income />
                </div>
                <div className="">
                  <Expense />
                </div>
              </div>
              <div className="">
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
