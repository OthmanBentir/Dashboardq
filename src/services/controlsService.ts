export interface ControlData {
  id: number;
  title: string;
  subtitle: string;
  dataQualityStatus: { value: string; trend: 'up' | 'down' };
  globalDataQuality: number;
  anomaliesTreated: number;
  justifiedAnomalies: number;
  unjustifiedAnomalies: { before: number; after: number };
  quarterlyData: number[];
}

export const fetchControlsData = async (): Promise<ControlData[]> => {
  // TODO: Replace with real API call
  // const response = await fetch('/api/controls');
  // return response.json();
  
  // Mock data
  return [
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
};