import React, { useState } from "react";
import styled from "styled-components";

const ExpandCollapseIcon = styled.span`
  height:12px;
  width: 12px;
  /* border-radius: 10px;
  border: 1px solid grey;
  border-radius: 50%; */
`;
const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log("🚀 ~ TreeNode ~ isExpanded:", isExpanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={handleToggle}>
        {/* need to hange with icons */}
        <ExpandCollapseIcon>{isExpanded ? "-" : "+"}</ExpandCollapseIcon>
        {node.name}
      </div>
      {isExpanded && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map((childNode) => (
            <TreeNode key={childNode.id} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

const Tree = () => {
  // Example usage
  const data = [
    {
      id: 1,
      name: "Node 1",
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
