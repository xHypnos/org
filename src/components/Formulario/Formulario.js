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

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("#89DFD9");

    const { registrarColaborador, registrarEquipo} = props;

    const crearColaborador = (event) => {
        event.preventDefault();

        let datosFormulario = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }

        registrarColaborador(datosFormulario);        
    };

    const crearEquipo = (event) => {
        event.preventDefault();

        let datosEquipo = {
            titulo: titulo,
            colorPrimario: color
        }

        registrarEquipo(datosEquipo); 
    };

    return <section className="container__formulario">
        <form className="formulario" onSubmit={crearColaborador}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputForm 
                type="text"
                titulo="Nombre"
                placeholder="Ingresar nombre" 
                required
                valor={nombre}
                actualizar={setNombre}
                />
            <InputForm 
                type="text"
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizar={setPuesto}
                />
            <InputForm 
                type="text"
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
        <form className="formulario" onSubmit={crearEquipo}>
        <h2>Rellena el formulario para crear el Equipo.</h2>
            <InputForm 
                type="text"
                titulo="Titulo"
                placeholder="Ingresar titulo" 
                required
                valor={titulo}
                actualizar={setTitulo}
                />
            <InputForm
                type="color"
                titulo="Color" 
                placeholder="Ingresar color hexagesimal" 
                required
                valor={color}
                actualizar={setColor}
                />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario;