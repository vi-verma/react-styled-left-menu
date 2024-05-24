// App.js

import React from "react";
import FusionCharts from "fusioncharts";
import Gantt from "fusioncharts/fusioncharts.gantt";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { GANTT_CHART_DATA } from "./data";
import { processData, processesFn, taskData, taskFn } from "./fusionHalper";

// Resolve the dependencies
ReactFC.fcRoot(FusionCharts, Gantt, FusionTheme);

// Sample data for the Gantt chart
const dataSource = {
  chart: {
    caption: "Construction management of a new store in Denver",
    subcaption: "Planned vs Actual",
    dateformat: "dd/mm/yyyy",
    outputdateformat: "ddds mns yy",
    ganttwidthpercent: "60",
    ganttPaneDuration: "40",
    ganttPaneDurationUnit: "d",
    plottooltext:
      "$processName{br} $label starting date $start{br}$label ending date $end",
    legendBorderAlpha: "0",
    flatScrollBars: "1",
    gridbordercolor: "#333333",
    gridborderalpha: "20",
    slackFillColor: "#e44a00",
    taskBarFillMix: "light+0",
    theme: "fusion",
  },
  categories: [
    {
      bgcolor: "#999999",
      category: [
        {
          start: "31/3/2024",
          end: "14/12/2024",
          label: "Months",
          align: "middle",
          fontcolor: "#ffffff",
          fontsize: "12",
        },
      ],
    },
    // {
    //   bgcolor: "#999999",
    //   align: "middle",
    //   fontcolor: "#d81515",
    //   fontsize: "12",
    //   category: [
    //     {
    //       start: "1/4/2014",
    //       end: "30/4/2014",
    //       label: "April",
    //     },
    //     {
    //       start: "1/5/2014",
    //       end: "31/5/2014",
    //       label: "May",
    //     },
    //     {
    //       start: "1/6/2014",
    //       end: "30/6/2014",
    //       label: "June",
    //     },
    //   ],
    // },
    // {
    //   bgcolor: "#ffffff",
    //   fontcolor: "#333333",
    //   fontsize: "11",
    //   align: "center",
    //   category: [
    //     {
    //       start: "1/4/2014",
    //       end: "1/4/2014",
    //       label: "Week 1",
    //     },
    //     {
    //       start: "6/4/2014",
    //       end: "12/4/2014",
    //       label: "Week 2",
    //     },
    //     {
    //       start: "13/4/2014",
    //       end: "19/4/2014",
    //       label: "Week 3",
    //     },
    //     {
    //       start: "20/4/2014",
    //       end: "26/4/2014",
    //       label: "Week 4",
    //     },
    //     {
    //       start: "27/4/2014",
    //       end: "3/5/2014",
    //       label: "Week 5",
    //     },
    //     {
    //       start: "4/5/2014",
    //       end: "10/5/2014",
    //       label: "Week 6",
    //     },
    //     {
    //       start: "11/5/2014",
    //       end: "17/5/2014",
    //       label: "Week 7",
    //     },
    //     {
    //       start: "18/5/2014",
    //       end: "24/5/2014",
    //       label: "Week 8",
    //     },
    //     {
    //       start: "25/5/2014",
    //       end: "31/5/2014",
    //       label: "Week 9",
    //     },
    //     {
    //       start: "1/6/2014",
    //       end: "7/6/2014",
    //       label: "Week 10",
    //     },
    //     {
    //       start: "8/6/2014",
    //       end: "14/6/2014",
    //       label: "Week 11",
    //     },
    //     {
    //       start: "15/6/2014",
    //       end: "21/6/2014",
    //       label: "Week 12",
    //     },
    //     {
    //       start: "22/6/2014",
    //       end: "28/6/2014",
    //       label: "Week 13",
    //     },
    //   ],
    // },
    // {
    //   bgcolor: "#ffffff",
    //   fontcolor: "#333333",
    //   fontsize: "11",
    //   align: "center",
    //   category: [
    //     {
    //       start: "1/4/2014",
    //       end: "1/4/2014",
    //       label: "1",
    //     },
    //     {
    //       start: "2/4/2014",
    //       end: "2/4/2014",
    //       label: "2",
    //     },
    //     {
    //       start: "3/4/2014",
    //       end: "3/4/2014",
    //       label: "3",
    //     },
    //     {
    //       start: "4/4/2014",
    //       end: "4/4/2014",
    //       label: "4",
    //     },
    //     {
    //       start: "5/4/2014",
    //       end: "5/4/2014",
    //       label: "Week 5",
    //     },
    //     {
    //       start: "6/5/2014",
    //       end: "6/5/2014",
    //       label: "Week 6",
    //     },
    //     {
    //       start: "11/5/2014",
    //       end: "17/5/2014",
    //       label: "Week 7",
    //     },
    //     {
    //       start: "18/5/2014",
    //       end: "24/5/2014",
    //       label: "Week 8",
    //     },
    //     {
    //       start: "25/5/2014",
    //       end: "31/5/2014",
    //       label: "Week 9",
    //     },
    //     {
    //       start: "1/6/2014",
    //       end: "7/6/2014",
    //       label: "Week 10",
    //     },
    //     {
    //       start: "8/6/2014",
    //       end: "14/6/2014",
    //       label: "Week 11",
    //     },
    //     {
    //       start: "15/6/2014",
    //       end: "21/6/2014",
    //       label: "Week 12",
    //     },
    //     {
    //       start: "22/6/2014",
    //       end: "28/6/2014",
    //       label: "Week 13",
    //     },
    //   ],
    // },
  ],
  processes: {
    headertext: "Task",
    fontcolor: "#000000",
    fontsize: "11",
    isanimated: "1",
    bgcolor: "#6baa01",
    headervalign: "bottom",
    headeralign: "left",
    headerbgcolor: "#999999",
    headerfontcolor: "#ffffff",
    headerfontsize: "12",
    align: "left",
    isbold: "1",
    bgalpha: "25",
    process:[...processesFn(GANTT_CHART_DATA)],
    // process:[...processData],
  },
  //   datatable: {
  //     showprocessname: "1",
  //     namealign: "left",
  //     fontcolor: "#000000",
  //     fontsize: "10",
  //     valign: "right",
  //     align: "center",
  //     headervalign: "bottom",
  //     headeralign: "center",
  //     headerbgcolor: "#999999",
  //     headerfontcolor: "#ffffff",
  //     headerfontsize: "12",
  //     datacolumn: [
  //       {
  //         bgcolor: "#eeeeee",
  //         headertext: "Actual{br}Start{br}Date",
  //         text: [
  //           {
  //             label: "9/4/2014",
  //           },
  //           {
  //             label: "13/4/2014",
  //           },
  //           {
  //             label: "26/4/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "4/5/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "6/5/2014",
  //           },
  //           {
  //             label: "5/5/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "11/5/2014",
  //           },
  //           {
  //             label: "16/5/2014",
  //           },
  //           {
  //             label: "16/5/2014",
  //           },
  //           {
  //             label: "21/5/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "25/5/2014",
  //           },
  //           {
  //             label: "28/5/2014",
  //           },
  //           {
  //             label: "4/6/2014",
  //           },
  //           {
  //             label: "4/6/2014",
  //           },
  //           {
  //             label: "4/6/2014",
  //           },
  //           {
  //             label: "2/6/2014",
  //           },
  //           {
  //             label: "5/6/2014",
  //           },
  //           {
  //             label: "18/6/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "16/6/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "23/6/2014",
  //           },
  //           {
  //             label: "18/6/2014",
  //           },
  //           {
  //             label: "25/6/2014",
  //           },
  //         ],
  //       },
  //       {
  //         bgcolor: "#eeeeee",
  //         headertext: "Actual{br}End{br}Date",
  //         text: [
  //           {
  //             label: "12/4/2014",
  //           },
  //           {
  //             label: "25/4/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "4/5/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "10/5/2014",
  //           },
  //           {
  //             label: "10/5/2014",
  //           },
  //           {
  //             label: "11/5/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "14/5/2014",
  //           },
  //           {
  //             label: "19/5/2014",
  //           },
  //           {
  //             label: "21/5/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "24/5/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "27/5/2014",
  //           },
  //           {
  //             label: "1/6/2014",
  //           },
  //           {
  //             label: "6/6/2014",
  //           },
  //           {
  //             label: "4/6/2014",
  //           },
  //           {
  //             label: "4/6/2014",
  //           },
  //           {
  //             label: "7/6/2014",
  //           },
  //           {
  //             label: "17/6/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "20/6/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "23/6/2014",
  //           },
  //           {
  //             label: "23/6/2014",
  //           },
  //           {
  //             label: "23/6/2014",
  //             bgcolor: "#e44a00",
  //             bgAlpha: "40",
  //           },
  //           {
  //             label: "28/6/2014",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  tasks: {
    task:[...taskFn(GANTT_CHART_DATA)],
    // task:[...taskData] ,
  },
  //   connectors: [
  //     {
  //       connector: [
  //         {
  //           fromtaskid: "1",
  //           totaskid: "2",
  //           color: "#008ee4",
  //           thickness: "2",
  //           fromtaskconnectstart_: "1",
  //         },
  //         {
  //           fromtaskid: "2-2",
  //           totaskid: "3",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //         {
  //           fromtaskid: "3-2",
  //           totaskid: "4",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //         {
  //           fromtaskid: "3-2",
  //           totaskid: "6",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //         {
  //           fromtaskid: "7",
  //           totaskid: "8",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //         {
  //           fromtaskid: "7",
  //           totaskid: "9",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //         {
  //           fromtaskid: "12",
  //           totaskid: "16",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //         {
  //           fromtaskid: "12",
  //           totaskid: "17",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //         {
  //           fromtaskid: "17-2",
  //           totaskid: "18",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //         {
  //           fromtaskid: "19",
  //           totaskid: "22",
  //           color: "#008ee4",
  //           thickness: "2",
  //         },
  //       ],
  //     },
  //   ],
  //   milestones: {
  //     milestone: [
  //       {
  //         date: "2/6/2014",
  //         taskid: "12",
  //         color: "#f8bd19",
  //         shape: "star",
  //         tooltext: "Completion of Phase 1",
  //       },
  //     ],
  //   },
  legend: {
    item: [
      {
        label: "Planned",
        color: "#008ee4",
      },
      {
        label: "Actual",
        color: "#6baa01",
      },
      {
        label: "Slack (Delay)",
        color: "#e44a00",
      },
    ],
  },
};

const FusionGanttChart = () => {
  return (
    <ReactFC
      type="gantt"
      width="100%"
      height="400"
      dataFormat="json"
      dataSource={dataSource}
    />
  );
};

export default FusionGanttChart;
