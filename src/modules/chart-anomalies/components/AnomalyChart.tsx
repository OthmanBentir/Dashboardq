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
    quarter: string;
    bus: Array<{
      bu: string;
      total: number;
      controls: Record<string, number>;
    }>;
  }>;
}

const AnomalyChart: React.FC<AnomalyChartProps> = ({ data }) => {
  // Define consistent colors for each control
  const controlColors = {
    'Control C': '#ef4444', // red-500
    'Control E': '#f97316', // orange-500
    'Control F': '#eab308', // yellow-500
    'Control J': '#22c55e', // green-500
    'Control H': '#3b82f6', // blue-500
    'Control T': '#8b5cf6'  // violet-500
  };

  // Get unique quarters and controls
  const quarters = data.map(item => item.quarter);
  const controls = ['Control C', 'Control E', 'Control F', 'Control J', 'Control H', 'Control T'];

  // Prepare datasets for each control (stacked)
  const datasets = controls.map(control => {
    const controlData = quarters.map(quarter => {
      const quarterData = data.find(d => d.quarter === quarter);
      if (!quarterData) return 0;
      
      // Sum this control across all BUs for this quarter
      return quarterData.bus.reduce((sum, buData) => {
        return sum + (buData.controls[control] || 0);
      }, 0);
    });

    return {
      label: control,
      data: controlData,
      backgroundColor: controlColors[control as keyof typeof controlColors] || '#6b7280',
      borderColor: controlColors[control as keyof typeof controlColors] || '#6b7280',
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
    scales: {
      x: {
        stacked: true,
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
        stacked: true,
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
          },
          afterBody: function(context: any) {
            if (context.length > 0) {
              const quarterData = data.find(d => d.quarter === context[0].label);
              if (quarterData) {
                const total = quarterData.bus.reduce((sum, buData) => sum + buData.total, 0);
                return [`Total: ${total} anomalies`];
              }
            }
            return [];
          }
        }
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
        <h2 className="text-lg font-semibold text-gray-900">Global Anomaly Overview by Control</h2>
        <p className="text-sm text-gray-600 mt-1">Stacked bar chart showing how each control contributes to total anomalies per quarter</p>
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