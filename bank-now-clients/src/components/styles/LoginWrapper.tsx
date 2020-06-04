import styled from "styled-components";
import finance from "../assets/finance.svg";

const LoginWrapper = styled.div`
  /* max-height:36em; */
  padding: 4em 4em 2em 4em;
  width: 100%;
  .bg-right {
    background: linear-gradient(360deg, #2655ee 0%, #34b3ff 50%);
    text-align: center;
    height: 35em;
  }

  img {
    margin: 11em auto;
    max-height: 22em;
    min-width: 23em;
  }
  .formview {
    max-height: 35em;
    width: 100%;
    background: var(--mainWhite);
  }
  form {
    margin: 7em 3em;
    /* max-height: 20em; */
  }
  .btn-info {
    background: linear-gradient(106deg, #2655ee 0%, #34b3ff 100%);
  }
  .loader {
    position: absolute;
    left: 45%;
    top: 20%;
  }

  @media only screen and (max-width: 768px) {
    padding: 0em;
    margin: 9em 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-right {
      display: none;
    }
    .formview {
      background: linear-gradient(360deg, #2655ee 0%, #34b3ff 50%);
      border-radius: 10px;
      width: 300px !important;
      margin: 10em 3em;
      padding: 5em 3em;
      height: 38em;
    }
    form {
      /* margin: 4em 2em; */
      width: 80%;
    }
    .row {
      margin-right: 0px !important;
    }
  }
`;

export default LoginWrapper;
