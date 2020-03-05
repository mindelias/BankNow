import styled from "styled-components";
import finance from "../assets/finance.svg";

const LoginWrapper = styled.div`
  /* max-height:36em; */
  padding: 4em 4em 2em 4em;
  .bg-right {
    background: linear-gradient(360deg, #2655ee 0%, #34b3ff 50%);
    text-align: center;
    /* margin: 4rem 0rem 3rem 6em; */
    /* border-radius: 15px; */
    height: 35em;
  }

  img {
    margin: 11em auto;
    max-height: 22em;
    min-width: 23em;
  }
  .formview {
    max-height: 35em;
    background: var(--mainWhite);
  }
  form {
    margin: 7em 3em;
    /* max-height: 20em; */
  }
  .btn-info {
    background: linear-gradient(106deg, #2655ee 0%, #34b3ff 100%);
  }

  @media only screen and (max-width: 768px) {
    padding: 0em;
    margin:0em;
    display: flex;
      justify-content: center;
    .bg-right {
      display: none;
    }
    .formview {
      background: linear-gradient(360deg, #2655ee 0%, #34b3ff 50%);
      border-radius: 10px;
      
      margin: 3em 3em;
      max-height: 33em;
    }
    form{
      margin:4em 2em
    }
    .row{
      margin-right:0px!important;
    }
  }
`;

export default LoginWrapper;
