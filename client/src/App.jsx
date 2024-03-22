import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import AdminPanel from "./pages/Admin";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/event",
      element: <Event />,
    },
    {
      path: "/admin",
      element: <AdminPanel />,
    },
  ]);
  return <>{routes}</>;
};

export default App;
