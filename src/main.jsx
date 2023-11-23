import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const theme = createTheme({
  colors: {
    "dark-blue": [
      "#8992B0",
      "#8992B0",
      "#8992B0",
      "#8992B0",
      "#8992B0",
      "#8992B0",
      "#8992B0",
      "#8992B0",
      "#8992B0",
      "#8992B0",
    ],
    "minecraft-green": [
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
      "#6EE7B7",
    ],
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>,
);
