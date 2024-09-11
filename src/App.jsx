import { useState } from 'react';

import Main from './ui/Main';
import Header from './ui/Header';
import Input from './ui/Input';
import List from './ui/List';

function App() {
  const [tasks, setTasks] = useState(() => {
    return localStorage.getItem('tasks') || [];
  });

  return (
    <Main>
      <Header />
      <Input setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </Main>
  );
}

export default App;
