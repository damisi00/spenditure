import React from "react";
import BG from "../images/update-bg.svg";
import ENVELOP from "../images/envelop.svg";

const Updates = () => {
  return (
    <div
      className="text-light text-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="p-5">
        <div>
          <h1>Want our Latest Updates?</h1>

          <p className="mt-4">Subscribe to our newsletter</p>
        </div>
        <form className="position-relative mt-5 d-flex justify-content-center">
          <div className="input-group w-75">
            <div className="position-relative start-50 z-index-3">
              <img src={ENVELOP} alt="envelop" />
            </div>
            <input
              className="update--input ps-4 form-control"
              type="email"
              placeholder="Your Email"
            />
            <button className="btn btn-dark start-0 text-light">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updates;
