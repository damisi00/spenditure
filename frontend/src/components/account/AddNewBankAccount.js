import React from "react";
import { Link } from "react-router-dom";
import Bank from "../../images/Bank";
import Arrow2 from "../../images/arrow2";

const AddNewBankAccount = () => {
  return (
    <div>
      <nav className="container-fluid   py-2 " style={{ color: "#1d2025" }}>
        <div className="create-bdgt d-flex align-item-center ">
          <Link to="">
            <img src={Arrow2} alt="back arrow icon" />
          </Link>
          <h2 className="fs-6 fw-bold ps-2 mb-0 align-self-end">Add account</h2>
        </div>
      </nav>
      <main className="text-start pt-1 pb-5  empty-budget-main w-90  mx-auto">
        <section className="align-items-center my-4 justify-content-center d-flex">
          <img src={Bank} alt="Bank icon" className=" " width="35%" />
        </section>
        <form id="create-budget">
          <h2 className=" w-50 pb-5 fs-6">Add primary bank account</h2>
          <div className=" create-bdgt-name pb-3">
            <label for="account-name" className="form-label budget-label  ">
              Account name
            </label>
            <input
              type="text"
              className="form-control py-1 px-0"
              placeholder="Account name here"
              id="account-name"
              required
            />
          </div>
          <div className=" create-bdgt-name pb-3">
            <label for="starter-amount" className="form-label budget-label  ">
              Starter amount
            </label>
            <input
              type="text"
              className="form-control py-1 px-0"
              placeholder="$0,0000.00"
              id="starter-amount"
              required
            />
          </div>
          <Link to="./Account-successful" className="text-decoration-none">
            <button type="button" className="btn account-submit-btn mt-3 w-100">
              Submit
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default AddNewBankAccount;
