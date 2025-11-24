export interface ControlDefinition {
  id: number;
  title: string;
  description: string;
}

export const fetchControlDefinitions = async (): Promise<ControlDefinition[]> => {
  // TODO: Replace with real API call
  // const response = await fetch('/api/control-definitions');
  // return response.json();
  
  // Mock data
  return [
    {
      id: 1,
      title: 'Data Completeness Control',
      description: 'Monitors the percentage of complete records across all mandatory fields. Identifies missing values, null entries, and incomplete data sets to ensure comprehensive data coverage.'
    },
    {
      id: 2,
      title: 'Data Accuracy Control',
      description: 'Validates the correctness and precision of data values against established business rules and reference standards. Detects incorrect formats, invalid ranges, and erroneous entries.'
    },
    {
      id: 3,
      title: 'Data Consistency Control',
      description: 'Ensures uniformity of data representation across different systems and databases. Checks for conflicting information and maintains standardized formats throughout the organization.'
    },
    {
      id: 4,
      title: 'Data Timeliness Control',
      description: 'Tracks the freshness and currency of data by monitoring update frequencies and identifying outdated information. Ensures data meets temporal requirements for business operations.'
    },
    {
      id: 5,
      title: 'Data Validity Control',
      description: 'Verifies that data conforms to predefined formats, patterns, and business constraints. Validates data types, lengths, and adherence to established data governance policies.'
    },
    {
      id: 6,
      title: 'Data Uniqueness Control',
      description: 'Identifies and manages duplicate records within datasets. Implements deduplication strategies and maintains referential integrity across related data entities.'
    }
  ];
};