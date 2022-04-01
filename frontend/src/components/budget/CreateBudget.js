import React from "react";
import Back from "../../images/back.svg";
import { Link } from "react-router-dom";
import Search from "../../images/search.svg";
import Bank from "../../images/bankbudget.svg";
import Card from "../../images/bankcard.svg";

const BudgetBank = () => {
  return (
    <div>
      <Link to="#form" className="home--income card">
        <div style={{ padding: "10px 10px" }}>
          <img style={{ color: "#41dc65" }} src={Bank} alt="" />
        </div>
        <h5 className="mt-3 p-3 fw-bolder text-dark">Bank</h5>
      </Link>
    </div>
  );
};

const BudgetCard = () => {
  return (
    <div>
      <Link to="#form" className="home--income card">
        <div style={{ padding: "10px 10px" }}>
          <img style={{ color: "#41dc65" }} src={Card} alt="" />
        </div>
        <h5 className="mt-3 p-3 fw-bolder text-dark">Card</h5>
      </Link>
    </div>
  );
};

const Form = () => {
  return (
    <div>
      <form id="create-budget">
        <div class="create-bdgt-name pb-4">
          <label
            for="create-bdgt-name"
            class="form-label budget-label fw-bold "
          >
            Budget name
          </label>
          <input
            type="text"
            class="form-control py-1 px-0"
            placeholder="Enter budget name"
            id="create-bdgt-name"
            required
          />
        </div>
        <div class="w-60 pb-5">
          <div class="create-bdgt-name pb-3">
            <label for="enter-bdgt" class="form-label budget-label fw-bold ">
              Enter budget
            </label>
            <input
              type="text"
              class="form-control py-1 px-0"
              placeholder="$0,0000.00"
              id="enter-bdgt"
              required
            />
          </div>
          <div class="create-bdgt-name ">
            <label for="bdgt-duration" class="form-label budget-label fw-bold ">
              Budget duration
            </label>
            <select class="form-select ps-0 py-1" id="bdgt-duration" required>
              <option selected placeholder="1 month">
                1 month
              </option>
              <option value="1">1 month</option>
              <option value="2">3 months</option>
              <option value="3">6 months</option>
              <option value="4">12 months</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary bdgt-submit my-3 w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

const CreatBudget = () => {
  return (
    <div>
      <div className="create--budget d-flex flex-row justify-content-between">
        <div className="d-flex p-3">
          <Link to="/budget">
            <img className="me-4 mt-2" src={Back} alt="" />
          </Link>

          <h1>Create budget</h1>
        </div>

        <img className="budget--search me-3" src={Search} alt="search" />
      </div>
      <div className="p-3">
        <h1>Choose Category</h1>

        <div className="mt-3 d-flex justify-content-between">
          <BudgetBank />
          <BudgetCard />
        </div>
        <div id="form" className="mt-5">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CreatBudget;
