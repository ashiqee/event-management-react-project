import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import Events from "../components/pages/Events/Events";

import AboutUs from "../components/pages/AboutUs/AboutUs";
import Speakers from "../components/pages/Events/Speakers";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/pages/ErrorPage";
import EventDetails from "../components/pages/Events/EventDetails/EventDetails";
import ScheduleDetails from "../components/pages/Events/ScheduleCard/ScheduleDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/event/:id",
        element: (
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/events-data.json"),
      },
      {
        path: "/Speakers",
        element: (
          <PrivateRoute>
            <Speakers />
          </PrivateRoute>
        ),
        loader: () => fetch("/events-data.json"),
      },

      {
        path: "/schedule/:id",
        element: (
          <PrivateRoute>
            <ScheduleDetails />
          </PrivateRoute>
        ),
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
