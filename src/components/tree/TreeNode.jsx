import React, { useState } from "react";
import styled from "styled-components";
import plusIcon from "/src/assets/icons/plus_icon.png";
import minusIcon from "/src/assets/icons/minus_icon.png";

const TreeNodeDiv = styled.div`
  margin: 4px;
`;
const NodeWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;
const Icon = styled.img`
  height: 14px;
  width: 14px;
`;
const NodeText = styled.span`
  margin-left: 4px;
`;


const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TreeNodeDiv>
      <NodeWrapper onClick={handleToggle}>
 
        {isExpanded ? (
          <Icon src={minusIcon} alt="Prefix Icon" />
        ) : (
          <Icon src={plusIcon} alt="Prefix Icon" />
        )}
        <NodeText>{node.name}</NodeText>
      </NodeWrapper>
      {isExpanded && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map((childNode) => (
            <TreeNode key={childNode.id} node={childNode} />
          ))}
        </div>
      )}
    </TreeNodeDiv>
  );
};

export default TreeNode;