import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DarkModeProvider } from './context/DarkModeContext.jsx';
import { TasksProvider } from './context/TasksContext.jsx';
import { FilterProvider } from './context/FilterContext.jsx';
import AppLayout from './ui/AppLayout';
import Lists from './pages/Lists';

function App() {
  return (
    <DarkModeProvider>
      <FilterProvider>
        <TasksProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to='/lists' />} />
                <Route path='/lists' element={<Lists />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TasksProvider>
      </FilterProvider>
    </DarkModeProvider>
  );
}

export default App;
