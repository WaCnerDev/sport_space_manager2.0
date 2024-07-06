import React, { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import FormSportSpace from "./Pages/FormSportSpace";
import SpaceManager from "./Pages/SpaceManager";
import { toast } from "react-toastify";



function App() {
  const [registros, setRegistros] = useState([]);


  const addRegistro = (newRegistro) => {
    setRegistros((prevRegistros) => [...prevRegistros, newRegistro]);
    toast.success("Se ha registrado el espacio con éxito", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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