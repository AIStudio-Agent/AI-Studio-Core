import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PublishModel from './pages/publish';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Layout from './components/Layout';
import App from './App';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import RequireAuth from './components/RequireAuth';
import BrowseModels from './pages/BrowseModels';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="browse-models" element={<BrowseModels />} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/publish" element={<PublishModel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
