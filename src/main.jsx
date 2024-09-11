import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>
);
