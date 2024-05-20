import React from "react";
import styled from "styled-components";

const PopupOverlay = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  max-width: 340px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  position: relative;
  text-align: center;
`;
const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

const Icon = styled.img`
  width: 40px;
`;

const Title = styled.h2`
  line-height: 14px;
`;

const ButtonContainer = styled.div`
  padding: 0 20%;
  display: flex;
  justify-content: space-evenly;
`;
const Button = styled.button`
  color: ${({ isPrimary }) => isPrimary && "white"};
  background: ${({ isPrimary }) => (isPrimary ? "#337dff" : "f3f3f3")};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  padding: 6px;
  min-width: 40%;
  font-size: 1rem;
`;
const PopupConfirmation = ({
  show,
  onConfirm,
  handleClose,
  title="Are you sure!",
  description="Changing the mode we will clear all the data",
  confirmBtnName = "YES",
  cancelBtnName = "NO",
  showCloseIcon = false,
}) => {
  return (
    <PopupOverlay show={show}>
      <PopupContent>
        {showCloseIcon && (
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        )}
        <Icon src={"/src/assets/icons/setting_icon.png"} alt="Suffix Icon" />
        <Title>{title}</Title>
        <p>{description}</p>
        <ButtonContainer>
          <Button isPrimary={true} onClick={onConfirm}>
            {confirmBtnName}
          </Button>
          <Button onClick={handleClose}>{cancelBtnName}</Button>
        </ButtonContainer>
      </PopupContent>
    </PopupOverlay>
  );
};

export default PopupConfirmation;
