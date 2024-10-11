import { useContext } from 'react';

import { FilterContext } from '../context/FilterContext';

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) throw new Error('FilterContext was used outside of FilterProvider');
  return context;
}
