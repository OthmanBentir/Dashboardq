import React from 'react';

// Mock data for the dashboard
const mockData = {
  dataQualityStatus: {
    improvement: 12.5,
    isPositive: true
  },
  globalDataQuality: 87.3,
  anomalies: {
    beforeRules: 245,
    afterRules: 89
  },
  news: [
    "New data validation rules implemented for customer data",
    "Monthly data quality report available",
    "Integration with new data source completed"
  ],
  tableData: [
    { metric: "Completeness", score: 94, value: 1250 },
    { metric: "Accuracy", score: 89, value: 2340 },
    { metric: "Consistency", score: 96, value: 890 }
  ],
  recommendations: [
    "Implement automated data cleansing for email formats",
    "Add validation rules for phone number patterns",
    "Review data sources with high error rates"
  ],
  controls: Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    dataQualityStatus: {
      improvement: Math.floor(Math.random() * 20) - 10,
      isPositive: Math.random() > 0.5
    },
    globalDataQuality: Math.floor(Math.random() * 30) + 70,
    anomaliesTreated: Math.floor(Math.random() * 50) + 20,
    justifiedAnomalies: Math.floor(Math.random() * 30) + 10,
    unjustifiedAnomalies: {
      afterRules: Math.floor(Math.random() * 20) + 5,
      beforeRules: Math.floor(Math.random() * 40) + 20
    },
    quarterlyData: [
      { quarter: 'Q1', value: Math.floor(Math.random() * 30) + 70 },
      { quarter: 'Q2', value: Math.floor(Math.random() * 30) + 70 },
      { quarter: 'Q3', value: Math.floor(Math.random() * 30) + 70 }
    ]
  }))
};

const controlDefinitions = [
  {
    title: "Data Completeness",
    definition: "Ensures all required data fields are populated and no critical information is missing from records."
  },
  {
    title: "Data Accuracy",
    definition: "Validates that data values are correct, precise, and reflect real-world entities accurately."
  },
  {
    title: "Data Consistency",
    definition: "Maintains uniform data formats, standards, and values across different systems and databases."
  },
  {
    title: "Data Timeliness",
    definition: "Ensures data is current, up-to-date, and available when needed for business operations."
  },
  {
    title: "Data Validity",
    definition: "Verifies that data conforms to defined business rules, constraints, and acceptable value ranges."
  },
  {
    title: "Data Uniqueness",
    definition: "Prevents duplicate records and ensures each data entity is represented only once in the system."
  }
];

// CSS-based icon components
const TrendingUpIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  </div>
);

const TrendingDownIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
      <polyline points="17 18 23 18 23 12"></polyline>
    </svg>
  </div>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  </div>
);

const ActivityIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  </div>
);

const TargetIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  </div>
);

const AlertTriangleIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  </div>
);

const NewspaperIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
      <path d="M18 14h-8"></path>
      <path d="M15 18h-5"></path>
      <path d="M10 6h8v4h-8V6Z"></path>
    </svg>
  </div>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  </div>
);

const BarChartIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  </div>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
      <path d="M9 18h6"></path>
      <path d="M10 22h4"></path>
    </svg>
  </div>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  </div>
);

const XCircleIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  </div>
);

