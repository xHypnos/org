import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const {titulo, colorPrimario} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor} = props;

    return <>
    { colaboradores.length > 0 &&
    <section className="container__equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.3)}}>
        <input
            className="input-color"
            type="color"
            value = {colorPrimario}
            onChange={(evento)=>{
                actualizarColor(evento.target.value, titulo)
            }}
        />
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            {
            colaboradores.map((colaborador, i) => 
                <Colaborador
                datos = {colaborador}
                key = {i}
                id = {i}
                colorPrimario = {colorPrimario}
                eliminarColaborador = {eliminarColaborador}
                />) 
            }
        </div>
    </section>
    }
    </>
}

export default Equipo;