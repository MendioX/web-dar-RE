import React from "react";
import styles from "./Inicio.module.css"
import DarLogo from "../Assets/Img/LOGO_DAR.png"

const Inicio = () => {

    return (

       <section id="Home" className={styles.sectioninicio}>
       
        <div className={styles.principal} data-aos="fade-down" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
        <img src={DarLogo} className={styles.logoDar}></img>
        <h2>Asociación Civil  DAR POR MÁS SONRISAS</h2>
       
        
            <p> 
                 ONG sin fines de lucro que promueve la educación sobre la 
                 importancia de donar voluntariamente sangre y médula ósea en 
                 apoyo a los pacientes con leucemias y otras enfermedades oncológicas.
                 Somos una organización sin fines de lucro, de carácter no gubernamental que reúne voluntarios que deseen promover en la comunidad un cambio de cultura sobre la donación altruista y excluye toda forma de discriminación étnica, política o religiosa
                 </p>
        </div>
       </section>
    )

}

export default Inicio
