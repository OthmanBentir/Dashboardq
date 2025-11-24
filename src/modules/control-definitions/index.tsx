import React from 'react';
import { useControlDefinitions } from './hooks/useControlDefinitions';

const ControlDefinitions: React.FC = () => {
  const { data, loading, error } = useControlDefinitions();

  if (loading) return <div className="mb-8">Loading control definitions...</div>;
  if (error) return <div className="mb-8 text-red-600">Error: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Control Definitions</h2>
        <p className="text-sm text-gray-600 mt-1">Understanding each data quality control and its purpose</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((definition) => (
            <div key={definition.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">{definition.id}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{definition.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{definition.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlDefinitions;