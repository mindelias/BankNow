import styled from "styled-components";

export const ButtonCont1 = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  min-width:7.8em; 
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--mainWhite);
  border-radius: 1.5rem;
  padding: 0.4rem 1.3rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonCont2 = styled.button`
text-transform: capitalize;
font-size: 1.3rem;
background: var(--lightBlue);
border: 0.05rem solid var(--mainWhite); 
color: var(--mainWhite);
min-width:7.5em;
border-radius: 1.5rem;
padding: 0.3rem 1.3rem;
transition: all 0.5s ease-in-out;
&:hover {
  background: transparent;
  color: var(--lightBlue);
}
&:focus {
  outline: none;
}
`;
 