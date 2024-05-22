// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useEffect, useState } from "react";
import 'gantt-task-react/dist/index.css';
import TestMenu from "./components/TestMenu";
// import ChartPickerDrawer from "./components/chartTypeSelection/ChartSelectionDrawer";
// import DisplaySetting from "./components/AdvDisplaySetting/DisplaySetting";
import GanttChartComponent from "./components/ganttChart/GanttChartComponent";
// import GanttChartAntPlot from "./components/GanttChartAntPlot/GanttChartAntPlot";

import GantChartSimple from "./components/ganttChart/GantChartSimple";
import { TASK_DATA } from "./components/ganttChart/helper";
import PopupConfirmation from "./components/popup/PopupConfirmation";
import VoiceSearch from "./components/voiceSearch/VoiceSearch";

const menuItems = [
  {
    id: "1",
    label: "Data source connector",
    icon: "/src/assets/icons/datasource.png",
  },
  {
    id: "2",
    label: "Configure and train",
    icon: "/src/assets/icons/configure.png",
    children: [
      {
        id: "3",
        label: "Train Your Polus",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "3",
        label: "Configure Drill and Down ",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "4",
        label: "Create Business Rules",
        icon: "/src/assets/icons/datasource.png",
        children: [
          {
            id: "5",
            label: "Item 1.2.1",
            icon: "/src/assets/icons/datasource.png",
          },
        ],
      },
      {
        id: "41",
        label: "Secure Access Layer",
        icon: "/src/assets/icons/datasource.png",
        children: [
          {
            id: "5",
            label: "Item 1.2.1",
            icon: "/src/assets/icons/datasource.png",
          },
        ],
      },
      {
        id: "41",
        label: "Verify Relationship",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "41",
        label: "Data Cache",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "41",
        label: "System Jobs",
        icon: "/src/assets/icons/datasource.png",
      },
    ],
  },
  {
    id: "7",
    label: "Conversatix BI",
    icon: "/src/assets/icons/conver BI-01.png",
    children: [
      {
        id: "8",
        label: "Onboards",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "9",
        label: "Reports",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "91",
        label: "Your Pinned Insights",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "91",
        label: "Geo Analytics",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "911",
        label: "Map",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "9110",
        label: "Connect Insights to Action",
        icon: "/src/assets/icons/datasource.png",
      },
    ],
  },
  {
    id: "13",
    label: "Text Quester",
    icon: "/src/assets/icons/datasource.png",
    children: [
      {
        id: "14",
        label: "Upload Your PDF",
        icon: "/src/assets/icons/datasource.png",
      },
      {
        id: "15",
        label: "Ask a Data Question",
        icon: "/src/assets/icons/datasource.png",
      },
    ],
  },
  {
    id: "16",
    label: "ETL Wiz",
    icon: "/src/assets/icons/datasource.png",
    children: [],
  },
  {
    id: "19",
    label: "Xpresss stream",
    icon: "/src/assets/icons/datasource.png",
    children: [],
  },
  {
    id: "22",
    label: "Log quester",
    icon: "/src/assets/icons/datasource.png",
    children: [],
  },
  {
    id: "26",
    label: "Sentiment quester",
    icon: "/src/assets/icons/datasource.png",
  },
  {
    id: "27",
    label: "Decision enabler",
    icon: "/src/assets/icons/datasource.png",
  },
  {
    id: "28",
    label: "Customer data profile",
    icon: "/src/assets/icons/datasource.png",
  },
];

// const CHART_TYPES = [
//   {
//     id: 1,
//     label: "Bar Chart",
//     // icon: 'bar_chart.png',
//   },
//   {
//     id: 2,
//     label: "Horizontal Bar Chart",
//     icon: "horizontal_bar_chart.png",
//   },
//   {
//     id: 3,
//     label: "Water Fall Chart",
//     icon: "water_fall_chart.png",
//   },
//   {
//     id: 4,
//     label: "Horizontal WaterFall Chart",
//     icon: "horizontal_waterfall_chart.png",
//   },
//   {
//     id: 5,
//     label: "Stacked Chart",
//     icon: "stacked_chart.png",
//   },
//   {
//     id: 6,
//     label: "Area Chart",
//     icon: "area_chart.png",
//   },
//   {
//     id: 7,
//     label: "Treanding Chart",
//     icon: "treanding_chart.png",
//   },
//   {
//     id: 8,
//     label: "Line Bar Chart",
//     icon: "line_bar_chart.png",
//   },

