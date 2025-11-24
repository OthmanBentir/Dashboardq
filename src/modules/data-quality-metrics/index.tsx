import React from 'react';
import { useDataQualityMetrics } from './hooks/useDataQualityMetrics';

const DataQualityMetrics: React.FC = () => {
  const { data, loading, error } = useDataQualityMetrics();

  if (loading) return <div className="mb-8">Loading data quality metrics...</div>;
  if (error) return <div className="mb-8 text-red-600">Error: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-sm mb-8 border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Data Quality Metrics</h2>
        <p className="text-sm text-gray-600 mt-1">Current performance across all quality dimensions</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Metric
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.metric}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataQualityMetrics;