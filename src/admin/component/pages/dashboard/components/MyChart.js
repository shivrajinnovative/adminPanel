import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      type: 'linear',
      beginAtZero: true,
    },
  },
};

const MyChart = () => (
  <div className='bg-white  shadow  h-60 m-3 rounded-xl p-3' >
    <Line data={data} options={options} />
  </div>
);

export default MyChart;