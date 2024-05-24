// src/FloatingButton.js
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 80px;
  right: 60px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -5px 9px 20px -7px rgba(0,0,0,0.75);
  z-index: 3;

  &:hover {
    transform: scale(1.05);
  }
`;
const Icon = styled.img`
  margin: 0;
  width: 100%;
`;
const FloatingButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon
        src={"/src/assets/tableBtnIcons/plusiconblue.png"}
        alt="Search Icon"
      />
    </Button>
  );
};

export default FloatingButton;
