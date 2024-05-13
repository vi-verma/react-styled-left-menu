// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react";
import TestMenu from "./components/TestMenu";
import ChartPickerDrawer from "./components/chartTypeSelection/ChartSelectionDrawer";
import DisplaySetting from "./components/AdvDisplaySetting/DisplaySetting";

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

const CHART_TYPES = [
  {
      id:1,
      label:'Bar Chart',
      // icon: 'bar_chart.png',
  },
  {
      id:2,
      label:'Horizontal Bar Chart',
      icon: 'horizontal_bar_chart.png',
  },
  {
      id:3,
      label:'Water Fall Chart',
      icon: 'water_fall_chart.png',
  },
  {
      id:4,
      label:'Horizontal WaterFall Chart',
      icon: 'horizontal_waterfall_chart.png',
  },
  {
      id:5,
      label:'Stacked Chart',
      icon: 'stacked_chart.png',
  },
  {
      id:6,
      label:'Area Chart',
      icon: 'area_chart.png',
  },
  {
      id:7,
      label:'Treanding Chart',
      icon: 'treanding_chart.png',
  },
  {
      id:8,
      label:'Line Bar Chart',
      icon: 'line_bar_chart.png',
  },

  {
      id:9,
      label:'Dash Line Chart',
      icon: 'dash_line_chart_1.png',
  },
  {
      id:10,
      label:'Pie Chart',
      icon: 'pie_chart.png',
  },
  {
      id:11,
      label:'Tree Chart',
      icon: 'tree_chart.png',
  },
  {
      id:12,
      label:'Donut Chart',
      icon: 'donut_chart.png',
  },
];

function App() {
  const [isopen, setIsopen] = useState(true);

  return (
    <>
      <div>
        {/* <TestMenu items={menuItems} /> */}
        {/* <ChartPickerDrawer  data={CHART_TYPES} isopen={isopen} /> */}
        <DisplaySetting />
      </div>
    </>
  );
}

export default App;
