import React from "react";
import ReactDOM from "react-dom/client";
import Root from './routes/Root.jsx'
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AppContainer from "./components/AppContainer.jsx";
import ErrorPage from "./error-page.jsx";
import TrippyCarousel from "./components/ProjectCarousel.jsx";
import SkillsContainer from "./components/SkillsContainer.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <AppContainer/>
            },
            {
                path: "/projects",
                element: <TrippyCarousel/>
            },
            {
                path: "/skills",
                element: <SkillsContainer/>
            }
        ]

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
