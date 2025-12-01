import { useState, useEffect } from 'react';
import { fetchChartAnomaliesData, ChartAnomalyData } from '../../../services/chartAnomaliesService';

export interface FilterState {
  bus: string[];
  quarters: string[];
  controls: string[];
}

export const useChartAnomalies = () => {
  const [data, setData] = useState<ChartAnomalyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    bus: ['MARK', 'GLBA', 'Other BU'], // Default: all selected
    quarters: ['This Quarter', 'Last Quarter', 'Previous Quarter'], // Default: all selected
    controls: ['Control C', 'Control D', 'Control E', 'Control F', 'Control G', 'Control H'] // Default: first 6 selected
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const chartData = await fetchChartAnomaliesData();
        setData(chartData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load chart anomalies data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredData = data.filter(item => 
    filters.bus.includes(item.bu) &&
    filters.quarters.includes(item.quarter) &&
    filters.controls.includes(item.control)
  );

  const aggregatedData = filteredData.reduce((acc, item) => {
    const key = `${item.bu}-${item.quarter}`;
    if (!acc[key]) {
      acc[key] = {
        bu: item.bu,
        quarter: item.quarter,
        totalAnomalies: 0
      };
    }
    acc[key].totalAnomalies += item.anomalyCount;
    return acc;
  }, {} as Record<string, { bu: string; quarter: string; totalAnomalies: number }>);

  const chartData = Object.values(aggregatedData);

  return { 
    data: chartData, 
    rawData: data,
    loading, 
    error, 
    filters, 
    updateFilters 
  };
};