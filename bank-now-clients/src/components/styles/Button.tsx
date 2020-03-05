import React from "react";
import styled from "styled-components";

interface props {
  color: string;
  bgColor: string;
  name: string;
}

const Button: React.FC<props> = ({ color, bgColor, name }) => {
  const ButtonCont = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    min-width: 7em;
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
  return <ButtonCont>{name}</ButtonCont>;
};

export default Button;
