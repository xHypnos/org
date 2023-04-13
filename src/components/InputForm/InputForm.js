import "./InputForm.css";

const InputForm = (props) => {
    const manejarCambio = (e) => {
        props.actualizar(e.target.value);
        console.log(e.target.value);
    }

    return <div className="container__input">
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default InputForm;