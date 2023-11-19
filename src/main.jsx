import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
]);
const theme = createTheme({

});
ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>,
);
