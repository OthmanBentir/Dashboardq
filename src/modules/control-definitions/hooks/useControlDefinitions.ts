import { useState, useEffect } from 'react';
import { fetchControlDefinitions, ControlDefinition } from '../../../services/controlDefinitionsService';

export const useControlDefinitions = () => {
  const [data, setData] = useState<ControlDefinition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const definitionsData = await fetchControlDefinitions();
        setData(definitionsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load control definitions');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};