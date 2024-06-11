import React, { useEffect, useState } from 'react'
import styles from "./css/Footer.module.css"
import LogoIg from "../Assets/Img/instagram.svg"
import LogoFb from "../Assets/Img/facebook.svg"
import LogoLk from "../Assets/Img/linkedin.svg"
import Gmail from "../Assets/Img/gmail.svg"




export const Footer = () => {

    return (
        <footer className={styles.containerFooter}>
            <div className={styles.footerGrid}>
                <div className={styles.footerCard}>
                  <p></p>   
                </div>
                <div className={styles.footerCard}>
                <p>Contact Us</p>
                <div className={styles.redesContainer}>
                  <img src={LogoIg}></img>
                  <img src={LogoFb}></img>
                  <img src={LogoLk}></img>
                  <img src={Gmail}></img>
                </div>

                  <p> Tel <a>+549 156151515</a></p>
                

                </div>
                <div className={styles.footerCard}>
                  <p>Legales</p>
                  <p> Todos los derechos reservados 
                  Asociación Civil DAR POR MÁS SONRISAS <br></br>
                   ONG República Argentina</p>

                </div>

                <div className={styles.spyleRegister}>
     
                     <p>Developed by Spyle Solutions®</p>

            </div>
            </div>

         
        </footer>
    )
}


export default Footer