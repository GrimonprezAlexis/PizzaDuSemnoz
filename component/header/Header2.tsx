'use client';
import React from 'react';
import NavigationSection from '../navigation/NavigationSection';
import { useCafeuContext } from '@/context/CafeuContext';
import Link from 'next/link';
import DropdownCartSection from '../cart/DropdownCartSection';
interface HeaderProp {
  logo: string;
  theme: string;
}
const Header2: React.FC<HeaderProp> = ({ logo, theme }) => {
  const { openSearchbarModal, isHeaderFixed, cartItemAmount, openSidebar } = useCafeuContext();

  return (
    <header>
      <div className={`header header-2`}>
        <div className="container">
          <div className="header-inner second-home-nav">
            <div className="logo">
              <h2>Pizza du Semnoz</h2>
              <Link className="kf-pulse-number" href="tel:+0664541850">
                <i className="icofont-phone"></i> 06 64 54 18 50
              </Link>
            </div>
            <div className="header-right">
              <div className="header-menu d-none d-lg-block">
                <NavigationSection />
              </div>
              <div className="right-menu-icon">
                <ul className="d-flex align-items-center">
                  <li className="nav-list">
                    <a className="nav-link icon-item">
                      <span className="icofont-shopping-cart">
                        {' '}
                        <span className="cart-count">{cartItemAmount}</span>
                      </span>
                    </a>
                    <DropdownCartSection style="" />
                  </li>
                </ul>
              </div>
              <div className="d-lg-none dr-navbar-mobile-sign side-toggle">
                <div className="dr-navbar-sign menu-tab" onClick={openSidebar}>
                  <span className="dr-line-1"></span>
                  <span className="dr-line-2"></span>
                  <span className="dr-line-3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
