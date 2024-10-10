import * as React from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';
import { CircularProgress, Typography } from '@mui/material';

function BasicBars() {
  const url = "http://127.0.0.1:5000/dashboard";
  const [data, setData] = React.useState({ sales: [], profit: [] });
 
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log("API Response:", response.data);
      setData({
        sales: response.data.sales_per_product,
        profit: response.data.profit_per_product,
      });
    } catch (e) {

      console.error("Error fetching data:", e);
    } 
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  

  const xAxisData = data.sales.map(item => item.product);
  const salesData = data.sales.map(item => item.sales);
  const profitData = data.profit.map(item => item.profit); 

  console.log("X-Axis Data:", xAxisData);
  console.log("Sales Data:", salesData);
  console.log("Profit Data:", profitData);

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: xAxisData }]} 
      series={[
        { label: 'Sales', data: salesData,color: '#4caf50' }, 
        { label: 'Profit', data: profitData }, 
      ]}
      width={500}
      height={400}
      title='Sales and Profit per Product'
      
    />
  );
}

export default BasicBars;
