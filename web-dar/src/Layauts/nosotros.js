import React from "react";

import styles from "./nosotros.module.css";
import { Dimensions, Text, View } from 'react';
import { vw, vh, vmin, vmax } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {dataDigitalBestSeller} from "./dataSlider.js"


function Nosotros  () {
  
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
       
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        cssEase: "linear",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
   
    return (
        //<section className={styles.sectionNosotros}>
           
           <div className={styles.container} id="Nosotros" data-aos="fade-up" data-aos-duration="3000">
           
                  <Slider {...settings} >

                    {dataDigitalBestSeller.map((item)=>(
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <img src={item.linkImg} alt={item.title} className={styles.imgImport}></img>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                
                            </div>
                        </div>
                    ))}
                </Slider>
              
                </div>

        //</section>
        )

}


export default Nosotros;
