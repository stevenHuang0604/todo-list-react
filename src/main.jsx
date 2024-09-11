import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import { TasksProvider } from './context/TasksContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <DarkModeProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </DarkModeProvider>
  </StrictMode>
);
