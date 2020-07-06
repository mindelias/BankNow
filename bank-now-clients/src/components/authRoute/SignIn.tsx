import React, { useState, useEffect } from "react";
import LoginWrapper from "../styles/LoginWrapper";
import { useHistory } from "react-router";
import financee from "../assets/finance.svg";
import loader from "../assets/loader.svg";
import { connect } from "react-redux";
import { Login } from "../redux/Auth/Auth.action";
import MainNav from "../MainNav";
import AlertView from "../layouts/Alert";
import { Alert } from "../redux/alert/AlertAction";
// import styled from 'styled-components'

interface props {
  reg: (args: any) => void;
  Auth: boolean;
  Alert: (arg1: string, arg2: string) => void;
  error: any;
  loading: boolean;
}

const SignIn: React.FC<props> = ({ reg, Auth, Alert, error, loading }) => {
  const history = useHistory();
  useEffect(() => {
    if (Auth === true) {
      history.push("/createacc");
    }
    if (error) {
      Alert(error, "danger");
    }
    // eslint-disable-next-line
  }, [reg, Auth, error]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      Alert("Please enter all fields", "danger");
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
      <LoginWrapper className="container-fluid">
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
              <img src={financee} alt="signin-pfx"  />
            </div>
            <div className="formview col-md-6 col-xs-12">
              <form className="" onSubmit={handleSubmit}>
                <h5 className="text-center my-3">
                  {" "}
                  sign in with your details.{" "}
                </h5>
                <AlertView />
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

export default connect(mapStateToProps, { reg: Login, Alert })(SignIn);
