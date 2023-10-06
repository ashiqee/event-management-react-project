import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import Events from "../components/pages/Events/Events";
import Speaker from "../components/pages/Events/Speaker";
import AboutUs from "../components/pages/AboutUs/AboutUs";

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
        path: "/Speaker",
        element: <Speaker />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
