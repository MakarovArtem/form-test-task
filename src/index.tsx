import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import Create from "pages/Create/Create";
import Error from "pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/create",
    element: <Create />,
    errorElement: <Error />
  },
  {
    path: "*",
    element: <Error />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
