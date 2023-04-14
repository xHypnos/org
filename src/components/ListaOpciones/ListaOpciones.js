import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    const seleccionarEquipo = (e) =>{
        props.actualizar(e.target.value);
        /* console.log(e.target.value); */
    }

    return <div className="container__opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={seleccionarEquipo}>
            <option value={""} disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, i) => {
                return <option value={equipo} key={i}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;