import "./Formulario.css";
import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const crearColaborador = (event) => {
        event.preventDefault();

        let datosFormulario = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }

        console.log(datosFormulario);
    };

    return <section className="container__formulario">
        <form className="formulario" onSubmit={crearColaborador}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputForm 
                titulo="Nombre"
                placeholder="Ingresar nombre" 
                required
                valor={nombre}
                actualizar={setNombre}
                />
            <InputForm 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizar={setPuesto}
                />
            <InputForm 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto}
                actualizar={setFoto}
                />
            <ListaOpciones
                equipos = {props.equipos}
                valor={equipo}
                actualizar={setEquipo}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario;