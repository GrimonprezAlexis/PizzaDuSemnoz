'use client';
import { useCafeuContext } from '@/context/CafeuContext';
import React from 'react';
import ScheduleBlock from './ScheduleBlock';

const ScheduleSection = () => {
  const { openVideoModal } = useCafeuContext();
  return (
    <section>
      <div className="availability mb-120">
        <div className="bg-availa">
          <div className="container">
            <div className="position-relative">
              <div className="row">
                <div className="col-md-6 col-xl-8 col-lg-7 my-2" data-aos="fade-right" data-aos-duration="1000">
                  <div className="available-content">
                    <a className="video-btn play-video" role="button" onClick={openVideoModal}>
                      <span className="icofont-ui-play"></span>
                    </a>
                    <h2 className="available-head">
                      We Have Excellent Of Quality <br /> Japanese Food
                    </h2>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 col-lg-5 my-2" data-aos="fade-left" data-aos-duration="1000">
                  <ScheduleBlock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
