import React from "react";
import BG from "../images/update-bg.svg";
import { Icon } from '@iconify/react';



export const NewsLetterForm = () => {
    return (
      <form className="position-relative d-flex justify-content-center">
        <div className="input-group">
          <Icon className="envelop-icon" icon="akar-icons:envelope" />
          <input
            className="news-input posiion-relative form-control"
            type="email"
            placeholder="Your Email"
          />
          <button className="btn btn-dark start-0 text-light">Submit</button>
        </div>
      </form>
    );
  };
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
        <div className="d-flex flex-row justify-content-center ">
          <NewsLetterForm/>
        </div>
        
      </div>
    </div>
  );
};

export default Updates;
