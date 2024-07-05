import React from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import '../Styles/SpaceManager.css'

function SpaceManager() {
  const localizer = dayjsLocalizer(dayjs);
  return (
    <div className="container-fluid mainContainer">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <Calendar localizer={localizer} className="calendar"/>
        </div>
      </div>
    </div>
  );
}

export default SpaceManager;
