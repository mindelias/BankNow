import React from "react";
import NavWrapper from "./styles/Navwrapper";
import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState<boolean | null>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <NavWrapper>
      <header>
        <div className="logo-container">
          <h1>
            <a className="logo" href="/">
              <span className="fa fa-recycle ml"></span>BankNow
            </a>
          </h1>
        </div>

        <nav className={isOpen ? "topnav responsive" : "topnav"}>
          <ul className="nav-linkz">
            <li className={active ? "li-animate" : ""}>
              <a href="index.html" className="nav-linc">
                Home
              </a>
            </li>
            <li className={active ? "li-animate" : ""}>
              <a href="/about" className="nav-linc">
                About Us
              </a>
            </li>
            <li className={active ? "li-animate" : ""}>
              <a href="/about" className="nav-linc">
                Login{" "}
              </a>
            </li>
            <li className={active ? "li-animate" : ""}>
              <a href="/about" className="nav-linc">
                Register{" "}
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={isOpen ? "navigation_button open" : "navigation_button"}
          onClick={toggleButton}
        >
          <span className="navigation_icon">&nbsp;</span>
        </div>
      </header>
    </NavWrapper>
  );
}

export default NavBar;
