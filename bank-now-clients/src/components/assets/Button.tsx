import styled from "styled-components";

export const ButtonCont1 = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.7rem;
  padding: 0.3rem 1rem;
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
font-size: 1.4rem;
background: var(--lightBlue);
border: 0.05rem solid var(--mainWhite); 
color: var(--mainWhite);
border-radius: 0.7rem;
padding: 0.3rem 1rem;
transition: all 0.5s ease-in-out;
&:hover {
  background: transparent;
  color: var(--lightBlue);
}
&:focus {
  outline: none;
}
`;
 