import React, { useEffect, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import 'highcharts/css/highcharts.css';
import highChart from 'highcharts/highcharts';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import generate from './Generators';
import config from './config.json';
// import styled from 'styled-components';

function ChartRegion({ width, height, children, display, isLoading }) {
  useEffect(() => {
    const id = uuid();
    if (display && !isLoading) {
      initialChart();
      setChartId(id);
    }
  }, [display, isLoading]);
  const [chartId, setChartId] = useState();
  const drawRef = useRef();

  const initialChart = () => {
    const chartOptions = {};
    children.forEach(tag => {
      Object.assign(chartOptions, generate(tag));
    });
    Object.assign(chartOptions, config);
    highChart.chart(drawRef.current, chartOptions);
  };

  return !isLoading ? (
    <div id={chartId} ref={drawRef} style={{ width, height }}>
      {children}
    </div>
  ) : (
    <LoadingIndicator />
  );
}

ChartRegion.propTypes = {
  children: PropTypes.any.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export { ChartRegion };
