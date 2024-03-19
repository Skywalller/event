import React from "react";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <>Home</>,
    },
  ]);
  return (
    <>
       {routes}
    </>
  );
};

export default App;
