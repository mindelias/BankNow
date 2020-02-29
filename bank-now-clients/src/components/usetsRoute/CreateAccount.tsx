import React, { useEffect, useState } from "react";
import MainNav from "../MainNav";
import LoginWrapper from "../styles/LoginWrapper";
import { useHistory } from "react-router";
import financee from "../assets/finance.svg";
import { connect } from "react-redux";
import { CreateAcc } from "../redux/Account/Account.action";
import { loadUser } from "../redux/Auth/Auth.action";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface props {
  reg: (args: any) => void;
  userDet: any;
  isAccount: boolean;
  load: () => void;
}

const CreateAccount: React.FC<props> = ({ reg, load, userDet, isAccount }) => {
  const [acctnum, Setacctnum] = useState("");
  useEffect(() => {
    load();

    if (userDet) {
      Setacctnum(userDet.accountNumber);
    }
  }, [isAccount]);
  const [user, setUser] = useState({
    accountType: "savings"
  });
  const { accountType } = user;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reg(user);
  };
  const onchangeInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({ accountType: e.target.value });
  };

  // html view

  return (
    <div>
      <MainNav />
      {isAccount ? (
        <div className="center d-flex justify-content-center">
          <WhiteBox className="container text-center col-4 offset-md 2">
            <span>
              <i className="far fa-check-circle spani"></i>
            </span>
            <h1>Account Created Succesfully</h1>
            <h5>
              Your account Number is{" "}
              <span className="text-danger"> {acctnum}</span>{" "}
            </h5>
            <h5>
              <Link to="/dashboard">View Dashboard</Link>
            </h5>
          </WhiteBox>
        </div>
      ) : (
        <LoginWrapper className="container">
          <div className="row">
            <div className="col-6 bg-right text-center">
              <h3>Welcome to </h3>
              <img src={financee} />
            </div>
            <div className="formview col-6">
              <form className="" onSubmit={handleSubmit}>
                <label htmlFor="sel1">Select list (select one):</label>
                <select
                  className="form-control"
                  defaultValue={accountType}
                  value={accountType}
                  onChange={onchangeInput}
                >
                  <option value="savings">Savings</option>
                  <option value="current">Current</option>
                </select>

                <button type="submit" className="btn btn-info btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </LoginWrapper>
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  userDet: state.Account.user,
  isAccount: state.Account.isAccount
});

export default connect(mapStateToProps, { reg: CreateAcc, load: loadUser })(
  CreateAccount
);
const WhiteBox = styled.div`
  background: white;
  box-shadow: 2px 2px 3px 3px gray;
  border: 2px solid white;
  padding: 4em 2em;
  /* vertical-align:center; */
  margin: 11rem;
  h1 {
    font-size: 30px;
  }
  .spani {
    color: green;
    font-size: 3.5em;
  }

  .center {
  }
`;
