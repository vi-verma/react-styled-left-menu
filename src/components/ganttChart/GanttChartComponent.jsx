


import React, { useState, useEffect } from "react";
import { ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./ViewSwitcher";
import { getStartEndDateForProject, initTasks } from "./helper";

const GanttChartComponent = ({ data, ganttHeight=400 }) => {
  const [view, setView] = useState(ViewMode.Day);
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);


  useEffect(() => {
    if(data.length>0){
    const makeData = data?.map((i) => ({
      id: i.id,
      start: new Date(i?.Start_Date),
      end: new Date(i?.End_Date),
      name: i?.Sub_Activity,
      
      type: "task",
      project: "ProjectSample",
    }));
    setTasks([...makeData]);
    };
  }, []);

  // specify coumn width on changing viewmode (day/month/yr basis)
  let columnWidth = 30;
  if (view === ViewMode.Year){
    columnWidth = 100;
  }else if (view === ViewMode.Month) {
    columnWidth = 80;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleTaskChange = (task) => {
    console.log("🚀 ~ handleTaskChange ~ task:", task)
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleSelect = (task, isSelected) => {
    console.log('select======',task.name + " has " + (isSelected ? "selected" : "unselected"));
    console.log('selected task',task)
  };

  const handleExpanderClick = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };
  

  return (
    <div>
      <ViewSwitcher
        onViewModeChange={(viewMode) => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
        view={view}
      />
      <h3>Gantt Chart</h3>
      {tasks?.length > 0 && (
      <Gantt
        tasks={tasks}
        viewMode={view}
        // onDateChange={handleTaskChange}
        // onDelete={handleTaskDelete}
        // onProgressChange={handleProgressChange}
        // onDoubleClick={handleDblClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
        barBackgroundColor="blue"
        rowHeight={40}
          
          fontSize={12}
          ganttHeight={300}
          // todayColor="green"
        />
      )}
    </div>
  );
};
export default GanttChartComponent;
