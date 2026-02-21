import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FinanceChart = ({ type = 'bar' }) => {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Receita',
        data: [12000, 19000, 15000, 22000, 20000, 25000],
        backgroundColor: '#27ae60',
        barPercentage: 0.5,
        categoryPercentage: 0.6,
        borderRadius: 5,
      },
      {
        label: 'Despesa',
        data: [8000, 11000, 9000, 14000, 12000, 15000],
        backgroundColor: '#e74c3c',
        barPercentage: 0.5,
        categoryPercentage: 0.6,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return type === 'line' ? <Line data={data} options={options} /> : <Bar data={data} options={options} />;
};

export default FinanceChart;