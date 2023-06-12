import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormStepOne from './pages/formStepOne/FormStepOne';
import FormStepTwo from './pages/formStepTwo/FormStepTwo';
import FormStepThree from './pages/formStepThree/FormStepThree';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/form-step-one",
    element: <FormStepOne />
  },
  {
    path: "/form-step-two",
    element: <FormStepTwo />
  },
  {
    path: "/form-step-three",
    element: <FormStepThree />
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
