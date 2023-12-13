import React from "react";
import ReactDOM from "react-dom/client";
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={null}>

      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </Suspense>

  </React.StrictMode>
);
