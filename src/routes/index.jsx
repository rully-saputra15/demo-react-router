import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Login";
import Detail from "../views/Detail";
import BaseLayout from "../components/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) throw redirect("/login");
      return null;
    },
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":movieId",
            element: <Detail />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.getItem("access_token")) throw redirect("/");
      return null;
    },
    element: <Login />,
  },
]);

export default router;
