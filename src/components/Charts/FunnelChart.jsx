import * as React from "react";
import Chart from "react-apexcharts";
import { useEffect } from "react";
const FunnelChart = (props) => {
  return <Chart options={props.options} series={props.series} type="bar" />;
};
export default FunnelChart;
