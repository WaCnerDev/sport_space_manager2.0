import React from "react";
import { Link } from "react-router-dom"; // se utiliza para navegar entre screens

//estos son los imports correspondientes al componente externo (hecho por alguien más)
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs"; //en este caso yo quise utilizar dayjs, existen otras alternativas

//mis estilos
import "../Styles/CalendarStyles.css"; //sobre escribi los estilos del calendar para poder modificar su apariencia con mas comodidad y rapidez
import "../Styles/SpaceManager.css";

//imports de mis propios componentes
import ScrollableContainer from "../Components/ScrollableContainer";
import CardSportSpace from "../Components/CardSportSpace";

//esta funcion recibe como parametro los registros de los espacios deportivos realizados
//hasta el momento, es necesario ya que debe listarse de alguna forma los registros
//para posteriormente agregar, modificar o eliminar los eventos al calendar
function SpaceManager({ registros }) {
  //dependencia de react-big-calendar
  const localizer = dayjsLocalizer(dayjs);
  return (
      <div className="container-fluid mainContainer">
        <div className="row">
          <div className="col-4">
            <ScrollableContainer height={"100vh"}>
              <div className="headerSpaceRegisters">
                <h3 className="registerTitle">
                  Registros de Espacios Deportivos
                </h3>
                <Link to="/SportSpace" className="btnAddSpace">
                  <button type="button" class="btn btn-success spaceManager">
                    Agregar Espacio
                  </button>
                </Link>
              </div>
              <div className="cardsContainer">
                {registros !== undefined &&
                  registros.map(
                    (
                      registro,
                      index //recorre los registros y va renderizando las cards de cada espacio
                    ) => (
                      <CardSportSpace
                        capacidad={registro.capacidad}
                        nombre={registro.nombre}
                        descripcion={registro.descripcion}
                        fotografias={registro.fotografias}
                        tipo={registro.tipo}
                        ubicacion={registro.ubicacion}
                        key={index}
                      />
                    )
                  )}
              </div>
            </ScrollableContainer>
          </div>
          <div className="col-8">
            <Calendar localizer={localizer} className="calendar" />{" "}
            {/*este es el calendario, se le pasa como props el localizer*/}
          </div>
        </div>
      </div>
  );
}

export default SpaceManager;
