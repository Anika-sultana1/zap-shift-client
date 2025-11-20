import { createBrowserRouter } from "react-router";

import Home from "./Pages/Home/Home";
import Coverage from "./Pages/Coverage/Coverage";
import RootLayout from "./Layout/RootLayout";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/bannerDocs.json"),
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/ServiceCenter.json"),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",   // ✔️ relative child route
        Component: Login,
      },
      {
        path: "register", // ✔️ relative child route
        Component: Register,
      },
    ],
  },
]);
