import React from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Newspaper,
  Lightbulb,
  Activity,
  Database,
  Shield,
  Target
} from 'lucide-react';

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
    { metric: "Completeness", score: "94%", status: "Good" },
    { metric: "Accuracy", score: "89%", status: "Warning" },
    { metric: "Consistency", score: "96%", status: "Good" }
  ],
  recommendations: [
    "Implement automated data cleansing for email formats",
    "Add validation rules for phone number patterns",
    "Review data sources with high error rates"
  ]
};

const StatusIndicator = ({ isPositive, value }: { isPositive: boolean; value: number }) => (
  <div className={`flex items-center gap-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
    {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
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

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Card 1: Title */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-blue-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Data Quality Dashboard</h1>
          </div>
          <p className="text-gray-600 text-lg">Monitor and improve your data quality metrics in real-time</p>
        </div>

        {/* Cards 2-8 in Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card 2: Data Quality Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-blue-600" size={24} />
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
              <Target className="text-green-600" size={24} />
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
              <AlertTriangle className="text-amber-600" size={24} />
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
              <Newspaper className="text-purple-600" size={24} />
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
              <Database className="text-indigo-600" size={24} />
              <h2 className="text-lg font-semibold text-gray-900">Quality Metrics</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-1 font-medium text-gray-900">Metric</th>
                    <th className="text-left py-2 px-1 font-medium text-gray-900">Score</th>
                    <th className="text-left py-2 px-1 font-medium text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.tableData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-1 text-gray-900">{row.metric}</td>
                      <td className="py-3 px-1 font-semibold text-gray-900">{row.score}</td>
                      <td className="py-3 px-1">
                        <div className="flex items-center gap-1">
                          {row.status === 'Good' ? (
                            <CheckCircle className="text-green-600" size={16} />
                          ) : (
                            <XCircle className="text-amber-600" size={16} />
                          )}
                          <span className={`text-sm ${row.status === 'Good' ? 'text-green-600' : 'text-amber-600'}`}>
                            {row.status}
                          </span>
                        </div>
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
              <BarChart3 className="text-blue-600" size={24} />
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
              <Lightbulb className="text-yellow-600" size={24} />
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
      </div>
    </div>
  );
}

export default App;