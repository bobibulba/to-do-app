import React from 'react';
import { FilterType, SortType } from '../types/todo';

interface TodoFiltersProps {
  filter: FilterType;
  sort: SortType;
  onFilterChange: (filter: FilterType) => void;
  onSortChange: (sort: SortType) => void;
  stats: {
    total: number;
    completed: number;
    active: number;
  };
  onClearCompleted: () => void;
}

export const TodoFilters: React.FC<TodoFiltersProps> = ({
  filter,
  sort,
  onFilterChange,
  onSortChange,
  stats,
  onClearCompleted
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  const sorts: { key: SortType; label: string }[] = [
    { key: 'date', label: 'Date' },
    { key: 'priority', label: 'Priority' },
    { key: 'alphabetical', label: 'A-Z' }
  ];

  return (
    <div className="todo-card mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <div className="flex space-x-1">
              {filters.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => onFilterChange(key)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    filter === key
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Sort:</span>
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value as SortType)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {sorts.map(({ key, label }) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            <span className="font-medium">{stats.active}</span> active, 
            <span className="font-medium ml-1">{stats.completed}</span> completed
          </div>
          {stats.completed > 0 && (
            <button
              onClick={onClearCompleted}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
