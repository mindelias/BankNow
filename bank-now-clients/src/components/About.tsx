import React from "react";
import Wrapper from "./styles/About";

export default function About() {
  return (
    <Wrapper>
      <h1>About Us</h1>
      <div>
        Bank Now is a light-weight core banking application that powers banking
        operations like account creation, customer deposit and withdrawals. This
        app is meant to support a single bank, where users can signup and create
        bank accounts online, but must visit the branch to withdraw or deposit
        money.
      </div>
    </Wrapper>
  );
}
