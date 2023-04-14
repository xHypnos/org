import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';

function App() {
  const datos = require("./colaboradores.json");

  const [estadoFormulario, actualizarEstadoFormulario] = useState(false);
  const [colaboradores, setColaboradores] = useState(datos);
  const [listaEquipos, setListaEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
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

  const registrarEquipo = (equipo) =>{
    setListaEquipos([...listaEquipos, {...equipo, id: uuid() }]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    const colaboradoresTemp = colaboradores.filter((colaborador) => 
    colaborador.id !== id
    )
    setColaboradores(colaboradoresTemp);
  };
     
  //Actualizar color equipos
  const actualizarColor = (color, id) =>{
    const equiposActualizados = listaEquipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      } 
      return equipo;
    })
    setListaEquipos(equiposActualizados)
  }

  const like = (id) =>{
    const colaboradoresTemp = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })
    setColaboradores(colaboradoresTemp);
  };

  return (
    <div className="App">
      <Header/>
      {/* { estadoFormulario === true ? <Formulario/> : <></> } */}
      {
        estadoFormulario && <Formulario 
          equipos={listaEquipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          registrarEquipo = {registrarEquipo}
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
          like = {like}
          />
      })}

      <Footer/>
    </div>
  );
}

export default App;
