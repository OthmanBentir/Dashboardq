import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface AnomalyChartProps {
  data: Array<{
    bu: string;
    quarter: string;
    totalAnomalies: number;
  }>;
}

const AnomalyChart: React.FC<AnomalyChartProps> = ({ data }) => {
  // Define consistent colors for each BU
  const buColors = {
    'MARK': '#ef4444', // red-500
    'GLBA': '#3b82f6', // blue-500
    'Other BU': '#10b981' // emerald-500
  };

  // Get unique quarters and BUs
  const quarters = [...new Set(data.map(item => item.quarter))].sort();
  const bus = [...new Set(data.map(item => item.bu))].sort();

  // Prepare datasets for each BU
  const datasets = bus.map(bu => {
    const buData = quarters.map(quarter => {
      const item = data.find(d => d.bu === bu && d.quarter === quarter);
      return item ? item.totalAnomalies : 0;
    });

    return {
      label: bu,
      data: buData,
      backgroundColor: buColors[bu as keyof typeof buColors] || '#6b7280',
      borderColor: buColors[bu as keyof typeof buColors] || '#6b7280',
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
    };
  });

  const chartData = {
    labels: quarters,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y} anomalies`;
          }
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Quarters',
          font: {
            size: 14,
            weight: 'bold' as const,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Anomalies',
          font: {
            size: 14,
            weight: 'bold' as const,
          },
        },
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Global Anomaly Overview</h2>
        <p className="text-sm text-gray-600 mt-1">Grouped bar chart showing anomalies by Business Unit across quarters</p>
      </div>
      <div className="p-6">
        <div style={{ height: '400px' }}>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AnomalyChart;