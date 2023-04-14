import "./Colaborador.css";
import {AiFillCloseCircle} from "react-icons/ai";

const Colaborador = (props) => {
    const {nombre, puesto, foto} = props.datos;
    const {colorPrimario, eliminarColaborador, id} = props;

    const eliminar = () => {
        eliminarColaborador(id);
    }

    return <div className="container__colaborador">
        <AiFillCloseCircle onClick={eliminar} className="eliminar__btn"/>
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