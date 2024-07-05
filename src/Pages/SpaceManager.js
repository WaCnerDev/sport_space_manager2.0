import React from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "../Styles/SpaceManager.css";
import { Link } from "react-router-dom";

function SpaceManager({ registros }) {
  const localizer = dayjsLocalizer(dayjs);
  return (
    <div className="container-fluid mainContainer">
      <div className="row">
        <div className="col-4">
          <Link to="/SportSpace">
            <button>Agregar Espacio</button>
          </Link>
          <h2>Registros de Espacios Deportivos</h2>
          <ul>
            {registros != undefined && registros.map((registro, index) => (
              <li key={index}>
                <strong>Nombre:</strong> {registro.nombre},
                <strong> Tipo:</strong> {registro.tipo},
                <strong> Ubicación:</strong> {registro.ubicacion},
                <strong> Capacidad:</strong> {registro.capacidad},
                <strong> Descripción:</strong> {registro.descripcion}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-8">
          <Calendar localizer={localizer} className="calendar" />
        </div>
      </div>
    </div>
  );
}

export default SpaceManager;
