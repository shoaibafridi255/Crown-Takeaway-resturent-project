import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import '../ComponentCss/Menu.css'


export default function OurMenu() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col">
            <h1 className="text-center mb-4  mainHead">Our Menu</h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3  mx-auto  ">
            <div
              className="card border border-dark cards"
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img1} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Burger</h5>
                <p className="card-text">
                  A burger is a juicy, flavorful stack of grilled meat, fresh
                  veggies, and melted cheese nestled between two soft buns.
                </p>
                <span className="fw-bold">15$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
            <div
              className="card border border-dark cards"
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img2} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Pasta</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="fw-bold">10$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
            <div
              className="card border border-dark cards"
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img1} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Burger</h5>
                <p className="card-text">
                  A burger is a juicy, flavorful stack of grilled meat, fresh
                  veggies, and melted cheese nestled between two soft buns.
                </p>
                <span className="fw-bold">15$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
            <div
              className="card border border-dark cards "
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img2} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Pasta</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="fw-bold">10$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
            <div
              className="card border border-dark cards"
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img1} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Burger</h5>
                <p className="card-text">
                  A burger is a juicy, flavorful stack of grilled meat, fresh
                  veggies, and melted cheese nestled between two soft buns.
                </p>
                <span className="fw-bold">15$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
            <div
              className="card border border-dark cards"
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img2} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Pasta</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="fw-bold">10$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
            <div
              className="card border border-dark cards"
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img1} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Burger</h5>
                <p className="card-text">
                  A burger is a juicy, flavorful stack of grilled meat, fresh
                  veggies, and melted cheese nestled between two soft buns.
                </p>
                <span className="fw-bold">15$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
            <div
              className="card border border-dark cards"
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img2} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Pasta</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="fw-bold">10$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
            <div
              className="card border border-dark cards"
              style={{ width: "22rem", height: "26rem" }}
            >
              <img src={img1} className="card-img-top" alt="img-1" />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">Delicious Burger</h5>
                <p className="card-text">
                  A burger is a juicy, flavorful stack of grilled meat, fresh
                  veggies, and melted cheese nestled between two soft buns.
                </p>
                <span className="fw-bold">15$</span>
                <Link
                  to="/OurMenu"
                  className="btn btn-warning text-white rounded-circle "
                  style={{ marginLeft: "15rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
