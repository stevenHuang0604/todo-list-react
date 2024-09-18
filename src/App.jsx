import { useState } from 'react';

import Main from './ui/Main';
import Header from './ui/Header';
import Input from './ui/Input';
import List from './ui/List';
import Status from './ui/status';
import { useTasks } from './context/TasksContext';

function App() {
  const { tasks } = useTasks();
  const taskLength = tasks?.length;

  return (
    <Main>
      <Header />
      <Input />
      <List />
      {taskLength ? <Status /> : ''}
    </Main>
  );
}

export default App;
