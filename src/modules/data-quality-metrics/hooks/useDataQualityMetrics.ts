import { useState, useEffect } from 'react';
import { fetchDataQualityMetrics, DataQualityMetric } from '../../../services/dataQualityMetricsService';

export const useDataQualityMetrics = () => {
  const [data, setData] = useState<DataQualityMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const metricsData = await fetchDataQualityMetrics();
        setData(metricsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data quality metrics');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};