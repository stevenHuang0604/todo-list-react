import { createContext, useState } from 'react';

import { fakeData } from '../data/fakeData';

const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
});

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || fakeData;
  });

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };
