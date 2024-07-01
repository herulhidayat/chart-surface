import ChartsVisualization from "@app/modules/ECharts/ChartsVisualization";
import { DUMMY_DATA } from "@assets/dummy/chart-data.dummy";
import React from "react";

export default function ChartsSurface() {
  let min = Infinity
  let max = 1
  const rawData = DUMMY_DATA.map((d:any) => {
    min = Math.min(min, d.time)
    max = Math.max(max, d.time)
    return [d.length, d.height, d.time]
  })


    
  const option = {
    tooltip: {},
    visualMap: {
      show: false,
      dimension: 2,
      min: min,
      max: max,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      }
    },
    toolbox: {
      feature: {
        dataZoom: {},
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis3D: {
      type: 'value'
    },
    yAxis3D: {
      type: 'value'
    },
    zAxis3D: {
      type: 'value'
    },
    grid3D: {
      viewControl: {
        projection: 'orthographic'
      }
    },
    series: [{
      type: 'surface',
      wireframe: {
        show: false
      },
      data: rawData
    }]
  };

  return (
    <ChartsVisualization
      options={option}
    />
  )
}