
import React from 'react';
import { Bar } from '@ant-design/plots';

const GanttChartAntPlot = ({ data=[],xField=undefined, yField=undefined, showToolTip=true,legengFieldName=undefined, showLegend=true,  }) => {

  const config = {
    data: data,
    xField: xField,
    yField: yField,
    colorField: legengFieldName,
    // legend: {
    //   color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 },
    // },
      style: {
    //   textAnchor: (d) => (d.name ? 'right' : 'start'),
      // fill: '#38b2a6',
      // dx: (d) => (+d.frequency > 0.008 ? -5 : 5),
    },
    interaction: {
      elementHighlightByColor: false,
      tooltip: showToolTip,
    },
     axis: {
      x: {
        labelFormatter:(name, i)=> name ,
      },
      y: {
        labelFormatter:(time, i)=> new Date(time).getDate(),
      },
      
    },
  };
  return <Bar {...config} />;
};

export default GanttChartAntPlot;