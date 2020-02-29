import React, { useEffect, useState } from "react";
import Wrapper from "../styles/DashWrapper";
import profile from "../assets/avatar.png";
import MainNav from "../MainNav";
import { connect } from "react-redux";
import { loadUser } from "../redux/Auth/Auth.action";
import {
  loadAccount,
  AddMoney,
  transferMoney,
  getTransation
} from "../redux/Account/Account.action";
import ViewTransactions from "../layouts/ViewTransactions";
import { Alert } from "../redux/alert/AlertAction";
import AlertView from "../layouts/Alert";

interface props {
  // reg: (args: any) => void;
  userDet: any;
  user: any;
  isAccount: boolean;
  isUpdated: boolean;
  load: () => void;
  loadAcc: () => void;
  AddCash: (args: any) => void;
  Transfer: (args: any) => void;
  getTransactions: () => void;
  Alert: (arg1: string, arg2: string) => void;
  error: any;
}

const Dashboard: React.FC<props> = ({
  load,
  userDet,
  user,
  loadAcc,
  AddCash,
  Transfer,
  isUpdated,
  getTransactions,
  Alert,
  error
}) => {
  useEffect(() => {
    load();
    loadAcc();
    if (isUpdated) {
      window.location.reload();
    }
    if (error) {
      Alert(error, "danger");
    }
  }, [isUpdated, error]);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const showModal = () => {
    setShow1(true);
    console.log("displayed");
  };

  const showModal2 = () => {
    setShow2(true);
    console.log("displayed");
  };

  const hideModal = () => {
    setShow1(false);
    setShow2(false);
  };
  const DisplayTransactions = () => {
    getTransactions();
  };
  const [money, setMoney] = useState({
    amount: "",
    accountNumber: ""
  });

  const [money1, setMoney1] = useState({
    Amount: ""
  });

  const { amount, accountNumber } = money;
  const { Amount } = money1;

  const onchangeInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoney1({ Amount: e.target.value });
  };

  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoney({ ...money, [e.target.name]: e.target.value });
  };
  const AddMoneyAcct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddCash(money1);
    // window.location.reload()
  };
  const TransferMoney = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Transfer(money);
    // window.location.reload()
  };

  console.log(userDet);
  return (
    <div>
      <MainNav />
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-3 sideBar text-white">
              <h2 className="text-center"> profile and Settings </h2>
              <hr />
              <ul>
                <li>
                  <span>
                    <i className="fas fa-sort-numeric-down"></i>
                  </span>{" "}
                  Account Number
                  <h5 className="ml-4 text-warning">
                    {" "}
                    # {userDet && userDet.accountNumber}
                  </h5>
                </li>
                <li>
                  <span>
                    <i className="fas fa-lock"></i>
                  </span>{" "}
                  Authentication
                </li>
                <li>
                  {" "}
                  <span>
                    <i className="fas fa-bell"></i>
                  </span>
                  Notifications{" "}
                  <span className="badge badge-lg badge-danger">5</span>
                </li>
              </ul>
              <h2 className="text-center"> Dashboard </h2>
              <hr />
              <ul>
                <li className="pointer" onClick={DisplayTransactions}>
                  <span>
                    <i className="fas fa-history"></i>
                  </span>{" "}
                  Transaction History
                </li>
                <li className="pointer">
                  <span>
                    <i className="fas fa-tasks"></i>
                  </span>{" "}
                  Manage Accounts
                </li>
                <li className="pointer">
                  <span>
                    <i className="fas fa-cog"></i>
                  </span>{" "}
                  Settings
                </li>
              </ul>

              <h2 className="text-center"> Profile </h2>
              <hr />
              <ul>
                <li>
                  <span>
                    <i className="far fa-credit-card"></i>
                  </span>{" "}
                  Deposit
                </li>
                <li>
                  <span>
                    <i className="fas fa-donate"></i>
                  </span>{" "}
                  Loans
                </li>
                <li>
                  <span>
                    <i className="fas fa-money-check-alt"></i>
                  </span>{" "}
                  Invest
                </li>
              </ul>
            </div>
            <div className="col-9 mainCont">
              <div className="row">
                <img className="col-3" src={profile} width="15em" />
                <div className="col-9 ">
                  <div className="row br2">
                    <div className="col-4">Name: {user && user.fullName} </div>
                    <div className="col-4">
                      Accound id: {userDet && userDet.id}{" "}
                    </div>
                    <div className="col-4">Email: {user && user.email}</div>
                  </div>
                </div>
              </div>

              <div className="middle">
                {/* display modal 1 */}
                <AlertView/>
                {show1 && (
                  <div className="card col-8">
                    <div className="card-header">
                      <div className="row">
                        <div className="col-10">Add Money here</div>
                        <button className="col-2 btn-info" onClick={hideModal}>
                          <i className="far fa-window-close "></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                     
                      <form className="" onSubmit={AddMoneyAcct}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="id"
                            placeholder="Enter amount"
                            // name="Amount"
                            value={Amount}
                            onChange={onchangeInput1}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-info btn-block"
                        >
                          ADD
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                {/* display modal 2 */}
                {show2 && (
                  <div className="card">
                    <div className="card-header">
                      <div className="row">
                        <div className="col-10">Transfer Money</div>
                        <button className="col-2 btn-info" onClick={hideModal}>
                          <i className="far fa-window-close "></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <form className="" onSubmit={TransferMoney}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="id"
                            placeholder="Enter amount"
                            name="amount"
                            value={amount}
                            onChange={onchangeInput}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="id"
                            placeholder="Enter account number"
                            name="accountNumber"
                            value={accountNumber}
                            onChange={onchangeInput}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-info btn-block"
                        >
                          Transfer
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="col-6">
                    <h3>Overview</h3>
                  </div>

                  <div className="col-6">
                    <button
                      className="btn btn-primary mr-4"
                      onClick={showModal}
                    >
                      Add Money
                    </button>

                    {/* modal body displayed */}

                    {/* <button className="btn  btn-danger">Withdrawal</button> */}
                    <button className="btn btn-danger" onClick={showModal2}>
                      Transfer
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="cards bg-purple col-4 text-white">
                    <h5> Balance: #{userDet && userDet.accountBalance}</h5>
                  </div>
                  <div className="cards bg-orange col-4 text-white">
                    <h5> Rate of Interest : 2%</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10 my-3">Recent Transations</div>

                <button className="col-2 mt-3">View All</button>
              </div>
              <ViewTransactions />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  userDet: state.Account.user,
  isAccount: state.Account.isAccount,
  error: state.Account.error,
  user: state.Auth.user,
  isUpdated: state.Account.isUpdated,
  transactions: state.Account.transactions
});

export default connect(mapStateToProps, {
  load: loadUser,
  loadAcc: loadAccount,
  AddCash: AddMoney,
  Transfer: transferMoney,
  getTransactions: getTransation,
  Alert
})(Dashboard);
// export default Dashboard;
