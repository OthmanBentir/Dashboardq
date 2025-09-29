import React from 'react';

// Custom Icons Components
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const TrendUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TrendDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function App() {
  // Mock data for the dashboard
  const kpiData = [
    { title: 'Total Records', value: '2.4M', change: '+12%', trend: 'up' },
    { title: 'Data Quality Score', value: '94.2%', change: '+2.1%', trend: 'up' },
    { title: 'Active Anomalies', value: '23', change: '-15%', trend: 'down' },
    { title: 'Processing Time', value: '1.2s', change: '-8%', trend: 'down' },
  ];

  const tableData = [
    { metric: 'Completeness', value: '96.5%' },
    { metric: 'Accuracy', value: '94.2%' },
    { metric: 'Consistency', value: '92.8%' },
    { metric: 'Timeliness', value: '98.1%' },
    { metric: 'Validity', value: '95.7%' },
    { metric: 'Uniqueness', value: '99.3%' },
  ];

  // Global anomalies data for stacked bar chart
  const globalAnomaliesData = [
    {
      quarter: 'Q1 2024',
      total: 450,
      controls: {
        completeness: 85,
        accuracy: 92,
        consistency: 78,
        timeliness: 65,
        validity: 75,
        uniqueness: 55
      }
    },
    {
      quarter: 'Q2 2024',
      total: 380,
      controls: {
        completeness: 70,
        accuracy: 78,
        consistency: 65,
        timeliness: 52,
        validity: 62,
        uniqueness: 53
      }
    },
    {
      quarter: 'Q3 2024',
      total: 320,
      controls: {
        completeness: 58,
        accuracy: 65,
        consistency: 55,
        timeliness: 45,
        validity: 52,
        uniqueness: 45
      }
    },
    {
      quarter: 'Q4 2024',
      total: 280,
      controls: {
        completeness: 48,
        accuracy: 55,
        consistency: 45,
        timeliness: 38,
        validity: 46,
        uniqueness: 48
      }
    }
  ];

  const controlColors = {
    completeness: '#ef4444', // red
    accuracy: '#f97316', // orange
    consistency: '#eab308', // yellow
    timeliness: '#22c55e', // green
    validity: '#3b82f6', // blue
    uniqueness: '#8b5cf6' // violet
  };

  // Controls data
  const controlsData = [
    {
      id: 1,
      title: 'Control 1',
      subtitle: 'Monitoring data completeness across all fields',
      dataQualityStatus: { value: '+5.2%', trend: 'up' },
      globalDataQuality: 96.5,
      anomaliesTreated: 45,
      justifiedAnomalies: 12,
      unjustifiedAnomalies: { before: 28, after: 15 },
      quarterlyData: [85, 70, 58, 48]
    },
    {
      id: 2,
      title: 'Control 2',
      subtitle: 'Ensuring data accuracy and correctness',
      dataQualityStatus: { value: '+3.8%', trend: 'up' },
      globalDataQuality: 94.2,
      anomaliesTreated: 52,
      justifiedAnomalies: 18,
      unjustifiedAnomalies: { before: 34, after: 20 },
      quarterlyData: [92, 78, 65, 55]
    },
    {
      id: 3,
      title: 'Control 3',
      subtitle: 'Maintaining data consistency standards',
      dataQualityStatus: { value: '-1.2%', trend: 'down' },
      globalDataQuality: 92.8,
      anomaliesTreated: 38,
      justifiedAnomalies: 8,
      unjustifiedAnomalies: { before: 30, after: 22 },
      quarterlyData: [78, 65, 55, 45]
    },
    {
      id: 4,
      title: 'Control 4',
      subtitle: 'Tracking data timeliness and freshness',
      dataQualityStatus: { value: '+7.1%', trend: 'up' },
      globalDataQuality: 98.1,
      anomaliesTreated: 29,
      justifiedAnomalies: 15,
      unjustifiedAnomalies: { before: 14, after: 8 },
      quarterlyData: [65, 52, 45, 38]
    },
    {
      id: 5,
      title: 'Control 5',
      subtitle: 'Validating data format and structure',
      dataQualityStatus: { value: '+2.9%', trend: 'up' },
      globalDataQuality: 95.7,
      anomaliesTreated: 41,
      justifiedAnomalies: 22,
      unjustifiedAnomalies: { before: 19, after: 12 },
      quarterlyData: [75, 62, 52, 46]
    },
    {
      id: 6,
      title: 'Control 6',
      subtitle: 'Detecting and managing duplicate records',
      dataQualityStatus: { value: '+4.3%', trend: 'up' },
      globalDataQuality: 99.3,
      anomaliesTreated: 33,
      justifiedAnomalies: 11,
      unjustifiedAnomalies: { before: 22, after: 16 },
      quarterlyData: [55, 53, 45, 48]
    }
  ];

  const controlDefinitions = [
    {
      id: 1,
      title: 'Data Completeness Control',
      description: 'Monitors the percentage of complete records across all mandatory fields. Identifies missing values, null entries, and incomplete data sets to ensure comprehensive data coverage.'
    },
    {
      id: 2,
      title: 'Data Accuracy Control',
      description: 'Validates the correctness and precision of data values against established business rules and reference standards. Detects incorrect formats, invalid ranges, and erroneous entries.'
    },
    {
      id: 3,
      title: 'Data Consistency Control',
      description: 'Ensures uniformity of data representation across different systems and databases. Checks for conflicting information and maintains standardized formats throughout the organization.'
    },
    {
      id: 4,
      title: 'Data Timeliness Control',
      description: 'Tracks the freshness and currency of data by monitoring update frequencies and identifying outdated information. Ensures data meets temporal requirements for business operations.'
    },
    {
      id: 5,
      title: 'Data Validity Control',
      description: 'Verifies that data conforms to predefined formats, patterns, and business constraints. Validates data types, lengths, and adherence to established data governance policies.'
    },
    {
      id: 6,
      title: 'Data Uniqueness Control',
      description: 'Identifies and manages duplicate records within datasets. Implements deduplication strategies and maintains referential integrity across related data entities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <DashboardIcon />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Data Quality Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Last updated: 2 minutes ago</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
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

        {/* Data Quality Metrics Table */}
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
                {tableData.map((row, index) => (
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

        {/* Global Anomalies Stacked Bar Chart */}
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
              {globalAnomaliesData.map((quarter, index) => (
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

        {/* 6 Controls Grid (2x3) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {controlsData.map((control) => (
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

        {/* Control Definitions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Control Definitions</h2>
            <p className="text-sm text-gray-600 mt-1">Understanding each data quality control and its purpose</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {controlDefinitions.map((definition) => (
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
      </main>
    </div>
  );
}

export default App;