import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components needed for the bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Sales',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const MyBarChart = () => (
  <div className='bg-white shadow h-60 my-3 rounded-xl p-4 pb-7' >
    <h2 className='font-bold text-xl ' >Total Revenue</h2>
    <Bar data={data} options={options} />
  </div>
);

export default MyBarChart;
