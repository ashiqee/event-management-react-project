import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import Events from "../components/pages/Events/Events";

import AboutUs from "../components/pages/AboutUs/AboutUs";
import Speakers from "../components/pages/Events/Speakers";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/events-data.json"),
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/Speakers",
        element: <Speakers />,
        loader: () => fetch("/events-data.json"),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
