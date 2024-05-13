import React, { useState } from "react";
import styled from "styled-components";
import plusIcon from "/src/assets/icons/plus_icon.png";
import minusIcon from "/src/assets/icons/minus_icon.png";

const TreeNodeDiv = styled.div`
  margin: 4px;
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
      <div onClick={handleToggle}>
 
        {isExpanded ? (
          <Icon src={minusIcon} alt="Prefix Icon" />
        ) : (
          <Icon src={plusIcon} alt="Prefix Icon" />
        )}
        <NodeText>{node.name}</NodeText>
      </div>
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

const Tree = () => {
  const data = [
    {
      id: 1,
      name: "Color",
      children: [
        {
          id: 2,
          name: "Node 1.1",
          children: [
            { id: 4, name: "Node 1.1.1" },
            { id: 5, name: "Node 1.1.2" },
          ],
        },
        { id: 3, name: "Node 1.2" },
      ],
    },
    {
      id: 11,
      name: "Chart_title",
      children: [
        {
          id: 21,
          name: "Node 1.11",
          children: [
            { id: 41, name: "Node 1.1.11" },
            { id: 51, name: "Node 1.1.21" },
          ],
        },
        { id: 31, name: "Node 1.21" },
      ],
    },
  ];
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Tree;
