import React from "react";
import NavWrapper from "./styles/Navwrapper";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

function NavBar() {
  const [active, setActive] = useState<boolean | null>(false);
  const [isOpen, setIsOpen] = useState(false);
  const ToggleClass = () => {
    setActive(true);
  };
  //  setTimeout(
  //    () => setActive(false),

  //    3000
  //  );
  const toggleClose = () => setActive(false);

  return (
    // <Navbar color="" light expand="md">
    //   <NavbarBrand href="/">reactstrap</NavbarBrand>
    //   <NavbarToggler onClick={toggle} />
    //   <Collapse isOpen={isOpen} navbar>
    //     <Nav className="mr-auto" navbar>
    //       <NavItem>
    //         <NavLink href="/components/">Components</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink href="https://github.com/reactstrap/reactstrap">
    //           GitHub
    //         </NavLink>
    //       </NavItem>
    //       <UncontrolledDropdown nav inNavbar>
    //         <DropdownToggle nav caret>
    //           Options
    //         </DropdownToggle>
    //         <DropdownMenu right>
    //           <DropdownItem>Option 1</DropdownItem>
    //           <DropdownItem>Option 2</DropdownItem>
    //           <DropdownItem divider />
    //           <DropdownItem>Reset</DropdownItem>
    //         </DropdownMenu>
    //       </UncontrolledDropdown>
    //     </Nav>
    //     <NavbarText>Simple Text</NavbarText>
    //   </Collapse>
    // </Navbar>
    <NavWrapper>
      <header>
        <div className="logo-container">
          <h1>
            <a className="logo" href="/">
              <span className="fa fa-recycle ml"></span>BankNow
            </a>
          </h1>
        </div>

        <nav className={active ? "navlink-active" : ""}>
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
        <div className="burger" onClick={ToggleClass}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className='' onClick={toggleClose}>
          <span>
            <i className="fas fa-times fa-2x"></i>
          </span>
        </div>
      </header>
    </NavWrapper>
  );
}

export default NavBar;
