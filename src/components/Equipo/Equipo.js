import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const {titulo, colorPrimario, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    return <>
    { colaboradores.length > 0 &&
    <section className="container__equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.3)}}>
        <input
            className="input-color"
            type="color"
            value = {colorPrimario}
            onChange={(evento)=>{
                actualizarColor(evento.target.value, id)
            }}
        />
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            {
            colaboradores.map((colaborador, i) => 
                <Colaborador
                datos = {colaborador}
                key = {i}
                colorPrimario = {colorPrimario}
                eliminarColaborador = {eliminarColaborador}
                like = {like}
                />) 
            }
        </div>
    </section>
    }
    </>
}

export default Equipo;