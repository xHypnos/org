import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
    const {titulo, colorPrimario, colorSecundario} = props.datos;
    const {colaboradores} = props;

    return <>
    { colaboradores.length > 0 &&
    <section className="container__equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            {
            colaboradores.map((colaborador, i) => 
                <Colaborador
                datos = {colaborador}
                key = {i}
                colorPrimario = {colorPrimario}
                />) 
            }
        </div>
    </section>
    }
    </>
}

export default Equipo;