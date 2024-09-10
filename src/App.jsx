import { useState } from 'react';

import Header from './ui/Header';
import Input from './ui/Input';
import List from './ui/List';
import Main from './ui/Main';

function App() {
  const [tasks, setTasks] = useState(() => {
    return localStorage.getItem('tasks') || [];
  });

  return (
    <Main>
      <Header />
      <Input setTasks={setTasks} />
      <List tasks={tasks} />
    </Main>
  );
}

export default App;
