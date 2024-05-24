import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
/* display: inline- */
  margin-bottom: 20px;
  width: ${(props) => props.width || "100%"};
`;

const Label = styled.label`
  /* display: block; */
  margin-bottom: 8px;
  font-size: 0.7rem;
  /* color: #333; */
`;

const Input = styled.input`
  border: none;
  background: #f3f3f3;
  width: 100%;
  padding: 8px;
  /* font-size: 14px; */
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  &:focus {
    border-color: #4285f4;
    outline: none;
  }
`;

const Select = styled.select`
  border: none;
  background: #f3f3f3;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  &:focus {
    border-color: #4285f4;
    outline: none;
  }
`;

const Search = styled.input.attrs({ type: "search" })`
  border: none;
  background: #f3f3f3;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  &:focus {
    border-color: #4285f4;
    outline: none;
  }
`;

const CustomInput = ({ type, label, width, ...props }) => {
  return (
    <Wrapper width={width}>
      {label && <Label>{label}</Label>}
      {type === "text" && <Input type="text" {...props} />}
      {type === "select" && (
        <Select {...props}>
          {props.options &&
            props.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
        </Select>
      )}
      {type === "search" && <Search {...props} />}
    </Wrapper>
  );
};

export default CustomInput;
