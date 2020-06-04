import styled from "styled-components";

export const CreateAccWrapper = styled.div`
  .formview {
    height: 20em;
    background: var(--mainWhite);
    margin: 10em 3rem;
  }
  @media only screen and (max-width: 768px) {
    .formview {
      height: 12em;
      margin: 7em 3em;
    }
  }
  @media only screen and (max-width: 468px) {
    .formview {
      height: 12em;
      margin: 5em 3em;
    }
  }
`;
