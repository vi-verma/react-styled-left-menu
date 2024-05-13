// import React from 'react';
// import styled, { css, keyframes } from "styled-components";

// const RadioContainer = styled.div`
//   border-radius: 0 8px 16px 0;
//   box-shadow: 10px 10px 12px -10px rgba(0, 0, 0, 0.75);
//   width: 240px;
//   height: 100vh;
//   font-family: "Lato", sans-serif;
//   font-size: 12px;
//   background: #f3f3f3;
// `;
// const Radio = () => {
//   return (<RadioContainer>
//     <input type="radio" id="html" name="fav_language" value="HTML" />
//     <label for="html">HTML</label>
//     </RadioContainer>
//   )
// }

// export default Radio;


import React from 'react';
import styled from 'styled-components';

// StyledRadio component represents the outer circle of the radio button
const StyledRadio = styled.span`
  display: inline-block;
  width: 1.25em;
  height: 1.25em;
  position: relative;
  border-radius: 50%;
  border: 2px solid #333;
  margin-right: 0.5em;

  &::after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 0.6em;
    height: 0.6em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #333;
  }
`;

// Hidden input element to maintain radio button state
const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

// Label component to wrap the text of the radio button
const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

// Radio button component
const RadioButton = ({ checked, onChange, label, ...props }) => {
  return (
    <RadioLabel>
      <HiddenRadio checked={checked} onChange={onChange} {...props} />
      <StyledRadio checked={checked} />
      {label}
    </RadioLabel>
  );
};

export default RadioButton;