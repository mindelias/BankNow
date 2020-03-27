import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Navigation() {
  return (
    <div className="container">
      <ul>
        <li className="pointer">
          <Link to="/alldetails" className="nav-link ">
            <span className="fa fa-user-plus"></span> All Users Data
          </Link>
        </li>
        <li className="pointer">
          <Link to="/alltransactions" className="nav-link">
            <span className="fa fa-user-plus"></span> All Transactions
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
