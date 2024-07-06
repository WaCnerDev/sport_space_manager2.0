import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import "../Styles/CardSportSpace.css";

function CardSportSpace({
  nombre,
  tipo,
  ubicacion,
  capacidad,
  descripcion,
  fotografias,
}) {
  return (
    <div className="cardContainer">
      <Card className="card">
        <CardHeader>
        <h5 className="font-bold text-large nameCard">{nombre}</h5>
        <div className="row">
          <div className="col">
            <p className="font-bold text-large">
              <span className="labelCard">Tipo de espacio:</span> {tipo}
            </p>
            <p className="text-tiny font-bold">
              <span className="labelCard">Capacidad Maxima: </span> {capacidad}
            </p>
          </div>
          <div className="col">
            <p className="text-tiny font-bold">
              <span className="labelCard">Ubicacion: </span> {ubicacion}
            </p>
          </div>
        </div>
        <div className="row">
          <p className="text-tiny font-bold"><span className="labelCard">Descripción: </span>{descripcion}</p>
        </div>
        </CardHeader>
        <CardBody className="overflow-visible cardBody">
          {fotografias !== undefined &&
            fotografias.map((fotografia, index) => (
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className={index===0?"carousel-item active":"carousel-item"} >
                    <img
                      key={index}
                      src={fotografia}
                      alt={`Preview ${index}`}
                      className="d-block w-100 img"
                    />
                  </div>
                </div>
              </div>
            ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default CardSportSpace;
