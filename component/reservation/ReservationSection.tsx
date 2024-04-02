'use client'
import { useCafeuContext } from "@/context/CafeuContext";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const ReservationSection = () => {
  const {isVisible} = useCafeuContext()
  return (
    <section>
      <motion.div 
      className="ad-reservation position-relative"
      initial= {{
        y: 80,
        opacity: 0
      }}
      whileInView={{
          y: 0,
          opacity: 1
      }}
      viewport={{ once: true }}
      transition={{
          duration: 1.5,
          ease: 'easeIn'
      }}
      >
        <div className="d-flex justify-content-center">
          <div className="ad-reservation-form-container">
            <img src="/img/aida-images/service-icon.png" alt="" />
            <h4>Online Reservation</h4>
            <div>
              <div className="row ad-reservation-form">
                <div className="col-12 col-sm-6 position-relative">
                  <div className="ad-reserve-input-container">
                    <input type="text" name="" id="ad-reserve-input-field" placeholder="Name"/>
                    <i className="fa-regular fa-user"></i>
                  </div>
                  
                </div>
                <div className="col-12 col-sm-6 position-relative">
                <div className="ad-reserve-input-container">
                  <input type="text" name="" id="ad-reserve-input-field" placeholder="Phone"/>
                  <i className="fa-solid fa-phone"></i>
                </div>
                </div>
              </div>
              <div className="row ad-reservation-form">
                <div className="col-12 col-sm-6 position-relative">
                  <select name="" id="" defaultValue="0">
                    <option value="0" disabled hidden>
                      Persons
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="4+">5+</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 position-relative">
                  <select name="" id="">
                    <option value="" defaultValue="Location" disabled hidden>
                      Location
                    </option>
                    <option value="Mirpur">Mirpur</option>
                    <option value="Uttara">Uttara</option>
                    <option value="Nikunjo">Nikunjo</option>
                    <option value="Khilkhet">Khilkhet</option>
                  </select>
                </div>
              </div>
              <div className="row ad-reservation-form">
                <div className="col-sm-6 col-12 position-relative">
                <div className="ad-reserve-input-container">
                  <input type="date" name="" id="" placeholder="Date" />
                </div>
                </div>
                <div className="col-12 col-sm-6 position-relative">
                <div className="ad-reserve-input-container">
                  <input type="time" name="" id="" placeholder="Phone" />
                </div>
                </div>
              </div>
              <a href="reservation.html">
                <button>Book A Table</button>
              </a>
            </div>
          </div>
        </div>
        <div className="container ad-reservation-container counter-box">
        {isVisible && (
          <>
            <div className="ad-reservation-single-content">
              <img src="/img/aida-images/happy-face-reservation.png" alt="" />
              <div>
                <p>
                  <CountUp end={5670} duration={5} />
                </p>
                <span>Happy Customers</span>
              </div>
            </div>
            <div className="ad-reservation-line-shape">
              <img src="/img/aida-images/reservation-line-shape.png" alt="" />
            </div>
            <div className="ad-reservation-single-content">
              <img src="/img/aida-images/reservation-chef.png" alt="" />
              <div>
                <p>
                  <CountUp end={29} duration={5} />
                </p>
                <span>Pationate Chef's</span>
              </div>
            </div>
            <div className="ad-reservation-line-shape ad-reservation-second-line-shape">
              <img src="/img/aida-images/reservation-line-shape.png" alt="" />
            </div>
            <div className="ad-reservation-single-content">
              <img src="/img/aida-images/reservation-rice.png" alt="" />
              <div>
                <p>
                <CountUp end={260} duration={5} />
                </p>
                <span>Favourite Dishes</span>
              </div>
            </div>
            <div className="ad-reservation-line-shape d-xs-none">
              <img src="/img/aida-images/reservation-line-shape.png" alt="" />
            </div>
            <div className="ad-reservation-single-content">
              <img src="/img/aida-images/reservation-review.png" alt="" />
              <div>
                <p>
                <CountUp end={778} duration={5} />
                </p>
                <span>Customer Rating</span>
              </div>
            </div>
          </>
        )}
        </div>

      </motion.div>
    </section>
  );
};

export default ReservationSection;
