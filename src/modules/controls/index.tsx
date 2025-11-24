import React from 'react';
import { useControls } from './hooks/useControls';
import { TrendUpIcon, TrendDownIcon, CheckIcon } from '../../components/TrendIcon';

const Controls: React.FC = () => {
  const { data, loading, error } = useControls();

  if (loading) return <div className="mb-8">Loading controls data...</div>;
  if (error) return <div className="mb-8 text-red-600">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {data.map((control) => (
        <div key={control.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{control.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{control.subtitle}</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Data Quality Status */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-700">Data Quality Status</h4>
                  <div className={`flex items-center space-x-1 ${
                    control.dataQualityStatus.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {control.dataQualityStatus.trend === 'up' ? <TrendUpIcon /> : <TrendDownIcon />}
                    <span className="text-sm font-medium">{control.dataQualityStatus.value}</span>
                  </div>
                </div>
              </div>

              {/* Global Data Quality */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Global Data Quality</h4>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${control.globalDataQuality}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{control.globalDataQuality}%</span>
                </div>
              </div>

              {/* Anomalies Treated */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Anomalies Treated Since Last Quarter</h4>
                <div className="text-2xl font-bold text-gray-900">{control.anomaliesTreated}</div>
              </div>

              {/* Justified Anomalies */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Justified Anomalies</h4>
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span className="text-2xl font-bold text-green-600">{control.justifiedAnomalies}</span>
                </div>
              </div>

              {/* Unjustified Anomalies */}
              <div className="bg-gray-50 rounded-lg p-4 md:col-span-2">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Unjustified Anomalies</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Before Rule Implementation</div>
                    <div className="text-xl font-bold text-red-600">{control.unjustifiedAnomalies.before}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">After Rule Implementation</div>
                    <div className="text-xl font-bold text-orange-600">{control.unjustifiedAnomalies.after}</div>
                  </div>
                </div>
              </div>

              {/* Last 3 Quarters Graph */}
              <div className="bg-gray-50 rounded-lg p-4 md:col-span-2">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Last 3 Quarters Evolution</h4>
                <div className="flex items-end justify-between h-16 space-x-2">
                  {control.quarterlyData.map((value, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                        style={{ height: `${(value / Math.max(...control.quarterlyData)) * 100}%` }}
                        title={`Q${index + 1}: ${value}`}
                      ></div>
                      <div className="text-xs text-gray-500 mt-1">Q{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Controls;