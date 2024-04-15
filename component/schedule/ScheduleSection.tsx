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
                    <a className="video-btn play-video" role="button">
                      <span className="icofont-pizza-slice" style={{ fontSize: '1.5rem' }}></span>
                    </a>
                    <h2 className="available-head">24h/7j : Dégustez nos pizzas 24h/7j</h2>
                    <p className="mb-0">avec un distributeur de pizza à votre disposition derrière le chalet </p>
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
