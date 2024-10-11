import { useContext } from 'react';

import { TasksContext } from '../context/TasksContext';

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) throw new Error('TasksContext was used outside of TasksProvider');
  return context;
}
