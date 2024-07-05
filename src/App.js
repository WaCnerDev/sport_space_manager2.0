import SpaceManager from "./Pages/SpaceManager";
import FormSportSpace from "./Pages/FormSportSpace";
import React, {useState} from "react";


function App() {
  const [registros, setRegistros] = useState([]);


  
  // mantiene el estado de todos los registros
  return (
    <div>
      <FormSportSpace setRegistros={setRegistros} />
      <SpaceManager registros={registros}/>
    </div>
  );
}

export default App;
