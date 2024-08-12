import React from "react";
import "../ComponentCss/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <h1 className="text-center my-4 contatHead">Contact us</h1>
            {/* <hr /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <h3>Contact Details</h3>
            <p className="text-justify">
              Have questions or special requests? We're here to help! Reach out
              to us anytime, and we'll get back to you as soon as possible.
            </p>
            <br />
            <h5>Phone:</h5>
            <p>0141 611 2250</p>
            <br />
            <h5>Emial:</h5>
            <p>clearbusinessbyadrian@gmail.com</p>
            <br />
            <h5>Address:</h5>
            <p>Stalling Down, Cowbridge, South Glamorgan, CF71 7DT</p>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control form-control-lg border border-dark name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
              </div>
              <div className="col-md-12 mt-3">
                <input
                  type="email"
                  className="form-control form-control-lg email border border-dark "
                  placeholder="Email"
                  aria-label="email"
                />
              </div>

              <div className="col-12 mt-4">
                <input
                  type="text"
                  className="form-control form-control-lg subject border border-dark "
                  id="inputSubject"
                  placeholder="Subject"
                />
              </div>

              <div className="mt-4">
                <textarea
                  placeholder="Message"
                  className="form-control textAria border border-dark "
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
              <div className="col">
                <button
                  className="btn btn-warning btn-lg rounded-pill w-100 mt-4 p-2 text-white button"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
