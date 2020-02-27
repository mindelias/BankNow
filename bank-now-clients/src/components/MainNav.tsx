import React, { Fragment, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { LogOut } from "./redux/Auth/Auth.action";
// import AuthContext from "../context/auth/AuthContext";

interface props {
  logout: () => void;
  Auth: boolean;
  user: any;
}

const MainNav: React.FC<props> = ({ logout, Auth, user }) => {
  const history = useHistory();

  const logOut = () => {
    logout();
    history.push("/");
  };
  // const { fullName } = user
  const privateLinks = (
    <Fragment>
      {console.log(user)}
      <li className="nav-item text-white">Welcome {user && user.fullName}</li>
      <li className="nav-item " onClick={logOut}>
        <Link to="/" className="text-white">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link text-white">
          Dashboard
        </Link>
      </li>
    </Fragment>
  );
  const publicLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/register" className="nav-link text-white">
          SignUP
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link text-white">
          SignIN
        </Link>
      </li>
    </Fragment>
  );

  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">
      <Link to="/">
        {/* <h3 className="navbar-brand ">
          {" "}
          <i className="fas fa-id-card-alt"></i> Contact-App
        </h3> */}
        <div className="navbar-brand">
          <h1>
            <span className="fa fa-recycle ml-4 spani"></span> BankNow
          </h1>
        </div>
      </Link>

      <ul className="navbar-nav ml-auto mt-3">
        {Auth ? privateLinks : publicLinks}
      </ul>
    </NavWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  Auth: state.Auth.isAuthenticated,
  user: state.Auth.user
});

export default connect(mapStateToProps, { logout: LogOut })(MainNav);

// export default Sidebar;

const NavWrapper = styled.nav`
  background: rgb(0, 84, 205);
  font-family: "Righteous", cursive;
  .navbar-brand {
    color: white !important;
    font-size: 1.6rem;
    font-family: "Roboto";
  }
  .spani {
    color: #fdbd10;
  }
  .nav-link {
    color: white !important;

    text-transform: capitalize;
  }
  a {
    text-decoration: none;
  }
  .nav-item {
    margin: 0rem 5rem;
    color: white !important;
    font-size: 1.1rem;
  }
`;
