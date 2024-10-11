import { createContext, useState } from 'react';

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

export { FilterContext, FilterProvider };
