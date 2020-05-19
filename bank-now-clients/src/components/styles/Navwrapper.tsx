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
    flex: 2;
  }
  .logo {
    font-weight: 700;
    color: #ffbf00;
    margin-left: 1.345em;
  }
  .ml {
    margin-right: 10px;
  }
  nav {
    flex: 2;
    background-color: #fff;
    padding: 2rem;
  }
  .nav-linkz {
    justify-content: space-between;
    list-style: none;
    align-items: center;
    font-weight: 500;
    font-size: 17px;
  }
  .nav-linc {
    text-decoration: none;
  }
  .burger {
    display: none;
  }
  .burger div {
    width: 25px;
    background-color: white;
    height: 3px;
    flex: 1;
    margin: 5px;
  }
  .close-btn {
    display: none;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    body {
      overflow-x: hidden;
    }
    nav {
      height: 50vh;
      margin-top: 6rem;
      transition: all 1s ease-in;
      padding: 0rem;
      flex: 1;
      transform: translateX(150%);
    }
    .nav-linkz {
      flex-direction: column;
      justify-content: center;
      padding-left: 0px;
    }
    .nav-linkz li {
      margin: 2rem 0px;
      &:hover {
        background-color: #ffbf00;
        padding: 0.3rem 0.5rem;
        border-radius: 3px;
      }
      /* opacity: 0; */
    }
    .burger {
      display: block;
      cursor: pointer;
    }

    .navlink-active {
      transform: translateX(0%);
    }
    .li-animate {
      animation: navLinkFade 2s ease-out;
    }
    .close-toggle {
      display: block;
      animation: navLinkFade 2s ease-in;
    }
    @keyframes navLinkFade {
      0% {
        opacity: 0;
        transform: translateX(-100px);
      }

      80% {
        transform: translateX(10px);
        opacity: 0.5;
      }

      100% {
        opacity: 1;
        transform: translate(0px);
      }
    }
  }
`;
export default NavWrapper;
