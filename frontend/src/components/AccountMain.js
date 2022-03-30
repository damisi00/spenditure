import React from "react";
import Arrow from '../images/arrow-forward.svg'

const AccountMain = () => {
  return (
    <div>
      <div className="card border-0">
        <div className="card-body">
          <div className="card-title">
            <h3>Account</h3>
            <h5>Afternoon Bianca</h5>
            <div
              style={{ border: "1px solid rgb(29, 26, 26)", width: "100%" }}
            ></div>
            <div className="card-text">
              <div className="row mt-4">
                <div className="col-sm-6">
                  <img
                    style={{
                      border: "dashed",
                      borderRadius: "50%",
                      borderColor: "greenyellow",
                      borderWidth: "10px",
                    }}
                    src="./Images/custmer-img.svg"
                    alt=""
                  />
                </div>
                <div className="col-sm-6">
                  <div
                    className="card p-4"
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#3ec3d5",
                    }}
                  >
                    <div className="row">
                      <div className="col-sm-8">
                        <h3>Bianca Grace</h3>
                        <h5 className="text-white">United Bank of Africa</h5>
                        <p>ACN: 0123456789</p>
                        <h3 className="text-white">$2446.9</h3>
                      </div>
                      <div className="col-sm-4">
                        <button className="btn border border-1 rounded-3 text-center p-2 text-white">
                          Update
                        </button>
                        <p>Credit score: 73.50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="row mt-5">
        <div className="col-sm-6">
          <div>
            <button
              style={{
                padding: "10px 30px",
                borderRadius: "15px",
                width: "264px",
              }}
              type="button"
              className="btn btn-light border border-1 border-dark px-5 mb-3 position-relative"
            >
              Profile
              <span
                style={{ right: "5px" }}
                className="position-absolute top-50 start- translate-middle"
              >
                <img src={Arrow} alt="arrow" />
              </span>
            </button>
          </div>
          <div>
            <button
              style={{
                padding: "10px 30px",
                borderRadius: "15px",
                width: "264px",
              }}
              type="button"
              className="btn btn-light border border-1 border-dark px-5 mb-3 position-relative"
            >
              About
              <span
                style={{ right: "5px" }}
                className="position-absolute top-50 start- translate-middle"
              >
                <img src={Arrow} alt="arrow" />
              </span>
            </button>
          </div>
          <div>
            <button
              style={{
                padding: "10px 30px",
                borderRadius: "15px",
                width: "264px",
              }}
              type="button"
              className="btn btn-light border border-1 border-dark px-5 mb-3 position-relative"
            >
              Settings
              <span
                style={{ right: "5px" }}
                className="position-absolute top-50 start- translate-middle"
              >
                <img src={Arrow} alt="arrow" />
              </span>
            </button>
          </div>
        </div>

        <div className="col-sm-6">
          <div>
            <button
              style={{
                padding: "10px 0px 10px 30px",
                borderRadius: "15px",
                width: "264px",
              }}
              type="button"
              className="btn btn-light border border-1 border-dark pe-5 mb-3 position-relative"
            >
              Banks and Cards
              <span
                style={{ right: "5px" }}
                className="position-absolute top-50 start- translate-middle"
              >
                <img src={Arrow} alt="arrow" />
              </span>
            </button>
          </div>
          <div>
            <button
              style={{
                padding: "10px 0px 10px 30px",
                borderRadius: "15px",
                width: "264px",
              }}
              type="button"
              className="btn btn-light border border-1 border-dark pe-5 mb-4 position-relative"
            >
              Statement of Account
              <span
                style={{ right: "5px" }}
                className="position-absolute top-50 start- translate-middle"
              >
                <img src={Arrow} alt="arrow" />
              </span>
            </button>
          </div>
          <div className="ms-5">
            <span className="pe-4">
              {" "}
              <b>Show My Balance</b>{" "}
            </span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountMain;
