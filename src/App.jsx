import Main from './ui/Main';
import Header from './ui/Header';
import Input from './ui/Input';
import List from './ui/List';
import Status from './ui/status';
import { useTasks } from './context/TasksContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';

function App() {
  const { tasks } = useTasks();
  const taskLength = tasks?.length;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<List />} />
        </Route>
      </Routes>
      {/* <Main>
        <Header />
        <Input />
        <List />
        {taskLength ? <Status /> : ''}
      </Main> */}
    </BrowserRouter>
  );
}

export default App;
