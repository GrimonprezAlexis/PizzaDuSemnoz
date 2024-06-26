import { bannerData3 } from '@/data/Data';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BannerSection4 = () => {
  return (
    <section>
      <div className="banner banner-2 home5-slider">
        <Swiper
          className="swiper bannerSlider"
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{
            el: '.banner-pagination',
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {bannerData3.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <div className={`banner-bg slider5-height banner-4 ${item.bannerBg}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-9 col-md-10 my-2" data-aos="fade-up" data-aos-duration="1000">
                      <div className="slider-details">
                        <div className="text-inner">
                          <span className="hero-sub-title">{item.subTitle}</span>
                          <h2 className="hero4-title hero5-title">{item.title}</h2>
                          <div className="cb-slider-list">
                            <ul>
                              <li>
                                <i className="icofont-check-alt"></i>A emporter
                              </li>
                              <li>
                                <i className="icofont-check-alt"></i>Préparées sur commandes
                              </li>
                              <li>
                                <i className="icofont-check-alt"></i>Distributeur 24H/7J
                              </li>
                            </ul>
                          </div>
                          <div className="cb-slider-buttons d-flex align-items-center justify-content-center justify-content-md-start mt-50">
                            <a className="cb-slider-button" href="/menu">
                              Nos Pizzas
                            </a>
                            <a className="cb-slider-button second-button" href="tel:+33664541850">
                              06 64 54 18 50
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="banner-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection4;
