import ChartsVisualization from "@app/modules/ECharts/ChartsVisualization";
import { DUMMY_DATA, DUMMY_DATA2 } from "@assets/dummy/chart-data.dummy";
import React from "react";

interface Props {
  data: any
}
export default function ChartsSurface({ data }: Props) {
  let min = Infinity
  let max = 1
  const rawData = data.map((d:any) => {
    min = Math.min(min, d.diagonal)
    max = Math.max(max, d.diagonal)
    return [d.length, d.height, d.diagonal]
  })

  console.log(rawData)


    
  const option = {
    tooltip: {},
    visualMap: {
      show: false,
      dimension: 2,
      min: min,
      max: max,
      inRange: {
        color: ['#ffffff', '#000000', '#ffffff']
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