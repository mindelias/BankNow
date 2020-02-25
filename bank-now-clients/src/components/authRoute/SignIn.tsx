import React, { useState, useEffect } from "react";
import LoginWrapper from "../styles/LoginWrapper";
import { useHistory } from "react-router";
import financee from "../assets/finance.svg";
import { connect } from "react-redux";
import { Register, Login } from "../redux/Auth/Auth.action";
// import styled from 'styled-components'

interface props {
  reg: (args: any) => void;
  Auth: boolean;
}

const SignIn: React.FC<props> = ({ reg, Auth }) => {
  const history = useHistory();
  useEffect(() => {
    console.log(Auth);
    console.log("work sharply");
    if (Auth == true) {
      history.push("/login");
    }
  }, [reg, Auth]);
  // const []
  const [user, setUser] = useState({
    email: "",

    password: ""
  });
  const { email, password } = user;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    console.log("this is a jam", Auth);
    reg(user);
  };
  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // html view

  return (
    <LoginWrapper className="container">
      <div className="row">
        <div className="col-6 bg-right text-center">
          <h3>Welcome to </h3>
          <img src={financee} />
        </div>
        <div className="formview col-6">
          <form className="" onSubmit={handleSubmit}>
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
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={onchangeInput}
              />
            </div>

            <button type="submit" className="btn btn-info btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </LoginWrapper>
  );
};
const mapStateToProps = (state: any) => ({
  Auth: state.Auth.isAuthenticated
});

export default connect(mapStateToProps, { reg: Login })(SignIn);
