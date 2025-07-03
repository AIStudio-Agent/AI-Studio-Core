import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { ThemeProvider, useTheme } from './context/ThemeContext';

import Layout from './components/Layout';
import App from './App';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PublishModel from './pages/publish';
import BrowseModels from './pages/BrowseModels'; // ✅ ADD THIS

import './index.css';

// 👇 Wrapper component to inject `className={theme}` from context
function ThemedApp() {
  const { theme } = useTheme();

  return (
    <div className={theme}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="get-started" element={<LoginPage />} />
            <Route path="publish" element={<PublishModel />} />
            <Route path="browse-models" element={<BrowseModels />} /> {/* ✅ ADD THIS */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  </StrictMode>
);
