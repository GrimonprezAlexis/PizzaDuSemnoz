'use client'
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const FooterSection2 = () => {
  return (
    <footer className="footer-2">
      <div 
      className="ad-footer position-relative"
      >
        <div className="container">
          <div className="ad-footer-subscribe">
            <motion.h4
            initial= {{
              x: -40,
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 1
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: 'easeIn'
            }}
            >Our Newsletter Now</motion.h4>
            <motion.div 
            className="position-relative"
            initial= {{
              x: 40,
              opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: 'easeIn'
            }}
            >
              <input type="text" placeholder="Your Email Address" />
              <Link href="#">
                <button>Subscribe</button>
              </Link>
            </motion.div>
          </div>
          <motion.div 
          className="ad-footer-list-container row align-items-center gx-4 row-gap-3"
          initial= {{
            y: 60,
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
            <div className="col-lg-3 col-sm-6 ad-footer-list">
              <Link href="/">
                <img src="/img/logo/logo-white.png" alt="" />
              </Link>
              <div className="d-flex gap-3 align-items-center">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  4920 Trails End Road Ft United
                  <br />
                  States, FL 33311
                </p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <i className="fa-solid fa-envelope-open-text"></i>
                <p>
                  nfo@example.com
                  <br />
                  test@example.com
                </p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <i className="fa-solid fa-phone-volume"></i>
                <div>
                  <Link href="tel:+123 456 679 123">+123 456 679 123</Link>
                  <br />
                  <Link href="tel:+123 456 789">+123 456 789</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 ad-footer-list">
              <h5>Our Services</h5>
              <ul>
                <li>
                  <Link href="/about">Fast Delivery</Link>
                </li>
                <li>
                  <Link href="/about">Vegan Cuisine</Link>
                </li>
                <li>
                  <Link href="/about">Fresh Products</Link>
                </li>
                <li>
                  <Link href="/about">Skilled Chefs</Link>
                </li>
                <li>
                  <Link href="/about">Great Coffee</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 ad-footer-list">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link href="/about-2">About Us</Link>
                </li>
                <li>
                  <Link href="/about">Testimonials</Link>
                </li>
                <li>
                  <Link href="/team">Our Team</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact-2">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 ad-footer-list">
              <h5>Opening Hours</h5>
              <ul>
                <li>
                  Mon -
                  <span className="ad-footer-list-opening-timer">
                    from 8am to 9pm
                  </span>
                </li>
                <li>
                  Saturday -
                  <span className="ad-footer-list-opening-timer">
                    from 9am to 4pm
                  </span>
                </li>
                <li>
                  Sunday -
                  <span className="ad-footer-list-opening-timer">
                    from 8am to 9pm
                  </span>
                </li>
                <li>
                  Mon -
                  <span className="ad-footer-list-opening-timer">
                    from 9am to 4pm
                  </span>
                </li>
                <li>
                  Saturday -
                  <span className="ad-footer-list-opening-timer">
                    from 8am to 9pm
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="ad-footer-bottom">
          <div className="container">
            <div className="row justify-content-center justify-content-sm-between g-3">
            <div className="col-sm-6">
              <motion.p
          initial= {{
            x: -40,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          viewport={{ once: true }}
          transition={{
              duration: 1.5,
              ease: 'easeIn'
          }}
          >Codebasket © {new Date().getFullYear()}. All Rights Reserved.</motion.p>
            </div>
            <div className="col-sm-6">
              <div className="ad-footer-bottom-img-container">
                 <motion.img 
                src="/img/aida-images/payment.png" 
                alt="" 
                initial= {{
                  x: 40,
                  opacity: 0
                }}
                whileInView={{
                  x: 0,
                  opacity: 1
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
                    ease: 'easeIn'
                }}
                /> 
              </div>
             
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
