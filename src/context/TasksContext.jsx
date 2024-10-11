import { createContext, useContext, useState } from 'react';
import { fakeData } from '../data/fakeData';

const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
});

function TasksProvider({ children }) {
  // const [tasks, setTasks] = useState(() => {
  //   return JSON.parse(localStorage.getItem('tasks')) || [];
  // });

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

function useTasks() {
  const context = useContext(TasksContext);

  if (!context) throw new Error('TasksContext was used outside of TasksProvider');
  return context;
}

export { useTasks, TasksProvider };
