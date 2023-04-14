import "./Colaborador.css";
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;

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
            {
                fav ? <AiFillHeart
                    className="like__btn" 
                    color="red"
                    onClick={() => like(id)}
                /> 
                :     
                <AiOutlineHeart
                    className="like__btn" 
                    onClick={() => like(id)}
                />
            }
            
            
        </div>
    </div>
}

export default Colaborador;