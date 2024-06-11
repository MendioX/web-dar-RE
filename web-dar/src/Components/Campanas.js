
import React , { useEffect, useState } from "react";
import styles from "./css/Campanas.module.css"
import moreImg from "../Assets/Img/more.png"
import axios from "axios";
import Popup from "./PopUpCampanas"; 


// function openPopUp(){
//     console.log("un click")
// }
    function Campanas () {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [data, setData] = useState ([])

        function openPopUp() {
            setIsModalOpen(true);
          }
        
          function closePopUp() {
            setIsModalOpen(false);
          }

        useEffect(()=>{
            axios.get("http://localhost:8081/campains")
            .then(res => setData(res.data)      )
            .catch(err => console.log(err))}
            , [])

        return (

            <section className={styles.mainSection}>
            <div className={styles.containerGrid}>
        {  
                data.map(campaing =>(
                   
                    <div key={data.id} className={styles.card}>  
                        <div className={styles.subCard}>
                        <p>Name: {campaing.name}</p>
                        <p>Location: {campaing.location}</p>
                        <p>Fecha: {campaing.date}</p>
                        <p>Registrado: {campaing.registered}</p>
                        <p>Donantes: {campaing.donors}</p>
                        
                        </div>
                        <div className={styles.moreImg}
                        onClick={openPopUp}
                        >
                        <img src={moreImg} className={styles.moreIcon} />

                        </div>
                    </div>
                   
                   )
                )
        }
            </div>
            {isModalOpen && <Popup onClose={closePopUp} />}
            </section>
        )

       

    }


export default Campanas