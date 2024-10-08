import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4] }, { data: [1] }, { data: [2] }]}
      width={500}
      height={300}
    />
  );
}
export default BasicBars;
