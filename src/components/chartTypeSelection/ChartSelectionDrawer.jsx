import React from "react";
import styled from "styled-components";

const ICON_PATH = "/src/assets/chartIcons/";

const DrawerContainer = styled.div`
  width: 30vw;
  height: 92vh;
  border-radius: 6px;
  font-family: "Lato", sans-serif;
  position: fixed;
  top: 10px;
  right: 10px;
  /* right: ${({ isopen }) => (isopen ? "0" : "-300px")}; */
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

const DrawerHeader = styled.div`
  display: flex;
  color: grey;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
`;
const HeaderText = styled.div`
  font-size: 0.9rem;
  padding: 0 0.6rem;
`;
const CloseIcon = styled.img`
  padding: 0 0.4rem;
  height: 0.8rem;
`;
const Divider = styled.hr`
  border: none;
  border-top: 1px solid #b0afaf53;
  margin: 4px 0;
`;
const ListContainer = styled.div`
  height: 84vh;
  width: 100%;
  margin: 0;
  overflow: auto;
`;
const List = styled.ul`
  padding: 0 8px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: ${({ itemPerRow }) => `calc(${100 / itemPerRow}% - 6% )`};
  height: ${({ itemPerRow }) => `calc(${30 / itemPerRow}vw - 2vw )`};
  padding: 0;
  margin: 1%;
  padding: 2% 1%;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-radius: 8px;
    background-color: #f3f3f3;
  }
`;

const Icon = styled.img`
  width: 50%;
`;

const Label = styled.div`
  padding: 2%;
`;

const ChartPickerDrawer = ({ isopen, data, itemPerRow = 3 }) => {
  return (
    <DrawerContainer isopen={isopen}>
      <DrawerHeader>
        <HeaderText>Choose your Chart Type</HeaderText>
        <CloseIcon src={ICON_PATH + "cross_icon.png"} alt="Icon" />
      </DrawerHeader>
      <Divider />
      <ListContainer>
        <List>
          {data.map((item, index) => (
            <ListItem key={index} itemPerRow={itemPerRow}>
              {item?.icon && <Icon src={ICON_PATH + item?.icon} alt={"Icon"} />}
              {item?.label && <Label>{item?.label}</Label>}
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </DrawerContainer>
  );
};

export default ChartPickerDrawer;
