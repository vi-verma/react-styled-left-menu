import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
  width: ${(props) => props.width || "100%"};
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 0.7rem;
`;

const Input = styled.input`
  border: none;
  background: #f3f3f3;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  &::placeholder {
    font-size: ${(props) => props.placeholderFontSize || props.fontSize || '0.7rem'};
    color: #999;
  }
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
  font-size: 0.7rem;
  border-radius: 4px;
  &:option {
    font-size: 10px;  // Font size for options
    padding: 10px;
  }
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
