export interface GlobalAnomaliesData {
  quarter: string;
  total: number;
  controls: {
    completeness: number;
    accuracy: number;
    consistency: number;
    timeliness: number;
    validity: number;
    uniqueness: number;
  };
}

export const fetchGlobalAnomaliesData = async (): Promise<GlobalAnomaliesData[]> => {
  // TODO: Replace with real API call
  // const response = await fetch('/api/global-anomalies');
  // return response.json();
  
  // Mock data
  return [
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
};