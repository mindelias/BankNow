import React, { useState, useEffect } from "react";
import LoginWrapper from "../styles/LoginWrapper";
import { useHistory } from "react-router";
import financee from "../assets/four.svg";
import loader from "../assets/loader.svg";
import { connect } from "react-redux";
import { Register } from "../redux/Auth/Auth.action";
import MainNav from "../MainNav";
import AlertView from "../layouts/Alert";
import { Alert } from "../redux/alert/AlertAction";
// import styled from 'styled-components'

interface props {
  reg: (args: any) => void;
  Auth: boolean;
  error: any;
  loading: boolean;
  Alert: (arg1: string, arg2: string) => void;
}

const SignUp: React.FC<props> = ({ reg, Auth, Alert, error, loading }) => {
  const history = useHistory();
  useEffect(() => {
    if (Auth === true) {
      history.push("/createacc");
    }
    if (error) {
      Alert(error["issue"], "danger");
    }
    // eslint-disable-next-line
  }, [reg, Auth, error]);
  // const []
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const { fullName, phoneNumber, email, password, confirmPassword } = user;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !email || !password || !phoneNumber || !confirmPassword) {
      Alert("Please enter all fields", "danger");
    } else if (password !== confirmPassword) {
      Alert("Password do not match", "danger");
    } else if (password.length < 6) {
      Alert(
        `Password must be atleast 6 charcters, you are currently using ${password.length} character`,
        "danger"
      );
    } else {
      reg(user);
    }
  };
  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // html view

  return (
    <div>
      <MainNav />
      <LoginWrapper className="container">
        {loading ? (
          <div className="loader">
            <img
              style={{ width: "80px", zIndex: 5 }}
              src={loader}
              alt="loader"
            />
          </div>
        ) : (
          <div className="row">
            <div className="col-6 bg-right text-center">
              <img src={financee} alt="sigup-igs" />
            </div>
            <div className="formview col-md-6 col-xs-12">
              <form className="" onSubmit={handleSubmit}>
                <h5 className="text-center my-3"> Register to get started </h5>
                <AlertView />
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
        )}
      </LoginWrapper>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  Auth: state.Auth.isAuthenticated,
  error: state.Auth.error,
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, { reg: Register, Alert })(SignUp);
