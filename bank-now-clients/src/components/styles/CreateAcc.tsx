import styled from "styled-components";

export const CreateAccWrapper = styled.div`
         padding: 4rem 0rem;

         h5 {
           width: 40%;
           margin: 3rem auto 0rem auto;
           color: #ffbf00;
           span {
             color: black;
           }
         }
         .formview {
           height: 20em;
           width: 50%;
           background: var(--mainWhite);
           margin: 3rem auto;
           padding: 5rem;
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
