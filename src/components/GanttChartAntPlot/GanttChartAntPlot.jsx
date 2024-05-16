import React from "react";
import { Bar } from "@ant-design/plots";
import { customDataFormatter } from "./helper";

const GanttChartAntPlot = ({
    height= 300,
    width= 600,
  data = [],
  xField = undefined,
  yField = undefined,
  showToolTip = true,
  legengFieldName = undefined,
  barUniColorCode = undefined,
}) => {
    
  const style = barUniColorCode
    ? {
        style: {
          fill: barUniColorCode,
        },
      }
    : "";

  const config = {
    data: data,
    height,
    width,
    xField: xField,
    yField: yField,
    colorField: legengFieldName,
    tooltip: {
      items: [
        {
          channel: "y1",
          valueFormatter: (time) => customDataFormatter(time, "date"),
        },
        {
          channel: "y",
          valueFormatter: (time) => customDataFormatter(time, "date"),
        },
      ],
    },
    // legend: {
    //   color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 },
    // },
    //   style: {
    //       fill: barUniColorCode,
    //     },
    ...style,
    interaction: {
      elementHighlightByColor: false,
      tooltip: showToolTip,
    },
    axis: {
      x: {
        labelFormatter: (name, i) => name,
      },
      y: {
        labelFormatter: (time, i) => customDataFormatter(time, "dateOnly"),
      },
    },
  };
  return <Bar {...config} />;
};

export default GanttChartAntPlot;
