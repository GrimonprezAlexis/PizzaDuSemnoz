'use client'
import React from "react";
import NavLink from "../navigation/NavLink";
import { useCafeuContext } from "@/context/CafeuContext";
import { motion } from "framer-motion";
type Props = {
  logo: string;
}
const Header3 = ({logo} : Props) => {
  const {cartItemAmount, handleCartOpen,openSearchbarModal, openSidebar} = useCafeuContext()
  return (
    <header className="header-3">
      <nav>
        <div className="ad-navbar-sm d-flex justify-content-between align-items-center d-lg-none">
          <div>
            <img src={logo} alt="" />
          </div>
          <div
            className="ad-responsive-menubar"
            role="button"
            onClick={openSidebar}
          >
            <i className="fa-thin fa-bars-sort"></i>
          </div>
        </div>
        <div className=" d-none d-lg-block">
          <div className="ad-header-container">
            <motion.div 
            className="ad-header-menu-container"
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
            >
              <div className="d-flex gap-3">
                <div
                  className="ad-search-icon"
                  role="button"
                  onClick={openSearchbarModal}
                >
                  <i className="fa-light fa-magnifying-glass"></i>
                </div>
                <div
                  className="offcanvas offcanvas-top navbar-offcanvas-lg"
                >
                  <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel"></h5>
                    <div className="ad-responsive-close-btn">
                      <button
                        type="button"
                        className="btn-close text-reset"
                      ></button>
                    </div>
                  </div>
                  <div className="offcanvas-body navbar-offcanvas-search">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search Your Food"
                    />
                    <br />
                    <button>Search</button>
                  </div>
                </div>
              </div>
              <nav className="ad-navlist">
                <li className="dropdown">
                  <a className="ad-nav-anchor">
                    Home+
                  </a>
                  <ul className="dropdown-content">
                    <li>
                      <NavLink href="/">Home 1</NavLink>
                    </li>
                    <li>
                      <NavLink href="/home-2">Home 2</NavLink>
                    </li>
                    <li>
                      <NavLink href="/home-3">Home 3</NavLink>
                    </li>
                    <li>
                      <NavLink href="/home-4">Home 4</NavLink>
                    </li>
                    <li>
                      <NavLink href="/home-5">Home 5</NavLink>
                    </li>
                    <li>
                      <NavLink href="/home-6">Home 6</NavLink>
                    </li>
                    <li>
                      <NavLink href="/home-7">Home 7</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="ad-nav-anchor">
                    About Us+
                  </a>
                  <ul className="dropdown-content">
                    <li>
                      <NavLink href="/about">About 1</NavLink>
                    </li>
                    <li>
                      <NavLink href="/about-2">About 2</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="ad-nav-anchor">
                    Menu+
                  </a>
                  <ul className="dropdown-content">
                    <li>
                      <NavLink href="/menu">Menu 1</NavLink>
                    </li>
                    <li>
                      <NavLink href="/menu-2">Menu 2</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink href="/reservation" className="ad-nav-anchor">
                    Reservation
                  </NavLink>
                  <div className="grad-nav-border">
                    <div className="left-nav-border"></div>
                    <div className="right-nav-border"></div>
                  </div>
                </li>
              </nav>
            </motion.div>
            <motion.div 
            className="ad-logo"
            initial= {{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: 'easeIn'
            }}
            >
              <NavLink href="/">
                <img src={logo} alt="" />
              </NavLink>
            </motion.div>
            <motion.div 
            className="ad-header-pages-container"
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
              <li className="dropdown">
                <a className="ad-nav-anchor">
                  Shop+
                </a>
                <ul className="dropdown-content">
                  <li>
                    <NavLink href="/shop">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink href="/shop/spaghetti-bolognese">Shop Details</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="ad-nav-anchor">
                  Pages+
                </a>
                <ul className="dropdown-content">
                  <li>
                    <NavLink href="/faq">FAQs</NavLink>
                  </li>
                  <li>
                    <NavLink href="/gallery">Gallery</NavLink>
                  </li>
                  <li>
                    <NavLink href="/service">Service</NavLink>
                  </li>
                  <li>
                    <NavLink href="/service/mouthwatering-culinary">Service Details</NavLink>
                  </li>
                  <li>
                    <NavLink href="/gallery/potato-wedges">Gallery Details</NavLink>
                  </li>
                  <li>
                    <NavLink href="/team">Team</NavLink>
                  </li>
                  <li>
                    <NavLink href="/team/mike-dooley">Team Details</NavLink>
                  </li>
                  <li>
                    <NavLink href="/pricing">Pricing</NavLink>
                  </li>
                  <li>
                    <NavLink href="/cart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink href="/wishlist">Wishlist</NavLink>
                  </li>
                  <li>
                    <NavLink href="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink href="/blog-grid">Blog Grid</NavLink>
                  </li>
                  <li>
                    <NavLink href="/blog/make-authentic-italian-margherita-pizza-at-home">Blog Details</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="ad-nav-anchor">
                  Contact+
                </a>
                <ul className="dropdown-content">
                  <li>
                    <NavLink href="/contact">Contact 1</NavLink>
                  </li>
                  <li>
                    <NavLink href="/contact-2">Contact 2</NavLink>
                  </li>
                </ul>
              </li>
              <div className="d-flex gap-3 align-items-center">
                <div className="ad-header-cart-container">
                  <button className="ad-cart-img-header-btn" onClick={handleCartOpen}>
                    <i className="fa-light fa-cart-shopping"></i>
                    <span className="ad-cart-count">{cartItemAmount < 10 ? ('0'+cartItemAmount): cartItemAmount}</span>
                  </button>
                </div>
                <div className="fs-5">
                  <NavLink href="/reservation">
                    <button className="ad-header-booking-btn">Book A Table</button>
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header3;
