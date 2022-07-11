import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"

import project1 from './../../assets/images/portfolio/project1.png'
import project2 from './../../assets/images/portfolio/project2.png'
import project3 from './../../assets/images/portfolio/project3.png'

import { Pagination, Navigation } from "swiper";

const RecentProject = () => {
    return(
        <section className='recentProject'>
            <h2>Recent Project</h2>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
              <SwiperSlide>
                <div className='slide__image'>
                  <img src={project1} alt="" />
                </div>
                <div className='slide__text'>
                This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='slide__image'>
                  <img src={project2} alt="" />
                </div>
                <div className='slide__text'>
                This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slide__image'>
                    <img src={project3} alt="" />
                </div>
                <div className='slide__text'>
                  This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.
                </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='slide__image'>
                    <img src={project1} alt="" />
                </div>
                <div className='slide__text'>
                  This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slide__image'>
                    <img src={project2} alt="" />
                </div>
                <div className='slide__text'>
                  This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slide__image'>
                    <img src={project3} alt="" />
                </div>
                <div className='slide__text'>
                  This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.
                </div>
              </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default RecentProject