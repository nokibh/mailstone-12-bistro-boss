import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto py-3">
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  </div>
);
