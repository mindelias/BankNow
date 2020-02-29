import React from "react";
import ladycoin from "./assets/ladycoin.jpeg";
import capture from "./assets/capture.png";
import pexels from "./assets/pexels.jpeg";
import float from "./assets/float.png";
import styled from "styled-components";
import { ButtonCont1, ButtonCont2 } from "./assets/Button";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <BgCover className="container-fluid text-center">
      <Navbar />
      <div className="container-fluid">
        <div className="banner-info">
          <div className="banner-w3ls-inner">
            <h4>Invest in your Future</h4>
            <h3>
              BANK WITH <br></br> US
            </h3>
            <p className="text-white">
              Integer sit amet mattis quam, sit amet ultricies velit. Praesent
              ullamcorper dui turpis.
            </p>

            <div className="test-info text-left mt-lg-5 mt-4">
              <a href="/login" className="btn">
                <ButtonCont2>Sign in</ButtonCont2>
              </a>

              <a href="/register" className="btn">
                <ButtonCont1>Get Started</ButtonCont1>
              </a>
            </div>
            <img src={float} width="300px" height = '100px' className="App-logo img1" />
          </div>
        </div>
      </div>
    </BgCover>
  );
}

export default Homepage;
const BgCover = styled.div`
  background: linear-gradient(
      106deg,
      rgb(0, 0, 200, 0.7),
      rgb(0, 10, 200, 0.7),
      rgb(44, 20, 250, 0.7)
    ),
    url(${ladycoin});
  background-size: cover;
  /* background-image: */
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* height: 100vh; */
  min-height: 50em;

  .banner-info {
    padding-top: 10em;
    margin-left: 3.5em;
  }
  .img1 {
    position: absolute;

    right: 3%;
  }
  .img2 {
    position: absolute;
    top: 70%;
    right: 20%;
  }
  .banner-w3ls-inner {
    text-align: left;
    padding: 2em;
    width: 60%;
  }

  .banner-info h3 {
    text-shadow: 3px 1px 3px rgba(45, 45, 45, 0.38);
    font-size: 5em;
    color: #fff;
    font-weight: 600;
    line-height: 1em;
    font-family: "Julius Sans One" !important;
  }

  .banner-info h4 {
    color: #ec1c24;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
    margin-bottom: 1em;
    font-family: "Arvo";
  }

  .banner-top,
  .banner-top1,
  .banner-top2,
  .banner-top3 {
    min-height: 50em;
  }
`;
