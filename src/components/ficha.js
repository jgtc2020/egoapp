import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Loader from '../components/loader.js';
import Header from '../components/header.js';
import '../css/ficha.css';
import car4 from '../img/car4.png';
import imgSS1 from '../img/image-c.png';
import imgSS2 from '../img/image-c2.png';
import imgSS3 from '../img/image-c3.png';
import imgSS4 from '../img/image-c4.png';
import imgs3 from '../img/imgs3.png';
import imgs4 from '../img/imgs4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

const Ficha = ()=>{
  return(
    <React.Fragment>
    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>
    <Loader />
    <Header />
    <div className="general-section-ficha">

    <div className="container">
    <div className="row">
    <div className="col-12 col-lg-6">
    <img className="img-car-ficha" src={car4} alt="imagem carro" />
    </div>
    <div className="col-12 col-lg-6">
    <h1 className="title-sm-model-car">Hilux DX/SR</h1>
    <h1 className="title-ds-model-car">Preparada para cualquier desafío</h1>
    <p className="text-ds-model-car">Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.</p>
    </div>
    </div>
    </div>

    <Swiper
      autoplay={{delay:3000}}
      spaceBetween={50}
      slidesPerView={4}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
    >
      <SwiperSlide>
      <div className="card-swiper-slide">
        <div className="banner-item-swiper-slide">
           <img className="img-banner-swiper-slide" src={imgSS1} alt="imagen slide" />
        </div>
         <div className="container-text-swiper-slide">
           <h1 className="title-card-swiper-slide">Nuevos motores Toyota</h1>
           <p className="text-card-swiper-slide">Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).</p>
         </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card-swiper-slide">
        <div className="banner-item-swiper-slide">
           <img className="img-banner-swiper-slide" src={imgSS2} alt="imagen slide" />
        </div>
         <div className="container-text-swiper-slide">
           <h1 className="title-card-swiper-slide">Suspensión mejorada</h1>
           <p className="text-card-swiper-slide">Mayor confort de marcha, estabilidad y capacidad Off Road.</p>
         </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card-swiper-slide">
        <div className="banner-item-swiper-slide">
           <img className="img-banner-swiper-slide" src={imgSS3} alt="imagen slide" />
        </div>
         <div className="container-text-swiper-slide">
           <h1 className="title-card-swiper-slide">Transmisión automática</h1>
           <p className="text-card-swiper-slide">Posibilidad de elección de caja automática de  manejo.</p>
         </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card-swiper-slide">
        <div className="banner-item-swiper-slide">
           <img className="img-banner-swiper-slide" src={imgSS4} alt="imagen slide" />
        </div>
         <div className="container-text-swiper-slide">
           <h1 className="title-card-swiper-slide">Transmisión manual</h1>
           <p className="text-card-swiper-slide">Posibilidad de elección de caja automática de  manejo.</p>
         </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card-swiper-slide">
        <div className="banner-item-swiper-slide">
           <img className="img-banner-swiper-slide" src={imgSS2} alt="imagen slide" />
        </div>
         <div className="container-text-swiper-slide">
           <h1 className="title-card-swiper-slide">Transmisión automática</h1>
           <p className="text-card-swiper-slide">Posibilidad de elección de caja automática de  manejo.</p>
         </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card-swiper-slide">
        <div className="banner-item-swiper-slide">
           <img className="img-banner-swiper-slide" src={imgSS3} alt="imagen slide" />
        </div>
         <div className="container-text-swiper-slide">
           <h1 className="title-card-swiper-slide">Suspensión mejorada</h1>
           <p className="text-card-swiper-slide">Mayor confort de marcha, estabilidad y capacidad Off Road.</p>
         </div>
      </div>
      </SwiperSlide>
      ...
    </Swiper>


    <div className="container general-section-3">
      <div className="row">
        <div className="col-lg-6 col-text-section-3">
          <h1 className="title-section-3-grid">Buena alternación</h1>
          <p className="text-section-3-grid">Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.</p>
        </div>
        <div className="col-lg-6 col-img-section-3">
        <img className="img-section-3-grid" src={imgs3} alt="imagen de auto"/>
        </div>
      </div>
    </div>


    <div className="container general-section-4">
      <div className="row">
        <div className="col-lg-6 col-img-section-4">
        <div className="container-img-overflow-section-4">
        <img className="img-section-4-grid" src={imgs4} alt="imagen de auto"/>
        </div>
        </div>
        <div className="col-lg-6 col-text-section-4">
        <h1 className="title-section-4-grid">Buena alternación</h1>
        <p className="text-section-4-grid">Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>



    </div>

     </motion.div>
    </React.Fragment>
  )
};

export default Ficha;
