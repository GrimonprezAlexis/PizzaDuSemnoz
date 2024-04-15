'use client';
import { useCafeuContext } from '@/context/CafeuContext';
import Link from 'next/link';
import React from 'react';
import MobileNavigationSection from '../navigation/MobileNavigationSection';
interface SidebarProps {
  logo: string;
}
const SidebarSection: React.FC<SidebarProps> = ({ logo }) => {
  const { isSidebarOpen, closeSidebar, cartItemAmount } = useCafeuContext();

  return (
    <>
      <div className={`dr-sidebar-info side-info ${isSidebarOpen ? 'info-open' : ''}`}>
        <div className="dr-sidebar-logo-wrapper mb-25">
          <div className="row align-items-center">
            <div className="col-xl-6 col-10">
              <div className="dr-sidebar-logo">
                <div className="logo">
                  <Link href="/">
                    <img src="/img/logo/logo-pizza.png" alt="Logo not found" className="logo-img" />
                  </Link>
                  <div className="logo-text-2">
                    <Link href="/">
                      <h3>Pizza Du Semnoz</h3>
                    </Link>
                    <Link className="logo-text-red" href="tel:+0664541850">
                      <i className="icofont-phone"></i> 06 64 54 18 50
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-2">
              <div className="dr-sidebar-close-wrapper text-end">
                <button className="dr-sidebar-close side-info-close" onClick={closeSidebar}>
                  <i className="icofont-close-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="dr-sidebar-menu-wrapper fix">
          <div className="cf-header-menu mean-container">
            <MobileNavigationSection />
          </div>
        </div>

        <div className="dr-sidebar-contact-wrapper mt-40">
          <div className="dr-sidebar-contact mb-40">
            <h4 className="dr-sidebar-contact-title">Contact</h4>
            <span className="sidebar-address">
              <i className="icofont-google-map"></i>
              <span>
                18 Av. d'Aix-les-Bains, <br></br>74600 Seynod, France
              </span>
            </span>
            <a className="" href="tel:+0664541850">
              <i className="icofont-phone"></i> 06 64 54 18 50
            </a>
          </div>
        </div>
      </div>
      <div className={`offcanvas-overlay ${isSidebarOpen ? 'overlay-open' : ''}`} role="button" onClick={closeSidebar}></div>
    </>
  );
};

export default SidebarSection;
