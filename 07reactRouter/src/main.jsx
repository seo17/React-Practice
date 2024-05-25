import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  About,
  Contact,
  Github,
  Home,
  User,
  githubInfoLoader,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        loader: githubInfoLoader,
        path: "github",
        element: <Github />,
      },
      {
        path: "user/",
        element: <User />,
        children: [
          {
            path: ":userid",
            element: <User />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
