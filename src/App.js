import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
import hexToRgba from 'hex-to-rgba';

function App() {
  const datos = require("./colaboradores.json");

  const [estadoFormulario, actualizarEstadoFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState(datos);
  const [listaEquipos, setListaEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ]);

  const cambiarEstadoFormulario = () =>{
    actualizarEstadoFormulario(!estadoFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (key) =>{
    console.log("colaborador: ", key);
    /* setColaboradores(colaboradores.shift(key)); */
  };

  //Actualizar color equipos
  const actualizarColor = (color, titulo) =>{
    const equiposActualizados = listaEquipos.map((equipo) => {
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color;
      } 
      return equipo;
    })
    setListaEquipos(equiposActualizados)
  }

  return (
    <div className="App">
      <Header/>
      {/* { estadoFormulario === true ? <Formulario/> : <></> } */}
      {
        estadoFormulario && <Formulario 
          equipos={listaEquipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
      />
      }

      <MiOrg cambiarEstado = {cambiarEstadoFormulario}/>
      {
        listaEquipos.map((equipo, i) =>{
          return <Equipo 
          key = {equipo.titulo}
          datos = {equipo}
          colaboradores = {
            colaboradores.filter(colaborador => 
            colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          />
      })}

      <Footer/>
    </div>
  );
}

export default App;
