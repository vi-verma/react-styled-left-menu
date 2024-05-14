import React, { useState } from "react";
import styled from "styled-components";
import Tree from "../tree/Tree";
import CustomCheckbox from "./CustomCheckbox";

const DATA_RADIO = [
  {
    label: "Hide Tooltip",
    value: "ht",
  },
  {
    label: "Hide Legend",
    value: "hl",
  },
  {
    label: "Hide Border",
    value: "hb",
  },
  {
    label: "Hide Label",
    value: "hll",
  },
];

const WigetContainer = styled.div`
  box-shadow: -8px 9px 34px -5px rgba(0, 0, 0, 0.75);
  width: 240px;
  min-height: 100vh;
  overflow: auto;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #0a0a0a;
`;
const ContentHeader = styled.div`
  padding: 7px 10px;
  background: ${({ ismainheader }) => (ismainheader ? "#337dff" : "#f3f3f3")};
  color: ${({ ismainheader }) => (ismainheader ? "#ffffff" : "#000000")};
  text-transform: capitalize;
  &:first-child {
    margin-top: 10px;
  }
  &:not(:first-child) {
    margin-bottom: 10px;
  }
`;

const ContentWrapper = styled.div`
  font-size: 0.8rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const RadioBtnWrapper = styled.div`
  padding: 4px;
  width: 46%;
  display: flex;
  justify-content: baseline;
`;

const DisplaySetting = () => {

const handleChangecheckbox = (event) => {
  console.log("handleChangecheckbox event.target.value", event.target.value);
  console.log("handleChangecheckbox event.target.value", event.target.name);
};
  return (
    <WigetContainer>
      <ContentHeader ismainheader={"true"}>
        Advance Display Settings
      </ContentHeader>
      <ContentHeader>Chart Settings</ContentHeader>

      <ContentWrapper>
        {DATA_RADIO?.map((item) => {
          return (
            <RadioBtnWrapper>
              <CustomCheckbox
              onChange={handleChangecheckbox}
              label={item.label}
              name={item?.label}
              value={item?.value}
            />
            </RadioBtnWrapper>
          );
        })}
      </ContentWrapper>

      <ContentHeader>Chart Axis Settings</ContentHeader>
      <ContentWrapper>
        {DATA_RADIO?.map((item) => {
          return (
            <CustomCheckbox
              onChange={handleChangecheckbox}
              label={item.label}
              name={item?.label}
              value={item?.value}
            />
          );
        })}
      </ContentWrapper>
      <ContentHeader>Other Settings</ContentHeader>
      <Tree />
    </WigetContainer>
  );
};

export default DisplaySetting;
