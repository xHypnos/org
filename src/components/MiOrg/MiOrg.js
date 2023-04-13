import "./MiOrg.css";

const MiOrg = (props) =>{
    return <section className="container__miorg">
        <h3>Mi Organizacion</h3>
        <img onClick={props.cambiarEstado} src="/img/add.png" alt="add"/>
    </section>
}

export default MiOrg;