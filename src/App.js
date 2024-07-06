import React, { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import FormSportSpace from "./Pages/FormSportSpace";
import SpaceManager from "./Pages/SpaceManager";



function App() {
  const [registros, setRegistros] = useState([]);


  const addRegistro = (newRegistro) => {
    setRegistros((prevRegistros) => [...prevRegistros, newRegistro]);
  };


  const router = createHashRouter([
    {
      path: "/SportSpace",
      element: <FormSportSpace setRegistros={addRegistro} />,
    },
    {
      path: "/",
      element: <SpaceManager registros={registros} />,
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App;