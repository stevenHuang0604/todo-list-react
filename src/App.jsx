import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Lists from './pages/Lists';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='/lists' />} />
          <Route path='/lists' element={<Lists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
