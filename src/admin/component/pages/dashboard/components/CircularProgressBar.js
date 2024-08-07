import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components needed for the doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Progress', 'Remaining'],
  datasets: [
    {
      label: 'Completion',
      data: [70, 30], // 70% progress
      backgroundColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(200, 200, 200, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(200, 200, 200, 0.2)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: '80%', // Adjust the inner radius
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};

const CircularProgressBar = () => (
  <div className='bg-white m-3 py-5 shadow rounded-xl flex justify-center' > 
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
    <Doughnut data={data} options={options} />
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '24px',
      fontWeight: 'bold',
    }}>
      70%
    </div>
  </div>
  </div>
);

export default CircularProgressBar;
