'use client';
import React from 'react';
import NavigationSection from '../navigation/NavigationSection';
import { useCafeuContext } from '@/context/CafeuContext';
import Link from 'next/link';
import DropdownCartSection from '../cart/DropdownCartSection';
import Alert from '../alert/Alert';
interface HeaderProp {
  logo: string;
  theme: string;
}
const Header2: React.FC<HeaderProp> = ({ logo, theme }) => {
  const { openSearchbarModal, isHeaderFixed, cartItemAmount, openSidebar } = useCafeuContext();
  return (
    <header>
      <Alert />
      <div className={`header header-2`}>
        <div className="container">
          <div className="header-inner second-home-nav">
            <div className="logo">
              <div className="logo-text">
                <Link href="/">
                  <h3>🍕 Pizza Du Semnoz</h3>
                </Link>
                <Link className="kf-pulse-number" href="tel:+33664541850">
                  <i className="icofont-phone"></i> 06 64 54 18 50
                </Link>
              </div>
            </div>
            <div className="header-right">
              <div className="header-menu d-none d-lg-block">
                <NavigationSection classStyle="nav-2" />
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
