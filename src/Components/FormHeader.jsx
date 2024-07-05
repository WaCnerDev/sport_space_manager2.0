import '../Styles/FormHeader.css'

function FormHeader({title, description}) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <p id="description">
        {description}
      </p>
      <hr/>
    </div>
  );
}

export default FormHeader