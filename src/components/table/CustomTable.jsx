import React, { useState } from "react";
import styled from "styled-components";
import DataAction from "./DataAction";
// import SearchBar from "./SearchBar";
import FloatingButton from "./FloationgButton";
import SearchPanel from "./SearchPanel";

const TableWrapper = styled.div`
  padding: 1rem 2rem;
`;
// const SearchPanel = styled.div`
//   /* height: 3rem; */
//   margin: 4px;
//   display: flex;
//   justify-content: space-between;
// `;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableBody = styled.tbody`
  overflow: auto;
  font-size: 0.8rem;
`;

const TableRow = styled.tr`
  /* height: 2rem; */
  &:nth-child(odd) {
    background-color: #f6f8fe;
  }

  &:hover {
    /* background-color: #ddd; */
    box-shadow: -1px 4px 14px -3px rgba(0, 0, 0, 0.75);
    transform: scale(1.001);
  }
`;

const TableCell = styled.td`
  /* border: 1px solid #ddd; */
  padding: 8px;
  text-align: center;
`;

const TableHeaderCell = styled.th`
  /* border: 1px solid #ddd; */
  padding: 8px;
  background-color: #337dff;
  color: white;
`;
const ContentWrapper = styled.div`
  /* width: 100%; */
  border-radius: 50px;
  padding: 4px;
  border: 1px solid #f3f3f3;
  background: #dee5fa;
`;
const SortIcon = styled.img`
  height: 1rem;
  width:  1rem;
  padding: 0.2rem;
  margin-left: 4px;
  vertical-align: middle;
`;
const SortedIcon = styled.img`
  height: 0.6rem;
  width: 0.6rem;
  padding: 0.4rem;
  margin-left: 4px;
  vertical-align: middle;
`;

const TABLE_DATA = [
  {
    groupName: "Other",
    dashboardName: "Test Dashboard",
    auther: "NewFangled Admin",
    numberOfwidget: "3",
    createdAt: "09/08/2024-16:18:28",
    modifiedAt: "09/08/2024-16:18:28",
    action: "",
  },
  {
    groupName: "Other",
    dashboardName: "Test Dashboard",
    auther: "NewFangled Admin",
    numberOfwidget: "3",
    createdAt: "09/08/2024-16:18:28",
    modifiedAt: "09/08/2024-16:18:28",
    action: "",
  },
  {
    groupName: "Other",
    dashboardName: "Test Dashboard",
    auther: "NewFangled Admin",
    numberOfwidget: "3",
    createdAt: "09/08/2024-16:18:28",
    modifiedAt: "09/08/2024-16:18:28",
    action: "",
  },
  {
    groupName: "Other",
    dashboardName: "Test Dashboard",
    auther: "NewFangled Admin",
    numberOfwidget: "3",
    createdAt: "09/08/2024-16:18:28",
    modifiedAt: "09/08/2024-16:18:28",
    action: "",
  },
  {
    groupName: "Other",
    dashboardName: "",
    auther: "",
    numberOfwidget: "",
    createdAt: "",
    modifiedAt: "",
    action: "",
  },
  {
    groupName: "Other",
    dashboardName: "",
    auther: "",
    numberOfwidget: "",
    createdAt: "",
    modifiedAt: "",
    action: "",
  },
];

const CustomTable = () => {
  const [table, setTable] = useState("");

  const handleTableChange = ({
    sort = "",
    sortColumn = "",
    // pagination: { first = 10, currentPage = 1 },
  }) => {
    console.log("sort", sort, "sortColumn", sortColumn);
    setTable({ sort, sortColumn });
  };
  const handleButtonClick = ({ btnActionType, data }) => {
    console.log(
      "🚀 ~ handleButtonClick ~ params:",
      btnActionType,
      "data",
      data
    );
  };

  const columns = [
    {
      title: "GROUP NAME",
      dataIndex: "groupName",
      key: "groupName",
    },
    {
      title: "DASHBOARD NAME",
      dataIndex: "dashboardName",
      key: "dashboardName",
    },
    {
      title: "AUTHER",
      dataIndex: "auther",
      key: "auther",
      render: (text, data) => text && <ContentWrapper>{text}</ContentWrapper>,
    },
    {
      title: "NUMBER OF WIDGET",
      dataIndex: "numberOfwidget",
      key: "numberOfwidget",
    },
    {
      title: "CREATED AT",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "MODIFIED AT",
      dataIndex: "modifiedAt",
      key: "modifiedAt",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      // manual width can be passes as props
      width: "100px",
      render: (__, data) => (
        <ContentWrapper>
          {<DataAction data={data} handleButtonClick={handleButtonClick} />}
        </ContentWrapper>
      ),
    },
  ];
  return (
    <TableWrapper>
      <SearchPanel />
      <FloatingButton />
      <Table>
        <thead>
          <TableRow>
            {columns.length &&
              columns.map((el) => (
                <TableHeaderCell style={{ width: el?.width }} key={el?.key}>
                  {el?.title}
                  {table?.sort === "asc" &&
                  table?.sortColumn === el?.dataIndex ? (
                    <SortedIcon
                      onClick={() =>
                        handleTableChange({
                          sort: "desc",
                          sortColumn: el?.dataIndex,
                        })
                      }
                      src={"/src/assets/tableBtnIcons/short_ascending.png"}
                      alt="Search Icon"
                    />
                  ) : table?.sort === "desc" &&
                    table?.sortColumn === el?.dataIndex ? (
                    <SortedIcon
                      onClick={() =>
                        handleTableChange({
                          sort: "",
                          sortColumn: el?.dataIndex,
                        })
                      }
                      src={"/src/assets/tableBtnIcons/short_descending.png"}
                      alt="Search Icon"
                    />
                  ) : (
                    <SortIcon
                      onClick={() =>
                        handleTableChange({
                          sort: "asc",
                          sortColumn: el?.dataIndex,
                        })
                      }
                      src={"/src/assets/tableBtnIcons/default_sorting.png"}
                      alt="Search Icon"
                    />
                  )}
                </TableHeaderCell>
              ))}
          </TableRow>
        </thead>
        <TableBody>
          {TABLE_DATA.map((item) => (
            <TableRow>
              {columns.map((i) => (
                <TableCell style={{ width: i?.width }}>
                  {i?.render
                    ? i?.render(item?.[i.dataIndex], item)
                    : item[i?.dataIndex]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default CustomTable;
