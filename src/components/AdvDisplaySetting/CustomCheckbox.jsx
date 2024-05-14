import React, { useState } from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Checkmark = styled.span`
  position: relative;
  display: inline-block;
  background-color: #eee;
  border: 1px solid #b9b9b9;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin: 0.1rem;
`;
const CheckmarkInner = styled.div`
  position: absolute;
  display: inline-block;
  background-color: ${(props) => (props.checked ? "#2196f3" : "#eee")};
  height: 0.5rem;
  width: 0.5rem;
  margin: 0.1rem 0.1rem;

  border-radius: 50%;
  border: ${(props) =>
    props.checked ? "1px solid #2196f3" : "1px solid #b9b9b9"};
`;

const CheckboxLabel = styled.span`
  margin-left: 0.1rem;
`;

const CustomCheckbox = ({
  label = "",
  name = "",
  value = "",
  checked = false,
  onChange = () => {},
}) => {
  const [check, setCheck] = useState(checked || false);

  const handleCheckboxChange = (event) => {
    console.log("🚀 ~ handleCheckboxChange ~ event:value", event.target.value);
    console.log("🚀 ~ handleCheckboxChange ~ event:name", event.target.name);
    if (onChange) {
      // onChange(!checked);
      // onChange(!checked);
      () => onChange(event);
      setCheck((prev) => !prev);
    } else {
      setCheck((prev) => !prev);
    }
  };

  return (
    <CheckboxWrapper>
      <CheckboxInput
        name={name}
        value={value}
        type="checkbox"
        checked={checked || check}
        onChange={handleCheckboxChange}
      />
      <Checkmark checked={checked || check}>
        <CheckmarkInner checked={checked || check} />
      </Checkmark>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