const StatusIndicator = ({ isPositive, value }: { isPositive: boolean; value: number }) => (
  <div className={`flex items-center gap-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
    {isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
    <span className="font-semibold">{isPositive ? '+' : ''}{value}%</span>
  </div>
);

const SimpleBarChart = () => (
  <div className="space-y-3">
    <div className="flex justify-between items-end h-32 gap-2">
      <div className="flex flex-col items-center gap-1">
        <div className="bg-blue-500 rounded-t w-8" style={{ height: '60%' }}></div>
        <span className="text-xs text-gray-600">Jan</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="bg-blue-500 rounded-t w-8" style={{ height: '80%' }}></div>
        <span className="text-xs text-gray-600">Feb</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="bg-blue-500 rounded-t w-8" style={{ height: '45%' }}></div>
        <span className="text-xs text-gray-600">Mar</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="bg-blue-500 rounded-t w-8" style={{ height: '75%' }}></div>
        <span className="text-xs text-gray-600">Apr</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="bg-blue-500 rounded-t w-8" style={{ height: '90%' }}></div>
        <span className="text-xs text-gray-600">May</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="bg-blue-500 rounded-t w-8" style={{ height: '85%' }}></div>
        <span className="text-xs text-gray-600">Jun</span>
      </div>
    </div>
  </div>
);

const QuarterlyChart = ({ data }: { data: Array<{ quarter: string; value: number }> }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-end h-20 gap-2">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
          <div 
            className="bg-indigo-500 rounded-t w-6" 
            style={{ height: `${(item.value / 100) * 100}%` }}
          ></div>
          <span className="text-xs text-gray-600">{item.quarter}</span>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Card 1: Title */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldIcon className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Data Quality Dashboard</h1>
          </div>
          <p className="text-gray-600 text-lg">Monitor and improve your data quality metrics in real-time</p>
        </div>

        {/* Cards 2-8 in Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card 2: Data Quality Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <ActivityIcon className="text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Quality Status</h2>
            </div>
            <div className="space-y-3">
              <StatusIndicator 
                isPositive={mockData.dataQualityStatus.isPositive} 
                value={mockData.dataQualityStatus.improvement} 
              />
              <div className="text-sm text-gray-600">
                {mockData.dataQualityStatus.isPositive ? 'Quality improvement this month' : 'Quality declined this month'}
              </div>
            </div>
          </div>

          {/* Card 3: Global Data Quality */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <TargetIcon className="text-green-600" />
              <h2 className="text-lg font-semibold text-gray-900">Global Quality</h2>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {mockData.globalDataQuality}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${mockData.globalDataQuality}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Card 4: Anomalies to Treat */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangleIcon className="text-amber-600" />
              <h2 className="text-lg font-semibold text-gray-900">Anomalies</h2>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">
                  {mockData.anomalies.beforeRules}
                </div>
                <div className="text-sm text-gray-600">Before Rules</div>
              </div>
              <div className="border-t border-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {mockData.anomalies.afterRules}
                </div>
                <div className="text-sm text-gray-600">After Rules</div>
              </div>
            </div>
          </div>

          {/* Card 5: Data Quality News */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <NewspaperIcon className="text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Latest News</h2>
            </div>
            <div className="space-y-3">
              {mockData.news.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 6: Data Quality Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <DatabaseIcon className="text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-900">Quality Metrics</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-1 font-medium text-gray-900">Metric</th>
                    <th className="text-left py-2 px-1 font-medium text-gray-900">Score</th>
                    <th className="text-left py-2 px-1 font-medium text-gray-900">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.tableData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-1 text-gray-900">{row.metric}</td>
                      <td className="py-3 px-1 font-semibold text-gray-900">{row.score}%</td>
                      <td className="py-3 px-1">
                        <span className="font-semibold text-gray-900">{row.value.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 7: Graph */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <BarChartIcon className="text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Quality Trends</h2>
            </div>
            <SimpleBarChart />
            <div className="text-center mt-3">
              <p className="text-sm text-gray-600">Data quality score over time</p>
            </div>
          </div>

          {/* Card 8: Recommendations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <LightbulbIcon className="text-yellow-600" />
              <h2 className="text-lg font-semibold text-gray-900">Recommendations</h2>
            </div>
            <div className="space-y-3">
              {mockData.recommendations.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Control Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockData.controls.map((control) => (
            <div key={control.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Control {control.id}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Data Quality Status */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ActivityIcon className="text-blue-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Data Quality Status</h3>
                  </div>
                  <StatusIndicator 
                    isPositive={control.dataQualityStatus.isPositive} 
                    value={Math.abs(control.dataQualityStatus.improvement)} 
                  />
                </div>

                {/* Global Data Quality */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TargetIcon className="text-green-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Global Data Quality</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {control.globalDataQuality}%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full transition-all duration-500" 
                        style={{ width: `${control.globalDataQuality}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Anomalies Treated */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircleIcon className="text-green-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Anomalies Treated</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {control.anomaliesTreated}
                    </div>
                    <div className="text-xs text-gray-600">Since last quarter</div>
                  </div>
                </div>

                {/* Justified Anomalies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircleIcon className="text-blue-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Justified Anomalies</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {control.justifiedAnomalies}
                    </div>
                  </div>
                </div>

                {/* Unjustified Anomalies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircleIcon className="text-red-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Unjustified Anomalies</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">
                        {control.unjustifiedAnomalies.afterRules}
                      </div>
                      <div className="text-xs text-gray-600">After Rules</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-red-600">
                        {control.unjustifiedAnomalies.beforeRules}
                      </div>
                      <div className="text-xs text-gray-600">Before Rules</div>
                    </div>
                  </div>
                </div>

                {/* Quarterly Evolution Graph */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChartIcon className="text-indigo-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Last 3 Quarters</h3>
                  </div>
                  <QuarterlyChart data={control.quarterlyData} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Control Definitions Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Control Definitions</h2>
            <p className="text-gray-600 text-lg">Understanding each data quality control and its purpose</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {controlDefinitions.map((control, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{control.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{control.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;