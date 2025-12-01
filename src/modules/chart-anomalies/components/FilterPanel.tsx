interface FilterPanelProps {
  filters: {
    bus: string[];
    quarters: string[];
    controls: string[];
  };
  onFiltersChange: (filters: any) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange }) => {
  const busOptions = ['MARK', 'GLBA', 'Other BU'];
  const quarterOptions = ['This Quarter', 'Last Quarter', 'Previous Quarter'];
  const controlOptions = [
    'Control C', 'Control D', 'Control E', 'Control F', 'Control G', 'Control H',
    'Control I', 'Control J', 'Control K', 'Control L', 'Control M', 'Control N',
    'Control O', 'Control P', 'Control Q', 'Control R', 'Control S', 'Control T'
  ];

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    const currentValues = filters[filterType as keyof typeof filters];
    let newValues;
    
    if (checked) {
      newValues = [...currentValues, value];
    } else {
      newValues = currentValues.filter(item => item !== value);
    }
    
    onFiltersChange({ [filterType]: newValues });
  };

  const FilterSection = ({ title, options, filterType }: { title: string; options: string[]; filterType: string }) => (
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">{title}</h4>
      <div className="space-y-2">
        {options.map(option => (
          <label key={option} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters[filterType as keyof typeof filters].includes(option)}
              onChange={(e) => handleFilterChange(filterType, option, e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FilterSection title="Business Units" options={busOptions} filterType="bus" />
        <FilterSection title="Quarters" options={quarterOptions} filterType="quarters" />
        <FilterSection title="Controls" options={controlOptions} filterType="controls" />
      </div>
      
      {/* Active Filters Summary */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            BUs: {filters.bus.length}
          </span>
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            Quarters: {filters.quarters.length}
          </span>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
            Controls: {filters.controls.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;