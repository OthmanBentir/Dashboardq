import { useState, useEffect } from 'react';
import { fetchControlsData, ControlData } from '../../../services/controlsService';

export const useControls = () => {
  const [data, setData] = useState<ControlData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const controlsData = await fetchControlsData();
        setData(controlsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load controls data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};