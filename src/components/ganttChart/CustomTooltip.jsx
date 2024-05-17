import React, { memo } from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  border: 1px solid #e2e1e1;
  border-radius: 6px;
  background: white;
  font-size: 0.5rem;
  line-height: 0.4rem;
  padding: 2px 6px;
`;
const CustomTooltip = memo(({task}) => {
  return (
    <TooltipContainer>
      <p>{task?.name}</p>
      <p>{`Start Date: ${new Date(task?.start).toLocaleDateString()}`}</p>
      <p>{`End Date: ${new Date(task?.end).toLocaleDateString()}`}</p>
    </TooltipContainer>
  );
});

export default CustomTooltip;
