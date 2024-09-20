import { createContext, useContext, useState } from 'react';

const FilterContext = createContext({
  currentFilter: '',
  setCurrentFilter: () => {},
});

function FilterProvider({ children }) {
  const [currentFilter, setCurrentFilter] = useState('');

  return (
    <FilterContext.Provider
      value={{
        currentFilter,
        setCurrentFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);

  if (!context) throw new Error('FilterContext was used outside of FilterProvider');
  return context;
}

export { useFilter, FilterProvider };
