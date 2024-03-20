import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";

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
  ]);
  return <>{routes}</>;
};

export default App;
