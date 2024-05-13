import styled from "styled-components";
import TreeNode from "./TreeNode";
const TreeWrapper = styled.div`
  margin: 4px;
`;
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
    <TreeWrapper>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </TreeWrapper>
  );
};

export default Tree;