//   {
//     id: 9,
//     label: "Dash Line Chart",
//     icon: "dash_line_chart_1.png",
//   },
//   {
//     id: 10,
//     label: "Pie Chart",
//     icon: "pie_chart.png",
//   },
//   {
//     id: 11,
//     label: "Tree Chart",
//     icon: "tree_chart.png",
//   },
//   {
//     id: 12,
//     label: "Donut Chart",
//     icon: "donut_chart.png",
//   },
// ];

// const CHART_DATA = [
//   { name: "event planning", startTime: 1, endTime: 4 },
//   { name: "layout logistics", startTime: 3, endTime: 13 },
//   { name: "select vendors", startTime: 5, endTime: 8 },
//   { name: "hire venue", startTime: 9, endTime: 13 },
//   { name: "hire caterer", startTime: 10, endTime: 14 },
//   { name: "hire event decorators", startTime: 12, endTime: 17 },
//   { name: "rehearsal", startTime: 14, endTime: 16 },
//   { name: "event celebration", startTime: 17, endTime: 18 },
// ];

// const CHART_DATA_TIMESTAMP = [
//   {
//     task: "Task 1",
//     startTime: "2024-05-01",
//     endTime: "2024-05-05",
//   },
//   {
//     task: "Task 2",
//     startTime: "2024-05-03",
//     endTime: "2024-05-08",
//   },
//   {
//     task: "Task 3",
//     startTime: "2024-05-06",
//     endTime: "2024-05-12",
//   },
// ];

function App() {
  // const [isopen, setIsopen] = useState(true);

  // const chartProps = {
  //   height: 300,
  //   width: '300px',
  //   data: CHART_DATA_TIMESTAMP,
  //   xField: "task",
  //   yField: ["endTime", "startTime"],
  //   showToolTip: true,
  //   legengFieldName: "task",
  //   // barUniColorCode:'#38b2a6'
  // };


  const ganttChartProps = {
    data: TASK_DATA,
    height: 300,
    width:'100%',
    barBackgroundColor: '#45b691',
    title: 'Gantt Chart',
    startDateKey:'Start_Date',
    endDateKey: 'End_Date',
    taskNameKey: 'Sub_Activity',
    projectName: 'Sample Project',
    hide_y_axis: true,
    hide_x_axis: true,
    hide_label: false,
    hide_title:false,
    // hide_x_axis_border={hide_x_axis_border}
    // hide_y_axis_border={hide_y_axis_border}
    // hide_grid={hide_grid}
    // hide_legend={insights ? hide_legend : false}
    // hide_border={hide_border}
    // hide_tooltip={hide_tooltip}
    // hide_x_axis_label={hide_x_axis_label}
    // hide_y_axis_label={hide_y_axis_label}
    // Alignments={props.columnsAligments}
  };

  const [showPopup, setshowPopup] = useState(false);

  const togglePopup = () => {
    setshowPopup(prev=> !prev)
  };
  
  return (
    <>
      <div
      // style={{width: '200px', height: '200px', overflow: 'auto'}}
      >

        {/* <ChartPickerDrawer  data={CHART_TYPES} isopen={isopen} /> */}

        {/* <DisplaySetting /> */}


        {/* LEFT Side menu */}
        {/* <TestMenu items={menuItems} /> */}
        
        {/*  final GANTT CHART */}
        {/* <GantChartSimple {...ganttChartProps} />  */}

        {/* confirmation modal */}
        {/* <button onClick={togglePopup}>Show Popup</button>
        <PopupConfirmation show={showPopup} handleClose={togglePopup}/> */}

        {/* voice search */}
        <VoiceSearch />

        </div>
    </>
  );
}

export default App;
