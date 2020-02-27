import React, { useState, useEffect } from "react";
import LoginWrapper from "../styles/LoginWrapper";
import { useHistory } from "react-router";
import financee from "../assets/finance.svg";
import { connect } from "react-redux";
import { Register } from "../redux/Auth/Auth.action";
import MainNav from "../MainNav";
// import styled from 'styled-components'

interface props {
  reg: (args: any) => void;
  Auth: boolean;
}

const SignUp: React.FC<props> = ({ reg, Auth }) => {
  const history = useHistory();
  useEffect(() => {
    // console.log(Auth);
    // console.log("work sharply")
    if (Auth == true) {
      history.push("/createacc");
    }
    
  }, [reg, Auth]); 
  // const []
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });
  const { fullName, phoneNumber, email, password, confirmPassword } = user;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    console.log("this is a jam",Auth)
    reg(user);
    
  };
  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // html view

  return (
    <div>
      <MainNav/>
    <LoginWrapper className="container">
      <div className="row">
        <div className="col-6 bg-right text-center">
          <h3>Welcome to </h3>
          <img src={financee} alt = 'sigup image'/>
        </div>
        <div className="formview col-6">
          <form className="" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullName"
                placeholder="Enter fullname"
                value={fullName}
                onChange={onchangeInput}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={onchangeInput}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Phone number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onchangeInput}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={onchangeInput}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Confirm password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onchangeInput}
              />
            </div>

            <button type="submit" className="btn btn-info btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    </LoginWrapper>
    </div>
  );
};
const mapStateToProps = (state: any ) => ({
  Auth: state.Auth.isAuthenticated 
});

export default connect(mapStateToProps, { reg: Register })(SignUp);
