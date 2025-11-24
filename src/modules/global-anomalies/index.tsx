import React from 'react';
import { useGlobalAnomalies } from './hooks/useGlobalAnomalies';

const GlobalAnomalies: React.FC = () => {
  const { data, loading, error } = useGlobalAnomalies();

  const controlColors = {
    completeness: '#ef4444', // red
    accuracy: '#f97316', // orange
    consistency: '#eab308', // yellow
    timeliness: '#22c55e', // green
    validity: '#3b82f6', // blue
    uniqueness: '#8b5cf6' // violet
  };

  if (loading) return <div className="mb-8">Loading global anomalies data...</div>;
  if (error) return <div className="mb-8 text-red-600">Error: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-sm mb-8 border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Global Anomalies Overview</h2>
        <p className="text-sm text-gray-600 mt-1">Quarterly distribution of anomalies across all data quality controls</p>
      </div>
      <div className="p-6">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: controlColors.completeness }}></div>
            <span className="text-xs text-gray-600">Data Completeness</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: controlColors.accuracy }}></div>
            <span className="text-xs text-gray-600">Data Accuracy</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: controlColors.consistency }}></div>
            <span className="text-xs text-gray-600">Data Consistency</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: controlColors.timeliness }}></div>
            <span className="text-xs text-gray-600">Data Timeliness</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: controlColors.validity }}></div>
            <span className="text-xs text-gray-600">Data Validity</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: controlColors.uniqueness }}></div>
            <span className="text-xs text-gray-600">Data Uniqueness</span>
          </div>
        </div>

        {/* Chart */}
        <div className="flex items-end justify-between h-64 space-x-8">
          {data.map((quarter, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="relative w-full max-w-16 h-48 bg-gray-100 rounded-t-lg overflow-hidden group">
                {/* Stacked bars */}
                <div className="absolute bottom-0 w-full">
                  <div 
                    className="w-full transition-all duration-200 hover:opacity-80"
                    style={{ 
                      height: `${(quarter.controls.completeness / quarter.total) * 100}%`,
                      backgroundColor: controlColors.completeness
                    }}
                    title={`Completeness: ${quarter.controls.completeness}`}
                  ></div>
                  <div 
                    className="w-full transition-all duration-200 hover:opacity-80"
                    style={{ 
                      height: `${(quarter.controls.accuracy / quarter.total) * 100}%`,
                      backgroundColor: controlColors.accuracy
                    }}
                    title={`Accuracy: ${quarter.controls.accuracy}`}
                  ></div>
                  <div 
                    className="w-full transition-all duration-200 hover:opacity-80"
                    style={{ 
                      height: `${(quarter.controls.consistency / quarter.total) * 100}%`,
                      backgroundColor: controlColors.consistency
                    }}
                    title={`Consistency: ${quarter.controls.consistency}`}
                  ></div>
                  <div 
                    className="w-full transition-all duration-200 hover:opacity-80"
                    style={{ 
                      height: `${(quarter.controls.timeliness / quarter.total) * 100}%`,
                      backgroundColor: controlColors.timeliness
                    }}
                    title={`Timeliness: ${quarter.controls.timeliness}`}
                  ></div>
                  <div 
                    className="w-full transition-all duration-200 hover:opacity-80"
                    style={{ 
                      height: `${(quarter.controls.validity / quarter.total) * 100}%`,
                      backgroundColor: controlColors.validity
                    }}
                    title={`Validity: ${quarter.controls.validity}`}
                  ></div>
                  <div 
                    className="w-full transition-all duration-200 hover:opacity-80"
                    style={{ 
                      height: `${(quarter.controls.uniqueness / quarter.total) * 100}%`,
                      backgroundColor: controlColors.uniqueness
                    }}
                    title={`Uniqueness: ${quarter.controls.uniqueness}`}
                  ></div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm font-medium text-gray-900">{quarter.quarter}</div>
                <div className="text-xs text-gray-500">Total: {quarter.total}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalAnomalies;