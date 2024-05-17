import React, { useEffect, useState } from "react";
import { ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./ViewSwitcher";
import styled, { createGlobalStyle } from "styled-components";
import CustomTooltip from "./CustomTooltip";

const GanttWrapper = styled.div`
  width: ${({ width }) => width};
  display: inline-block;
  padding: 8px;
  ._3eULf {
    padding: 8px;
  }
  /* remove horizontal grid color block line */
  ._2dZTy {
    display: none;
  }
  ._3rUKi {
    display: ${({ hide_y_axis }) => (hide_y_axis ? "none" : "block")};
  }
  ._RuwuK {
    display: ${({ hide_x_axis }) => (hide_x_axis ? "none" : "block")};
  }
`;



const GantChartSimple = ({
  data,
  title,
  hide_title,
  height = 300,
  width = 100,
  barBackgroundColor='blue',
  projectName = "",
  hide_y_axis=false,
  hide_x_axis=false,
}) => {
  const [view, setView] = useState(ViewMode.Week);
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      const makeData = data?.map((i) => ({
        id: i.id,
        start: new Date(i?.Start_Date),
        end: new Date(i?.End_Date),
        name: i?.Sub_Activity,

        type: "task",
        project: "ProjectSample",
      }));
      setTasks([...makeData]);
    }
  }, []);

  // specify coumn width on changing viewmode (day/month/yr basis)
  let columnWidth = 30;
  if (view === ViewMode.Year) {
    columnWidth = 100;
  } else if (view === ViewMode.Month) {
    columnWidth = 80;
  } else if (view === ViewMode.Week) {
    columnWidth = 60;
  } else {
    columnWidth = 40;
  }

  const handleSelect = (task, isSelected) => {
    console.log("selected task", task);
  };

  return (
    <GanttWrapper
      hide_y_axis={"true" || hide_y_axis}
      hide_x_axis={"true" || hide_x_axis}
      width={width}
    >
      <div style={{ border: "1px solid red" }}>
        <ViewSwitcher
          onViewModeChange={(viewMode) => setView(viewMode)}
          onViewListChange={setIsChecked}
          isChecked={isChecked}
          view={view}
        />

        {hide_title && title && <h3>{title}</h3>}
        {tasks?.length > 0 && (
          <Gantt
            tasks={tasks}
            viewMode={view}
            listCellWidth={isChecked ? "155px" : ""}
            columnWidth={columnWidth}
            onSelect={handleSelect}
            barBackgroundColor={barBackgroundColor}
            rowHeight={40}
            fontSize={12}
            ganttHeight={height}
            // ganttWidth={300}
            showLine={false}
            TooltipContent={({task})=> <CustomTooltip task={task}/>}
          />
        )}
      </div>
    </GanttWrapper>
  );
};
export default GantChartSimple;
