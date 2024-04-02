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
              <a href="tel:06 64 54 18 50">06 64 54 18 50</a>
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
