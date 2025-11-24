export interface KPIData {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export const fetchKPIData = async (): Promise<KPIData[]> => {
  // TODO: Replace with real API call
  // const response = await fetch('/api/kpi');
  // return response.json();
  
  // Mock data
  return [
    { title: 'Total Records', value: '2.4M', change: '+12%', trend: 'up' },
    { title: 'Data Quality Score', value: '94.2%', change: '+2.1%', trend: 'up' },
    { title: 'Active Anomalies', value: '23', change: '-15%', trend: 'down' },
    { title: 'Processing Time', value: '1.2s', change: '-8%', trend: 'down' },
  ];
};