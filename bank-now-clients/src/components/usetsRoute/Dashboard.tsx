import React, { useEffect } from "react";
import styled from "styled-components";
import profile from "../assets/avatar.png";
import circle from "../assets/circle.jpg";
import MainNav from "../MainNav";
import { connect } from "react-redux";
import { loadUser } from "../redux/Auth/Auth.action";
import { loadAccount } from "../redux/Account/Account.action";

interface props {
  // reg: (args: any) => void;
  userDet: any;
  user: any;
  isAccount: boolean;
  load: () => void;
  loadAcc: () => void;
}

// const CreateAccount: React.FC<props> = ({ reg, load, userDet, isAccount }) => {
const Dashboard: React.FC<props> = ({ load, userDet, user, loadAcc }) => {
  useEffect(() => {
    load();
    loadAcc();
  }, []);

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
                <li>
                  <span>
                    <i className="fas fa-history"></i>
                  </span>{" "}
                  Transaction History
                </li>
                <li>
                  <span>
                    <i className="fas fa-tasks"></i>
                  </span>{" "}
                  Manage Accounts
                </li>
                <li>
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
                    <div className="col-4">Accound id: {userDet && userDet.id} </div>
                    <div className="col-4">Email: {user && user.email}</div>
                  </div>
                </div>
              </div>
              <div className="middle">
                <div className="row">
                  <div className="col-6">
                    <h3>Overview</h3>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-primary mr-4">Add Money</button>
                    {/* <button className="btn  btn-danger">Withdrawal</button> */}
                    <button className="btn  btn-danger">Transfer</button>
                  </div>
                </div>
                <div className="row">
                  <div className="cards bg-purple col-4 text-white">
                    <h5> Balance:  #{userDet && userDet.accountBalance}</h5>
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
  user: state.Auth.user
});

export default connect(mapStateToProps, {
  load: loadUser,
  loadAcc: loadAccount
})(Dashboard);
// export default Dashboard;

const Wrapper = styled.div`
  background: linear-gradient(106deg, #ebfcff 0%, #f0f8ff 150%);
  /* background:  #C1B0E8; */
  background-size: cover;
  /* height: 100vh; */
  padding: 4rem;
  .sideBar {
    background: linear-gradient(180deg, #0048ba 0%, #e600e6 80%);
    /* height: 90vh; */
    padding: 2rem 1rem;
  }
  .sideBar h1 {
    margin: 3rem 4rem;
  }
  .sideBar span {
    margin-right: 5px;
  }
  .mainCont {
    background: white;
    /* height: 90vh; */
    padding: 4em 2em;
    box-shadow: 2px 2px 2px gray;
  }
  hr {
    height: 1.2px;
    color: white;
    background-color: white;
    border: none;
  }
  ul {
    margin-bottom: 1.3em;
  }

  li {
    list-style-type: none;
    font-size: 1.2rem;
    font-family: "Roboto";
    margin: 0.7em 0em;
  }
  .badge {
    padding: 0.7em;
    border-radius: 50%;
  }
  img {
    border-radius: 100%;
  }
  .br2 {
    margin: 2em 0.1em;
    font-size: 1em;
  }
  .middle {
    background: #ebf2ff;
    margin: 1em;
    padding: 1em 1em 3em 1em;
  }
  .middle h3 {
    font-family: "Arvo";
  }

  .btn-primary {
    background: linear-gradient(106deg, #0048ba 0%, #6c4fff 100%);
    border: 1px solid #475677;
    border-radius: 25px;
    padding: 8px 38px;
  }
  .btn-danger {
    background: linear-gradient(106deg, #ff3355 0%, #e80027 100%);
    border: 1px solid #475677;
    border-radius: 25px;
    padding: 8px 38px;
  }
  .cards {
    height: 10em;
    padding: 4em 2em;
    border-radius: 8px;
    margin: 2.3em 3em;
  }
  .bg-purple {
    background: linear-gradient(
        106deg,
        rgb(255, 0, 100, 0.7),
        rgb(0, 10, 200, 0.7),
        rgb(102, 153, 255, 0.7)
      ),
      url(${circle});
  }

  .bg-orange {
    background: linear-gradient(
        110deg,
        rgb(227, 50, 221, 1),
        rgb(227, 64, 64, 0.8),
        rgb(175, 0, 42, 1)
      ),
      url(${circle});
  }
`;
