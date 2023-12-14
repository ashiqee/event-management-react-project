import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";

import AboutUs from "../components/pages/AboutUs/AboutUs";
import Speakers from "../components/pages/Events/Speakers";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/pages/ErrorPage";
import EventDetails from "../components/pages/Events/EventDetails/EventDetails";

import Payment from "../components/pages/payment/Payment";
import AllEvents from "./../components/pages/Events/AllEvents";
import Report from "../components/pages/payment/PaymentsReport/Report";

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
        element: (
          <PrivateRoute>
            <AllEvents />
          </PrivateRoute>
        ),
        loader: () => fetch("/events-data.json"),
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
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: () => fetch("/events-data.json"),
      },

      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: '/paymentsReport',
        element: <PrivateRoute>
          <Report />
        </PrivateRoute>
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
