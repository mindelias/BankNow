import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface userType {
  id: string;
  userId: string;
  accountBalance: string;
  accountType: string;
  accountNumber: string;
  updatedAt: string;
  createdAt: string;
  accountStatus: string;
}
function showAccoutSuccessful() {
  return (
    <div>
      <WhiteBox className="container text-center">
        {/* <h1>Account Created Succesfully</h1>
        <p>Your new account Number is {acctnum} </p>
        <span><i className="far fa-check-circle"></i>
</span> */}
        <Link to="/dashboard">View Dashboard</Link>
      </WhiteBox>
    </div>
  );
}

export default showAccoutSuccessful;

const WhiteBox = styled.div`
  h1 {
    font-size: 30px;
  }
  span {
      color:green
  }
`;
