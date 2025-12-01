export interface ChartAnomalyData {
  bu: string;
  quarter: string;
  control: string;
  anomalyCount: number;
}

export const fetchChartAnomaliesData = async (): Promise<ChartAnomalyData[]> => {
  // TODO: Replace with real API call
  // const response = await fetch('/api/chart-anomalies');
  // return response.json();
  
  // Mock data with comprehensive coverage
  const mockData: ChartAnomalyData[] = [];
  const bus = ['MARK', 'GLBA', 'Other BU'];
  const quarters = ['This Quarter', 'Last Quarter', 'Previous Quarter'];
  const controls = ['Control C', 'Control E', 'Control F', 'Control J', 'Control H', 'Control T'];

  // Generate realistic mock data
  bus.forEach(bu => {
    quarters.forEach(quarter => {
      controls.forEach(control => {
        const baseCount = Math.floor(Math.random() * 50) + 10;
        const buMultiplier = bu === 'MARK' ? 1.2 : bu === 'GLBA' ? 0.8 : 1.0;
        const quarterMultiplier = quarter === 'This Quarter' ? 0.7 : quarter === 'Last Quarter' ? 1.0 : 1.3;
        
        mockData.push({
          bu,
          quarter,
          control,
          anomalyCount: Math.floor(baseCount * buMultiplier * quarterMultiplier)
        });
      });
    });
  });

  return mockData;
};