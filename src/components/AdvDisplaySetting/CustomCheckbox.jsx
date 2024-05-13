import React from 'react';
import styled from 'styled-components';

// StyledCheckbox component
const StyledCheckbox = styled.input`
  /* Hide the default checkbox */
  display: none;

  /* Create a circular shape */
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  border: 2px solid #333;
  cursor: pointer;

  /* Checkmark styles */
  &:checked {
    background-color: #333;
  }
`;

// CustomCheckbox component
const CustomCheckbox = ({ checked=false, onChange=()=>{} }) => {
  return (
    <label>
      {/* Render the hidden checkbox input */}
      <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
      {checked ? 'Yes' : 'No'}
      {/* Custom design for the checkbox (e.g., a circular shape) */}
      {/* You can add other elements like a checkmark icon here */}
    </label>
  );
};

export default CustomCheckbox;