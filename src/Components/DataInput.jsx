function DataInput({
  event,
  orientation,
  textLabel,
  placeholder,
  messageError,
  nameid,
  value,
  type,
}) {
  return (
    <div className={orientation}>
      <div>
        <label htmlFor={nameid} className="form-label" required>
          {textLabel}
        </label>
        <input
          type={type}
          id={nameid}
          name={nameid}
          className={`form-control ${messageError ? "is-invalid" : ""}`}
          value={value}
          onChange={event}
          placeholder={placeholder}
        />
        {messageError && (
          <div className="invalid-feedback">{messageError}</div>
        )}
      </div>
    </div>
  );
}

export default DataInput;
