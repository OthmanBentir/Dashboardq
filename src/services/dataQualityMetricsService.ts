export interface DataQualityMetric {
  metric: string;
  value: string;
}

export const fetchDataQualityMetrics = async (): Promise<DataQualityMetric[]> => {
  // TODO: Replace with real API call
  // const response = await fetch('/api/data-quality-metrics');
  // return response.json();
  
  // Mock data
  return [
    { metric: 'Completeness', value: '96.5%' },
    { metric: 'Accuracy', value: '94.2%' },
    { metric: 'Consistency', value: '92.8%' },
    { metric: 'Timeliness', value: '98.1%' },
    { metric: 'Validity', value: '95.7%' },
    { metric: 'Uniqueness', value: '99.3%' },
  ];
};