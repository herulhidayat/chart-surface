import * as echarts from 'echarts';
import React, { useEffect, useRef, useState } from 'react';
import 'echarts-gl';

// import langDE from 'echarts/i18n/langDE';

import { DARK_THEME, LIGHT_THEME } from '@app/config/charts/echarts-theme.config';
import { debounce, isEmpty } from 'lodash';

interface IEcharts{
  options?:any;
  isLoading?:boolean;
  isNoData?:boolean;
  isMiniNodata?:boolean;
}
function ChartsVisualization({options=null, isLoading=false, isNoData=false, isMiniNodata=false}:IEcharts) {
  const defaultOption = {};
  
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(true);

  const [Chart, setChart] = useState<any>();
  const [chartOptions, setChartOptions] = useState(defaultOption);
  const chartRef: any = useRef<HTMLDivElement>(null);

  /** First init Chart element */
  function initChart() {
    if (Chart !== undefined) return;

    echarts.registerTheme('light', LIGHT_THEME);
    echarts.registerTheme('dark', DARK_THEME);

    const mode = 'light';
    const ch: any = echarts.init(chartRef.current, mode);
    setChart(ch);
  }

  useEffect(() => {
    if(options) setChartOptions(options)
        console.log(options)
  }, [options]);

  useEffect(() => {
    setLoading(isLoading)
    setNoData(isNoData)
  }, [isLoading, isNoData])
  

  /** INITIALIZE */
  useEffect(() => {
    if (chartRef?.current) initChart();
  }, [chartRef]);


  /** DETECT AND RENDER SET TO CHART ON CHART OPTIONS CHANGED */
  useEffect(() => {
    if (Chart === undefined) return;
    Chart.setOption(chartOptions, { notMerge: true, lazyUpdate: true });

    if (!isEmpty(chartOptions)) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 1000);
    }
  }, [chartOptions]);

  /** RESIZE LISTENER */
  const handleResize = debounce(() => {
    if (Chart) {
      // console.log('resize')
      Chart.resize();
    }
  }, 50)
  
  React.useEffect(() => {
    if (Chart === undefined) return;

    window.addEventListener('resize', handleResize)
  
    return () => window.removeEventListener('resize', handleResize)
  }, [Chart])

  useEffect(() => {
    return () => {
      setChart(undefined);
      setChartOptions(defaultOption);
    };
  }, []);

  return (
    <>
      <div ref={chartRef} className={noData ? "visibility-hidden" : ""} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
}

export default React.memo(ChartsVisualization);