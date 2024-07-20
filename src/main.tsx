import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Navbar from './components/navbar.tsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <h1>Login</h1> },
  { path: "/pricing", element: <h1>Pricing</h1> },
  { path: "/contact-us", element: <h1>Contact US</h1> },
  { path: "*", element: <h1>Not Found</h1> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
