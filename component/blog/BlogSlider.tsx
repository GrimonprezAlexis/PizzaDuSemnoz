'use client';
import { blogSlider } from '@/data/Data';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BlogSlider = () => {
  return (
    <div className="product-slider mb-50" data-aos="fade-up" data-aos-duration="2000">
      <Swiper
        className="swiper productSlider"
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2500 }}
      >
        {blogSlider.map((item) => (
          <SwiperSlide className="swiper-slide" key={item.id}>
            <div className="slider-item-img">
              <img src={item.imgSrc} alt="Image not found" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next arrow-btn"></div>
      <div className="swiper-button-prev arrow-btn"></div>
    </div>
  );
};

export default BlogSlider;
