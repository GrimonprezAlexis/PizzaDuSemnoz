'use client';
import { useCafeuContext } from '@/context/CafeuContext';
import React from 'react';

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
                  <div className="avail-inner">
                    <div className="available-note">
                      <div className="note-head">
                        <h2 className="sm-title mb-0">Horaire d'ouverture</h2>
                        <h2 className="note-title mb-0">Nos disponibilités</h2>
                      </div>
                      <ul className="note-ul">
                        <li className="note-li">
                          <p className="day">Distributeur à Pizza</p>
                          <p className="time">24h/24 & 7j/7</p>
                        </li>
                        <li className="note-li">
                          <p className="day">Mardi au Samedi</p>
                          <p className="time">12h à 13h30</p>
                        </li>
                        <li className="note-li">
                          <p className="day">Mardi au Dimanche</p>
                          <p className="time">17h30 à 22h</p>
                        </li>
                        <li className="note-li">
                          <p className="day">Dimanche midi</p>
                          <p className="time">Fermé</p>
                        </li>
                        <li className="note-li">
                          <p className="day">Lundi journée</p>
                          <p className="time">Fermé</p>
                        </li>
                      </ul>

                      <div className="note-footer">
                        <h4 className="note-footer-text">Commandez maintenant</h4>
                        <a className="note-footer-text" href="tel:+0664541850">
                          06 64 54 18 50
                        </a>
                      </div>
                    </div>
                  </div>
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
