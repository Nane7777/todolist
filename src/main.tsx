import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TaskContextProvider } from './contexts/TasksContext.tsx';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </BrowserRouter>
  </StrictMode>
);
