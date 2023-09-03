import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mx-2  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Products">
                  Products
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About Us
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-brand-container">
            <Link className="navbar-brand" href="/">
              Navbar
            </Link>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <Link className="btn btn-danger position-relative mx-2" to="/CartPage">
              cart{""}
            </Link>
          </div>
          <Link  to='/Signup'type="button" className="btn  btn-danger my-2">
            Sing Up
          </Link>
        </div>
      </nav>
    </>
  );
}
