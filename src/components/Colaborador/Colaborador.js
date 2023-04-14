import "./Colaborador.css";

const Colaborador = (props) => {
    const {nombre, puesto, foto} = props.datos;
    const {colorPrimario} = props;

    return <div className="container__colaborador">
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <p>{puesto}</p>
        </div>
    </div>
}

export default Colaborador;