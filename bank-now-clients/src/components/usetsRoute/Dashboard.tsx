import React , {useEffect} from "react";
import styled from "styled-components";
import profile from "../assets/avatar.png";
import circle from "../assets/circle.jpg";
import MainNav from "../MainNav";
import { connect } from 'react-redux'
import {loadUser} from '../redux/Auth/Auth.action'


interface props {
  reg: () => void;
  Auth: boolean;
}
const Dashboard : React.FC<props> = ({reg, Auth}) => {

  useEffect(() => {
    reg();
  }, []);

  return (
    <div>
      <MainNav />
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-3 sideBar text-white">
              <h2 className="text-center"> Hi Abiola </h2>
              <hr />
              <ul>
                <li>
                  <span>
                    <i className="fas fa-sort-numeric-down"></i>
                  </span>{" "}
                  Account Number
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
                <li>
                  <span>
                    <i className="fas fa-sign-out-alt"></i>
                  </span>{" "}
                  Logout
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
                    <div className="col-4">First Name: Aminat </div>
                    <div className="col-4">Last Name: Shotade </div>
                    <div className="col-4">Email: Shotadeyetunde@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="middle">
                <div className="row">
                  <div className="col-6">
                    <h3>Overview</h3>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-primary mr-5">Deposit</button>
                    <button className="btn  btn-danger">Withdrawal</button>
                  </div>
                </div>
                <div className="row">
                  <div className="cards bg-purple col-4 text-white">
                    <h4> Balance(#): 280000</h4>
                  </div>
                  <div className="cards bg-orange col-4 text-white">
                    <h4> Rate of Interest : 2%</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10 my-3">Recent Transations</div>
                <a className="col-2 mt-3">View All</a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
const mapStateToProps = (state: any ) => ({
  Auth: state.Auth.isAuthenticated 
});

export default connect(mapStateToProps, { reg: loadUser })(Dashboard);
// export default Dashboard;

const Wrapper = styled.div`
  background: linear-gradient(106deg, #c1b0e8 0%, #8c2bb5 150%);
  /* background:  #C1B0E8; */
  background-size: cover;
  /* height: 100vh; */
  padding: 4rem;
  .sideBar {
    background: linear-gradient(180deg, #6a0080 10%, #e600e6 90%);
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
    background: linear-gradient(106deg, #aa00ff 0%, #6c4fff 100%);
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
    margin: 1.5em 3em;
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
        106deg,
        rgb(229, 43, 80, 0.7),
        rgb(250, 0, 54, 0.7),
        rgb(227, 38, 104, 0.7)
      ),
      url(${circle});
  }
`;
