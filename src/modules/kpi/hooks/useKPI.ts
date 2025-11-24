import { useState, useEffect } from 'react';
import { fetchKPIData, KPIData } from '../../../services/kpiService';

export const useKPI = () => {
  const [data, setData] = useState<KPIData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const kpiData = await fetchKPIData();
        setData(kpiData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load KPI data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};