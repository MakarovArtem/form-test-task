import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from './pages/Form/Form';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/create",
    element: <Form />,
    errorElement: <Error />
  },
  {
    path: "*",
    element: <Error />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
