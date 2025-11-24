import { useState, useEffect } from 'react';
import { fetchGlobalAnomaliesData, GlobalAnomaliesData } from '../../../services/globalAnomaliesService';

export const useGlobalAnomalies = () => {
  const [data, setData] = useState<GlobalAnomaliesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const anomaliesData = await fetchGlobalAnomaliesData();
        setData(anomaliesData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load global anomalies data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};