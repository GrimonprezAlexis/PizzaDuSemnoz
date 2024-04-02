'use client'
import React from "react";
import BannerSlide from "./BannerSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BannerSection5 = () => {
  return (
    <section>
      <div>
        <Swiper 
        id="carouselExample" 
        className="carousel slide"
        navigation={{
            prevEl: '.ad-carousel-prev-btn',
            nextEl: '.ad-carousel-next-btn'
        }}
        loop = {true}
        modules={[Navigation]}
        >
            <SwiperSlide>
                <BannerSlide/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerSlide/>
            </SwiperSlide>
          
            <div className="ad-banner-nav-container">
                <button className="carousel-control-prev ad-carousel-prev-btn">
                <div className="ad-carousel-arrow">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                </div>
                </button>
                <button className="carousel-control-next ad-carousel-next-btn">
                <div className="ad-carousel-arrow">
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                </div>
                </button>
            </div>
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection5;
