import Header from './Header';
import Input from './Input';
import List from './List';

import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  return (
    <>
      <Header />
      <Input setTasks={setTasks} />
      <List tasks={tasks} />
    </>
  );
}

export default App;
