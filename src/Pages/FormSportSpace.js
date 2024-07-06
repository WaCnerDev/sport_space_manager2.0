import React, { useState } from "react";


import "../Styles/FormSportSpace.css";//mis estilos

//se importan los componentes que conforman el formulario
import FormHeader from "../Components/FormHeader";
import DataInput from "../Components/DataInput";
import ComboBox from "../Components/ComboBox";

//componentes hecho por terceros, notificaciones emergentes que dan feedback al usuario
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//importar el hook de navegación
import {useNavigate } from "react-router-dom";

//esta funcion recibe como parametro un funcion
//esta funcion corresponde al useState que se encuentra en el padre
//esto permite actualizar los valores del useState del padre desde el form
export default function FormSportSpace({ setRegistros }) {

  //Hook de navegacion para ir a otras pantallas
  const navigate = useNavigate(); // Hook de navegación

  //useState que mantiene el estado del formulario
  const [SpaceInf, setSpaceInf] = useState({
    nombre: "",
    tipo: "",
    ubicacion: "",
    capacidad: "",
    descripcion: "",
    fotografias: [],
  });

// se encargar de mantener el estado de los errores
//es otro elemente que ayuda a dar feedback al usuario
  const [errors, setErrors] = useState({});

  

// esta funcion se ejecuta cada vez que los elementos de form 
//cambian de valor, esto para renderizar la app en paralelo 
// y mantener los estados de los campos en tiempo real
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      const fileList = Array.from(files);
      const imgURL = fileList.map((file) => URL.createObjectURL(file));
      setSpaceInf({
        ...SpaceInf,
        [name]: imgURL,
      });
    } else {
      setSpaceInf({
        ...SpaceInf,
        [name]: value,
      });
    }
  };


  //navega al inicio de la App
  const goBack = () => {
    navigate("/");
  };



  //funcion que valida los errores de la app, esta funcion se ejecuta antes de realizar el registro
  const validate = () => {
    const errores = {};
    if (!SpaceInf.nombre) errores.nombre = "Ingresa el nombre del espacio deportivo";
    if (!SpaceInf.tipo) errores.tipo = "Seleccione el tipo de su espacio deportivo";
    if (!SpaceInf.ubicacion) errores.ubicacion = "Indique la ubicación de su espacio deportivo";
    if (!SpaceInf.capacidad) errores.capacidad = "Indique la capacidad de su espacio deportivo";
    if (!SpaceInf.descripcion) errores.descripcion = "Describa su espacio deportivo";
    return errores;
  };

  //este handle se ejecuta al enviar el form y
  //ejecuta algunas de las funciones anteriores
  const handleSubmit = (event) => {
    event.preventDefault();
    const errores = validate();
    if (Object.keys(errores).length > 0) { //existe al menos un error?
      setErrors(errores);
      toast.error("Faltan datos para el registro del espacio deportivo", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {  //sino escriba los valores del form utilizando la funcion que recibio como parametro
      setRegistros(SpaceInf);
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

      //restablesca los valores del formulario y los errores registrados hasta el momento
      setSpaceInf({
        nombre: "",
        tipo: "",
        ubicacion: "",
        capacidad: "",
        descripcion: "",
        fotografias: [],
      });
      setErrors({});

      //vuelva la inicio de la App
      navigate("/");
    }
  };


  return (
    <div className="container-fluid" id="mainContainer">
      <ToastContainer />
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
                className={`form-control ${errors.descripcion ? "is-invalid" : ""}`}
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
              <button type="button" className="btn btn-danger" onClick={goBack}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
