import React, { useEffect, useRef } from "react";
import styled from "styled-components";


const ICON_PATH = "/src/assets/chartIcons/";

const DrawerContainer = styled.div`
  width: 34vw;
  height: 96vh;
  padding:8px;
  border-radius: 6px;
  font-family: "Lato", sans-serif;
  position: fixed;
  top: 10px;
  right:10px;
  overflow: auto;
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
  align-items:center;
  padding: 1rem 0.7rem 0.4rem 1rem;
`;
const HeaderText = styled.div`
  font-size: .9rem;
  padding: 0 0.6rem;
`;
const CloseIcon = styled.img`
  padding: 0 0.4rem;
  height: .8rem;
`;
const Divider = styled.hr`
  border: none;
  border-top: 1px solid #b0afaf53;
  margin: 4px 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: ${({ itemPerRow }) => `calc(${100 / itemPerRow}% - 8% )`};
  /* height: ${({ cHeight }) => cHeight+'px'}; */
  height: auto;
  /* height: calc((34/3)vw - 6vw ); */
  padding: 2% ;
  margin: 2%;
  font-size: .7rem;
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
  height: 50%;
  padding: 2%;
`;

const Label = styled.span`
  padding: 1%;
`;

const ChartPickerDrawer = ({ isopen, data, itemPerRow = 4 }) => {
  const dynamicDivRef = useRef(null);
  useEffect(() => {
    const dynamicDiv = dynamicDivRef.current;
    const width = dynamicDiv.offsetWidth;
    dynamicDiv.style.height = `${width}px`;
  }, []);
  return (
    <DrawerContainer isopen={isopen}>
      <DrawerHeader>
        <HeaderText>Choose your Chart Type</HeaderText>
        <CloseIcon src={ICON_PATH + 'cross_icon.png'} alt="Icon" />
      </DrawerHeader>
      <Divider />
      <List>
        {data.map((item, index) => (
          <ListItem key={index} itemPerRow={itemPerRow} cHeight={dynamicDivRef?.current?.offsetWidth} ref={dynamicDivRef}>
            {item?.icon && <Icon src={ICON_PATH + item?.icon} alt={'Icon'} />}
            {item?.label && <Label>{item?.label}</Label>}
          </ListItem>
        ))}
      </List>
    </DrawerContainer>
  );
};

export default ChartPickerDrawer;
