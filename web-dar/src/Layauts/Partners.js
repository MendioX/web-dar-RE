import React from 'react'
import styles from "./partners.module.css"
import logoPfizer from "../Assets/Img/Pfizer_logo.png"
import logoTublood from "../Assets/Img/tublood_logo.png"
import qualis from "../Assets/Img/qualis.png"


const Partners = () => {

    return (
        <section id='Partners'>

            <div className={styles.mainPartner}>
                <p> Quienes nos apoyan </p>
                <div className={styles.partnersContainer}>

                    <div className={styles.cardPartner} data-aos="zoom-in" data-aos-duration="1000">

                        <img src={qualis} className={styles.logos} />
                    </div>
                    <div className={styles.cardPartner} data-aos="zoom-in" data-aos-duration="2000">
                        <img src={logoPfizer} className={styles.logos} />
                    </div>
                    <div className={styles.cardPartner} data-aos="zoom-in" data-aos-duration="3000">
                        <img src={logoTublood} className={styles.logos} />
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Partners