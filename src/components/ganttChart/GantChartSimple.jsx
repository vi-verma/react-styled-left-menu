import React, { useEffect, useMemo, useState } from "react";
import { ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./ViewSwitcher";
import styled from "styled-components";
import CustomTooltip from "./CustomTooltip";

const GanttWrapper = styled.div`
  width: ${({ width }) => width};
  border: 1px solid #e2e1e1;
  display: inline-block;
  padding: 8px;
  ._3eULf {
    /* border: 1px solid #edecec; */
    padding: 4px;
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

  ${({ hide_label }) =>
    hide_label &&
    `
      ._CZjuD >svg {
        display: none;
        height: 0px;
  }
  `}
`;

const GantChartSimple = ({
  data,
  title,
  hide_title,
  startDateKey, 
  endDateKey, 
  taskNameKey, 
  projectName = "Sample Project",
  height = 300,
  width = '100%',
  barBackgroundColor = "blue",
  hide_y_axis = false,
  hide_x_axis = false,
  hide_label = false,
}) => {
  const [view, setView] = useState(ViewMode.Week);
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
console.log('renderrr')
  useEffect(() => {
    if (data.length > 0 && !tasks.length) {
console.log('renderrr')

      const makeData = data?.map((i) => ({
        id: i.id,
        start: new Date(i?.[startDateKey]),
        end: new Date(i?.[endDateKey]),
        name: i?.[taskNameKey],

        type: "task",
        project: projectName,
      }));
      setTasks([...makeData]);
    }
  }, []);
  
  // specify coumn width on changing viewmode (day/month/yr basis)
  // const columnWidthFn = useMemo(() => {
  //   console.log("memo oooo ", +x)
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
  //   return columnWidth;
  // }, [view]);

  const handleSelect = (task, isSelected) => {
    console.log("selected task", task);
  };

  return (
    <GanttWrapper
      hide_y_axis={hide_y_axis}
      hide_x_axis={hide_x_axis}
      hide_label={hide_label}
      width={width}
    >
      {/* <div style={{  }}> */}
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
          TooltipContent={({ task }) => <CustomTooltip task={task} />}
        />
      )}
      {/* </div> */}
    </GanttWrapper>
  );
};
export default GantChartSimple;
