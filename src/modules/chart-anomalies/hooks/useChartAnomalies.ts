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
    controls: ['Control C', 'Control E', 'Control F', 'Control J', 'Control H', 'Control T'] // Default: all selected
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

  // Group data by quarter and BU, then by control
  const chartData = filters.quarters.map(quarter => {
    const quarterData = filteredData.filter(item => item.quarter === quarter);
    
    const buData = filters.bus.map(bu => {
      const buQuarterData = quarterData.filter(item => item.bu === bu);
      
      const controlBreakdown = filters.controls.reduce((acc, control) => {
        const controlData = buQuarterData.find(item => item.control === control);
        acc[control] = controlData ? controlData.anomalyCount : 0;
        return acc;
      }, {} as Record<string, number>);
      
      const total = Object.values(controlBreakdown).reduce((sum, count) => sum + count, 0);
      
      return {
        bu,
        total,
        controls: controlBreakdown
      };
    });
    
    return {
      quarter,
      bus: buData
    };
  });

  return { 
    data: chartData, 
    rawData: data,
    loading, 
    error, 
    filters, 
    updateFilters 
  };
};