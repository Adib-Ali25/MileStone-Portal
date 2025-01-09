import React from 'react';
import './SalesChart.css';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: 'Jan', directSales: 12000, retail: 8000, wholesale: 4000 },
  { name: 'Feb', directSales: 10000, retail: 7000, wholesale: 5000 },
  { name: 'Mar', directSales: 14000, retail: 6000, wholesale: 5000 },
  { name: 'Apr', directSales: 9000, retail: 9000, wholesale: 5000 },
  { name: 'May', directSales: 16000, retail: 11000, wholesale: 7000 },
  { name: 'Jun', directSales: 13000, retail: 9000, wholesale: 6000 },
  { name: 'Jul', directSales: 15000, retail: 12000, wholesale: 9000 },
  { name: 'Aug', directSales: 14000, retail: 8000, wholesale: 5000 },
  { name: 'Sep', directSales: 11000, retail: 12000, wholesale: 10000 },
  { name: 'Oct', directSales: 20000, retail: 15000, wholesale: 13000 },
  { name: 'Nov', directSales: 21000, retail: 16000, wholesale: 12000 },
  { name: 'Dec', directSales: 24000, retail: 17000, wholesale: 13000 },
];

const SalesChart = () => {
  return (
    <div className="SalesChart-container">
      <h3>Sales Report</h3>
      <div className="SalesChart-chart">
        <ResponsiveContainer>
          <LineChart data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="linear" dataKey="directSales" stroke="#6C11D9" />
            <Line type="linear" dataKey="retail" stroke="#FFA256" />
            <Line type="linear" dataKey="wholesale" stroke="#D91189" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
