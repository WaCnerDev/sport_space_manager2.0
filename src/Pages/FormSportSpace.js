import React, { useState } from "react";

import "../Styles/FormSportSpace.css"; //los estilos de la page

//estos son mis propios componentes
import FormHeader from "../Components/FormHeader";
import DataInput from "../Components/DataInput";
import ComboBox from "../Components/ComboBox";

//componente externo, son notificaciones emergentes
import { ToastContainer, toast } from "react-toastify";


export default function FormSportSpace({setRegistros}) {
  //controla el estado actual del formulario
  //sin este el usuario no podria observar los cambios en real time
  const [SpaceInf, setSpaceInf] = useState({
    nombre: "",
    tipo: "",
    ubicacion: "",
    capacidad: "",
    descripcion: "",
    fotografias: [],
  });



  // mantiene el estado de los errores en real time
  //sin este no se podrian renderizar el feedback en pantalla
  const [errors, setErrors] = useState({});

  //este handler basicamente es un controlador de los useState
  //en funcion del cambio realizado llama a las funciones que
  //actualizan el useState correspondiente
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      const fileList = Array.from(files);
      setSpaceInf({
        ...SpaceInf,
        [name]: fileList,
      });
    } else {
      setSpaceInf({
        ...SpaceInf,
        [name]: value,
      });
    }
  };

  //una funcion que evalua si el usuario ingreso o no los valores del form
  const validate = () => {
    const errores = {};
    if (!SpaceInf.nombre)
      errores.nombre = "Ingresa el nombre del espacio deportivo";
    if (!SpaceInf.tipo)
      errores.tipo = "Seleccione el tipo de su espacio deportivo";
    if (!SpaceInf.ubicacion)
      errores.ubicacion = "Indique la ubicación de su espacio deportivo";
    if (!SpaceInf.capacidad)
      errores.capacidad = "Indique la ubicación de su espacio deportivo";
    if (!SpaceInf.descripcion)
      errores.descripcion =
        "Describanos su espacio deportivo (Instalaciones disponibles, servicios, horario, Normas y Regulaciones...)";
    return errores;
  };

  //este handle se acciona con el sudmit del form
  //tambien hace uso de la funcion "validate" ya que
  // basicamente no puedes escribir los datos sin antes asegurarte de que
  //estan completos
  const handleSubmit = (event) => {
    event.preventDefault();
    const errores = validate();
    if (Object.keys(errores).length > 0) {
      setErrors(errores);
      //toast es un component creado por terceros, basicamente es un modal que
      //funciona como una notificacion emergente para el feedback al usuario
      //es ligero, bonito y facil de usar
      //en este caso se esta utilizando para notificar al usuario que faltan datos
      toast.error(" Faltan datos para el registro del espacio deportivo", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      //se  notificar al usuario que se registro con exito
      //el espacio deportivo y se graba la informacion en un array
      toast.success(" Se ha registrado el espacio con exito", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Agregar el nuevo espacio deportivo a la lista de registros
      setRegistros(SpaceInf)
      // Resetear el formulario después de guardarlo
      setSpaceInf({
        nombre: "",
        tipo: "",
        ubicacion: "",
        capacidad: "",
        descripcion: "",
        fotografias: [],
      });

      // Limpiar los errores
      setErrors({});
    }
  };

  return (
    <div className="container-fluid" id="mainContainer">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="row">
        <div className="col-6 mx-auto">
          <form onSubmit={handleSubmit} className="containerForm">
            <FormHeader
              title={"Registro de Espacios Deportivos"}
              description={
                "Bienvenido al formulario para agregar un nuevo espacio deportivo. Por favor, complete todos los campos con la información solicitada para garantizar que su espacio se registre correctamente en nuestro sistema. A continuación, se detallan los campos que debe completar:"
              }
            />
            <div className="row">
              <DataInput
                textLabel={"Nombre del espacio deportivo:"}
                orientation={"col"}
                nameid={"nombre"}
                placeholder={"Ingrese el nombre de su espacio deportivo"}
                messageError={errors.nombre}
                event={handleInputChange}
                value={SpaceInf.nombre}
              />
              <ComboBox
                orientation={"col"}
                messageError={errors.tipo}
                value={SpaceInf.tipo}
                nameid={"tipo"}
                event={handleInputChange}
              />
            </div>
            <div className="row">
              {/*falta implementar lo del required*/}
              <DataInput
                textLabel={"Capacidad del espacio:"}
                value={SpaceInf.capacidad}
                event={handleInputChange}
                orientation={"col"}
                nameid={"capacidad"}
                type={"number"}
                messageError={errors.capacidad}
              />
              <div className="col">
                <label htmlFor="fotografias" className="form-label">
                  Fotos:
                </label>
                <input
                  type="file"
                  id="fotografias"
                  name="fotografias"
                  className="form-control"
                  accept="image/*"
                  multiple
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <DataInput
              textLabel={"Ubicación del espacio deportivo:"}
              orientation={"row"}
              type={"text"}
              nameid={"ubicacion"}
              placeholder={"Indique donde se encuentra el espacio deportivo"}
              messageError={errors.ubicacion}
              event={handleInputChange}
              value={SpaceInf.ubicacion}
            />

            <div className="input-text">
              <label htmlFor="descripcion" className="form-label" required>
                Descripción:
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                className={`form-control ${
                  errors.descripcion ? "is-invalid" : ""
                }`}
                value={SpaceInf.descripcion}
                onChange={handleInputChange}
              />
              {errors.descripcion && (
                <div className="invalid-feedback">{errors.descripcion}</div>
              )}
            </div>

            <div id="btnContainers">
              <button type="submit" className="btn btn-success">
                Guardar
              </button>
              <button type="" className="btn btn-danger">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
