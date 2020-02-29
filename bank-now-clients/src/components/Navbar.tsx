import React from "react";
import NavWrapper from "./styles/Navwrapper";

function Navbar() {
  return (
    <NavWrapper>
      <div className="main-w3-pvt-header-sec  py-3" id="home">
        <header>
          <div className="container-fluid">
            <div className="header d-lg-flex justify-content-between align-items-center py-lg-3 px-lg-3">
              <div id="logo">
                <h1>
                  <a href="index.html">
                    <span className="fa fa-recycle ml"></span>BankNow
                  </a>
                </h1>
              </div>  

              <div className="w3pvt-bg">
                <div className="nav_w3pvt">
                  <nav>
                    <label htmlFor="drop" className="toggle">
                      Menu
                    </label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu">
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/about">Login </a>
                      </li>
                      <li>
                        <a href="/about">Register </a>
                      </li>
                       
                    </ul>
                  </nav>
                </div>

                <div className="justify-content-center">
                  <div className="apply-w3-pvt ml-lg-3">
                    <a className="btn read" href="/register" role="button">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </NavWrapper>
  );
}

export default Navbar;
