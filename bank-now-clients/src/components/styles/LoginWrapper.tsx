import styled from "styled-components";
import finance from "../assets/finance.svg";

const LoginWrapper = styled.div`
padding: 4em;
  .bg-right {
    background: linear-gradient(360deg, #2655ee 0%, #34b3ff 50%);
    text-align: center;
    /* margin: 4rem 0rem 3rem 6em; */
    /* border-radius: 15px; */
    height: 40em;
  }

  img {
    margin:  10em auto;
    
  }
  .formview {
    height: 40em;
    background: var(--mainWhite);

  }
  form{
      margin: 8em 3em; 
  }
  .btn-info{
      background: linear-gradient(106deg, #2655ee 0%, #34b3ff 100%);
  }
`;

export default LoginWrapper;
