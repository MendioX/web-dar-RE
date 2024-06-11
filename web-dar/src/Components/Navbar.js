import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import styles from './css/Navbar.module.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Orbitron&display=swap');
</style>


export const Navbar = () => {

    

    const [navBarOpen, setNavBarOpen] = useState(false)

    const [windowDimension, setWindowDimension] = useState({
        with: window.innerWidth,
        height: window.innerHeight
    })


    const detectDimension = () => {
        setWindowDimension({
            with: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectDimension)
        windowDimension.with > 800 && setNavBarOpen(false)

        return () => {
            window.removeEventListener('resize', detectDimension)
        }
    }, [windowDimension])


    const links = [
        // {
        //     id: 1,
        //     link: "Home",
        //     url: "Home"
        // },
        {
            id: 2,
            link: "Nosotros",
            url: "Nosotros"
        },
        {
            id: 3,
            link: "Partners",
            url: "Partners"
        }
        // ,
        // {
        //     id: 3,
        //     link: "Campains",
        //     url: "http://localhost:3000/campains"
        // }
    ]

    return (
        <div className={!navBarOpen === true ? styles.navBar : styles.navBarOpen}>
            {!navBarOpen && <p className={styles.logo}>Dar Por Mas Sonrisas</p>}
            {!navBarOpen && windowDimension.with < 800 ? (< AiOutlineMenu size={25} onClick={() => { setNavBarOpen(!navBarOpen) }} />
            ) : (
                windowDimension.with < 800
            )}


            {
                navBarOpen && (
                    <ul className={styles.ulCategories}>

                <div>
                    <a href='http://localhost:3000' className={styles.navLink}>Home</a>
                </div>
                        {links.map(element => (
                            <div>
                                <Link
                                    onClick={() => setNavBarOpen(false)}
                                    to={element.link}
                                    smooth
                                    duration={500}
                                    className={styles.navLink}
                                >{element.link === "Campains" ? "Campains" : element.url}</Link>
                            </div>
                        ))}
                        <div>
                             <a href='http://localhost:3000/campains' className={styles.navLink}>Campains</a>
                        </div>
                    </ul>
                )}

            {(windowDimension.with > 800 && (
                <ul className={styles.ulCategories}>
                     <div>
                    <a href='http://localhost:3000' className={styles.navLink}>Home</a>
                </div>
                    {links.map(element => (
                        <div>
                            <Link
                                onClick={() => setNavBarOpen(false)}
                                to={element.link}
                                smooth
                                duration={500}
                                className={styles.navLink}>
                                {element.link === "Campains" ? "Campains" : element.url}
                            </Link>
                        </div>
                    ))}
                <div>
                <a href='http://localhost:3000/campains' className={styles.navLink}>Campains</a>
                </div>
                </ul>
                
            ))}
            
        </div>
    )
}
export default Navbar;