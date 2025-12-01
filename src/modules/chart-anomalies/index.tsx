import { useChartAnomalies } from './hooks/useChartAnomalies';
import FilterPanel from './components/FilterPanel';
import AnomalyChart from './components/AnomalyChart';

const ChartAnomalies: React.FC = () => {
  const { data, loading, error, filters, updateFilters } = useChartAnomalies();

  if (loading) return <div className="mb-8">Loading chart anomalies data...</div>;
  if (error) return <div className="mb-8 text-red-600">Error: {error}</div>;

  return (
    <div className="mb-8">
      <FilterPanel filters={filters} onFiltersChange={updateFilters} />
      <AnomalyChart data={data} />
    </div>
  );
};

export default ChartAnomalies;