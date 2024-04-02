'use client'
import React from "react";
import { motion } from "framer-motion";
const AboutSection4 = () => {
  return (
    <section className="ad-about-section">
      <div className="container ad-about-container">
        <div className="ad-about-image-container position-relative">
          <motion.div 
          className="ad-about-person-image"
          initial = {{
            x: -80,
            opacity: 0
          }}
          whileInView={{
              x: 0,
              opacity: 1
          }}
          transition={{
              duration: 1.5,
              ease: 'easeIn'
          }}
          viewport={{
              once: true
          }}
          >
            <img src="/img/aida-images/about-picture1.png" alt="" />
          </motion.div>
          <motion.div 
          className="mt-md-5 mt-4 ad-about-side-image-container"
          initial = {{
            opacity: 0
          }}
          whileInView={{
              opacity: 1
          }}
          transition={{
              duration: 1.5,
              ease: 'easeIn'
          }}
          viewport={{
              once: true
          }}
          >
            <img
              className="ad-about-side-tea"
              src="/img/aida-images/about-picture2.png"
              alt=""
            />
            <img
              className=" ad-about-bottom-image"
              src="/img/aida-images/about-picture3.png"
              alt=""
            />
            <div className="ad-about-rounded-text">
              <img src="/img/aida-images/about-rounded-shape.png" alt="" />
            </div>
          </motion.div>
        </div>
        <motion.div 
        className="ad-about-text-container"
        initial = {{
          x: 80,
          opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 1.5,
            ease: 'easeIn'
        }}
        viewport={{
            once: true
        }}
        >
          <h5>about us</h5>
          <h4 className="ad-title-text">
            Cafeu restoracia online
            awesome food for you
          </h4>
          <p className="ad-description-text">
            Quis autem vel eum iure reprehenderit qui in evoluptate velit esse
            qua nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quvoluptas nulla pariatureaqua ipsa quae ab illo
          </p>
          <div className="ad-about-list-container">
            <div className="d-flex gap-3 align-items-center">
              <i className="fa-regular fa-square-check"></i>
              <p>Project Quality Management Plan</p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <i className="fa-regular fa-square-check"></i>
              <p>The Ability to Delegate Tasks</p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <i className="fa-regular fa-square-check"></i>
              <p>It might be a finished or unfinished</p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <i className="fa-regular fa-square-check"></i>
              <p>Project Quality Management Plan</p>
            </div>
          </div>
          <a href="/about-2">Read More</a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection4;
