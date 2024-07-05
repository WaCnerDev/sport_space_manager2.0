function ComboBox({orientation, value, event, nameid, messageError}) {
  return (
    <div className={orientation}>
      <label htmlFor={nameid} className="form-label">
        Tipo de espacio deportivo:
      </label>
      <select
        id={nameid}
        name={nameid}
        className="form-select"
        value={value}
        onChange={event}
        required
      >
        <option value="" selected>
          Haz clic para seleccionar
        </option>
        <option value="Cancha de Baloncesto">Cancha de Baloncesto</option>
        <option value="Cancha de Tenis">Cancha de Tenis</option>
        <option value="Campo de Fútbol">Campo de Fútbol</option>
        <option value="Piscina Olímpica">Piscina Olímpica</option>
        <option value="Pista de Atletismo">Pista de Atletismo</option>
      </select>
      {messageError && <div className="invalid-feedback">{messageError}</div>}
    </div>
  );
}

export default ComboBox;