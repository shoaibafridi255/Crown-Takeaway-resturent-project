import React from "react";
import "../ComponentCss/About.css";
import aboutimg from "../../assets/About.png";
import OpeningHours from "./OpeningHours";

export default function About() {
  return (
    <>
      <div className="container-fluid bg-dark text-white  aboutContainer">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-end mb-3 mb-md-0">
            <img src={aboutimg} alt="" style={{ height: "50rem" }} />
          </div>
          <div className="col-md-6 col-sm-12 text-start d-flex align-items-center">
            <div className="innerText">
              <h1 className="text-white innerHead">We Are Crown Takeaway</h1>
              <p className="text-justify">
                Welcome to Crown Takeaway, where delicious flavors and quality
                ingredients come together to create a memorable dining experience.
                At Crown Takeaway, we pride ourselves on offering a wide variety
                of mouthwatering dishes, from juicy burgers to crispy fried
                chicken, all made fresh to order. Whether you're craving a quick
                bite on the go or a hearty meal to enjoy at home, our menu has
                something for everyone. With our friendly service and commitment
                to excellence, Crown Takeaway is your go-to destination for
                satisfying your hunger. Come visit us today and taste the
                difference that sets us apart!
              </p>
              <button className="btn btn-lg btn-warning rounded-pill button text-white">Read More</button>
              <OpeningHours/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

