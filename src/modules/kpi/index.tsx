import React from 'react';
import { useKPI } from './hooks/useKPI';
import { TrendUpIcon, TrendDownIcon } from '../../components/TrendIcon';

const KPICards: React.FC = () => {
  const { data, loading, error } = useKPI();

  if (loading) return <div className="mb-8">Loading KPI data...</div>;
  if (error) return <div className="mb-8 text-red-600">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {data.map((kpi, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{kpi.value}</p>
            </div>
            <div className={`flex items-center space-x-1 ${
              kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {kpi.trend === 'up' ? <TrendUpIcon /> : <TrendDownIcon />}
              <span className="text-sm font-medium">{kpi.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;