import { createContext, useContext, useState } from 'react';

const fakeData = [
  {
    text: 'team meeting',
    category: 'work',
    isCompleted: true,
    createdAt: '2024-09-15T06:24:28.290Z',
    id: '23e2cec9-0bc2-4d4a-b684-7349c652bbc2',
  },
  {
    text: 'learning react',
    category: 'study',
    isCompleted: false,
    createdAt: '2024-09-15T06:24:50.091Z',
    id: '01d06f5f-5b73-4e82-8004-099d1056cf90',
  },
  {
    text: 'running 3km',
    category: 'health',
    isCompleted: false,
    createdAt: '2024-09-16T06:25:00.036Z',
    id: 'c989ffe7-e8b3-47d7-86d4-93023278128e',
  },
  {
    text: 'investing stock',
    category: 'finance',
    isCompleted: false,
    createdAt: '2024-09-16T06:25:13.983Z',
    id: '78dc5c92-c29e-401b-8d1f-2d002e2eeb36',
  },
  {
    text: 'club',
    category: 'social',
    isCompleted: true,
    createdAt: '2024-09-16T06:25:47.188Z',
    id: 'e0796af0-c8e0-4d9c-afcf-016281ab8071',
  },
  {
    text: 'buying new shoes',
    category: 'shopping',
    isCompleted: false,
    createdAt: '2024-09-16T06:25:56.109Z',
    id: '43d89811-dd62-4de5-8929-107230d88350',
  },
  {
    text: 'reading book',
    category: 'personal',
    isCompleted: true,
    createdAt: '2024-09-17T07:00:08.698Z',
    id: '8f841605-c8c6-45ff-9714-4eba5116b797',
  },
  {
    text: 'solving project bug',
    category: 'work',
    isCompleted: false,
    createdAt: '2024-09-18T07:00:34.515Z',
    id: '45ca85bc-9e95-4e18-939f-34af36feaec5',
  },
  {
    text: 'creating side project',
    category: 'study',
    isCompleted: false,
    createdAt: '2024-09-18T07:00:53.442Z',
    id: '7c30b9dd-12d6-4497-a224-4d94fd76ed65',
  },
  {
    text: 'gym exercising',
    category: 'health',
    isCompleted: true,
    createdAt: '2024-09-18T07:01:06.161Z',
    id: '172cb82c-f55f-4e06-84a6-38b527c84953',
  },
  {
    text: 'trading',
    category: 'finance',
    isCompleted: true,
    createdAt: '2024-09-18T07:01:16.295Z',
    id: '2cce081b-8654-4dbd-8d97-debad815cbaa',
  },
  {
    text: 'ktv',
    category: 'social',
    isCompleted: false,
    createdAt: '2024-09-18T07:01:21.872Z',
    id: 'a331d33b-6e11-4623-b88a-6fad305b0a03',
  },
  {
    text: 'buying t-shirt',
    category: 'shopping',
    isCompleted: true,
    createdAt: '2024-09-18T07:01:38.427Z',
    id: '7ed6c7aa-b9a2-44ce-a83f-bade2171f205',
  },
  {
    text: 'company interview',
    category: 'work',
    isCompleted: false,
    createdAt: '2024-09-19T08:36:00.465Z',
    id: 'b6cfa085-8b12-4372-87ca-02c241b9a1d8',
  },
  {
    text: 'playing tennis',
    category: 'health',
    isCompleted: false,
    createdAt: '2024-09-19T08:36:10.600Z',
    id: '39f37f25-cf72-4e3f-8430-f6a5040fd727',
  },
  {
    text: 'learning Vue',
    category: 'study',
    isCompleted: true,
    createdAt: '2024-09-19T08:36:23.181Z',
    id: '0442ac15-37c5-497f-8acf-3a757d28de52',
  },
  {
    text: 'cleaning kitchen',
    category: 'personal',
    isCompleted: false,
    createdAt: '2024-09-19T08:36:38.937Z',
    id: '3dbd1c20-2309-4744-aa91-1a843b7a6c6e',
  },
];

const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
});

function TasksProvider({ children }) {
  // const [tasks, setTasks] = useState(() => {
  //   return JSON.parse(localStorage.getItem('tasks')) || [];
  // });

  const [tasks, setTasks] = useState(fakeData);

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
