import React from "react";
import styled from "styled-components";
import Tree from "../tree/Tree";

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
 box-shadow: -8px 9px 34px -5px rgba(0,0,0,0.75);
  width: 240px;
  min-height: 100vh;
  overflow: auto;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  color: #0a0a0a;
`;
const ContentHeader = styled.div`
  padding: 7px 10px;
  /* cursor: pointer; */
  background: ${({ ismainheader }) => (ismainheader ? "#337dff" : "#f3f3f3")};
  color: ${({ ismainheader }) => (ismainheader ? "#ffffff" : "#000000")};
  text-transform: capitalize;
  /* font-weight: 500; */
  &:first-child {
    margin-top: 10px;
  }
  &:not(:first-child){
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
const Input = styled.input`
width: 100%;
/* height: 20%; */
`;
const InputWrapper = styled.div`
/* width: 10%; */
`;
const Label = styled.label`
  width: 90%;
  margin-left: 4px;
`;

const DisplaySetting = () => {
  const handleRadio = (event) => {
    console.log("event.target.value", event.target.value);
    console.log("event.target.value", event.target.name);
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
              <InputWrapper >
              <Input
                onChange={handleRadio}
                // type="checkbox"
                type="radio"
                id={item?.value}
                name={item?.label}
                value={item?.value}
              />
              </InputWrapper>
              <Label htmlfor={item?.value}>{item?.label  }</Label>
            </RadioBtnWrapper>
          );
        })}
      </ContentWrapper>

      <ContentHeader>Chart Axis Settings</ContentHeader>
      {DATA_RADIO?.map((item) => {
        return (
          <RadioBtnWrapper>
            <input
              onChange={handleRadio}
              type="radio"
              id={item?.value}
              name={"chartSetting"}
              value={item?.label}
            />
            <label htmlfor={item?.value}>{item?.label}</label>
          </RadioBtnWrapper>
        );
      })}

      <ContentHeader>Other Settings</ContentHeader>
      <Tree />
      
    </WigetContainer>
  );
};

export default DisplaySetting;