import "./InputForm.css";

const InputForm = (props) => {

    const {titulo, type, placeholder, required, valor, actualizar} = props;

    const manejarCambio = (e) => {
        actualizar(e.target.value);
        /* console.log(e.target.value); */
    }

    return <div className="container__input">
        <label>{titulo}</label>
        <input 
            type={type}
            placeholder={placeholder} 
            required={required} 
            value={valor}
            onChange={manejarCambio}
        />
    </div>
}

export default InputForm;