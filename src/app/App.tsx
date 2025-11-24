import React from 'react';
import Header from '../components/Header';
import KPICards from '../modules/kpi/index';
import DataQualityMetrics from '../modules/data-quality-metrics/index';
import GlobalAnomalies from '../modules/global-anomalies/index';
import Controls from '../modules/controls/index';
import ControlDefinitions from '../modules/control-definitions/index';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <KPICards />
        <DataQualityMetrics />
        <GlobalAnomalies />
        <Controls />
        <ControlDefinitions />
      </main>
    </div>
  );
}

export default App;