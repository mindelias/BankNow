import styled from "styled-components";

const NavWrapper = styled.div`
  header {
    /* background: #fff; */
    /* padding: 1.5em; */
    width: 100%;
    display: flex;
    height: 12vh;
    justify-content: space-between;
  }
  .logo-container,
  .nav-linkz {
    display: flex;
  }
  .logo-container {
    flex: 1 0 40%;
    
  }
  .logo {
    font-weight: 700;
    color: #ffbf00;
    margin-left: 1.345em;
  }
  .ml {
    margin-right: 10px;
  }
  .topnav {
    flex: 1 0 40%;
    background-color: #fff;
    padding: 2rem;
  }
  .nav-linkz {
    justify-content: space-between;
    list-style: none;
    align-items: center;
    display: flex;
    font-weight: 500;
    font-size: 17px;
  }
  .nav-linc {
    text-decoration: none;
    font-size: 18px;
    color: blue;
    &:hover {
      color: darkblue;
    }
  }

  .navigation_button {
    display: none;
    margin: 2rem  ;
    cursor: pointer;
  }

  .navigation_button .navigation_icon {
    position: relative;
    /* margin-top: 10px; */
    height: 3px;
    width: 25px;
    background-color: white;
    border-radius: 3px;
    display: inline-block;
    transition: all 0.2s ease-in-out;
  }

  .navigation_icon::before,
  .navigation_icon::after {
    content: "";
    width: 25px;
    height: 3px;
    border-radius: 3px;
    background-color: white;
    display: inline-block;
    position: absolute;
    left: 0;
    box-shadow: 0 2px 5px rgba(255, 170, 80, 0.2);
    transition: all 0.2s ease-in-out;
  }
  .navigation_icon::before {
    /* top: -0.8rem; */
    transform: translateY(-13px);
  }
  .navigation_icon::after {
    /* top: 0.8rem; */
    transform: translateY(13px);
  }

  .navigation_button.open .navigation_icon {
    background: transparent;
  }
  .navigation_button.open .navigation_icon::before {
    transform: rotate(45deg);
    top: 0;
  }
  .navigation_button.open .navigation_icon::after {
    transform: rotate(-45deg);
    top: 0;
  }

  @media screen and (max-width: 768px) {
    .topnav {
      transition: all .5s ease-in;
      height: 35vh;
      padding: 0;
      margin-top: 10rem;
      margin-right: -8rem;
      justify-content: center;
      align-items: center;
      flex: 1 0 18%;
      display: none;
    }
    .nav-linkz {
      flex-direction: column;
      /* justify-content:center; */
      align-items: center;
    }
    .topnav.responsive {
      display: flex;
    }
    .topnav.responsive li {
      margin: 1rem 0px;
      &:hover {
        background-color: #ffbf00;
        padding: 0.3rem 0.5rem;
        border-radius: 3px;
      }
      /* opacity: 0; */
    }

    .navigation_button {
      display: block;
      cursor: pointer;
    }
  }
`;
export default NavWrapper;
