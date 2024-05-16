import React from "react";
import { ViewMode, Gantt } from "gantt-task-react";
import { initTasks } from "./helper";
import styled from "styled-components";

const ChartContainer = styled.div`
`;
//Init
const GantChartSimple = () => {
  
  return (
    <div>
      <h3>Gantt Chart</h3>
      <Gantt
        tasks={initTasks()}
        viewMode={ViewMode.Day}
        listCellWidth={""}
        columnWidth={40}
        barBackgroundColor="#24a1b2"
        rowHeight={40}
        fontSize={12}
        style={{ display: 'flex', flexDirection: 'row' }}
      />
    </div>
  );
};
export default GantChartSimple;
